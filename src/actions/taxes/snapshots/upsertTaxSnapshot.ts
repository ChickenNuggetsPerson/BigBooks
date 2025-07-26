'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms, throwIfNotSYSAdmin } from "@/auth/permissions/PermissionsFunctions"
import { FilingTypes, Prisma } from "@/database/generated/prisma"
import { prisma } from "@/database/prisma"
import { deserializeData, SerializationResult } from "@/utils/serialization"
import { revalidatePath } from "next/cache"


type TaxSnapshotWithBrackets = Prisma.TaxSnapshotGetPayload<{ include: { brackets: true } }>

// Takes in the tax snapshot and the related brackets
export default async function upsertTaxSnapshot(data: SerializationResult<TaxSnapshotWithBrackets>) {

    const session = await getSession()
    if (!session) {
        throw new Error("Invalid Session")
    }

    const snapshotData = deserializeData(data)
    const tax = await prisma.tax.findUnique({ where: { uuid: snapshotData.taxId } })
    if (!tax) { throw new Error("Invalid tax ID") }

    // Check permissions and make sure orgUUID's arent messed with
    if (tax.sysAdminControlled) {
        await throwIfNotSYSAdmin()
        tax.organizationID = ""
    } else {
        await throwIfInsufficientPerms(Permissions.admin.taxes.edit)
        if (session.orgUUID !== tax.organizationID) {
            throw new Error("Unmatched OrgUUIDs")
        }
    }


    const currentSnapshot = await prisma.taxSnapshot.upsert({
        where: { uuid: snapshotData.uuid },
        create: {
            taxId: tax.uuid,
            effectiveThrough: snapshotData.effectiveThrough,
            description: snapshotData.description,
            supportsJoint: snapshotData.supportsJoint,
            taxType: snapshotData.taxType
        },
        update: {
            effectiveThrough: snapshotData.effectiveThrough,
            description: snapshotData.description,
            supportsJoint: snapshotData.supportsJoint,
            taxType: snapshotData.taxType
        }
    })

    let bracketsData = snapshotData.brackets
    if (!snapshotData.supportsJoint) { // Remove joint brackets if the snapshot no longer supports them
        bracketsData = bracketsData.filter(b => b.filingType == FilingTypes.Single)
    }
    bracketsData = bracketsData.filter(b => !(b.ammount.equals(0) && b.rate.lessThanOrEqualTo(0))) // Remove empty brackets
    const currentBrackets = await prisma.taxBracket.findMany({ where: { taxSnapshotId: currentSnapshot.uuid } })

    // New / Edit items
    for (let i = 0; i < bracketsData.length; i++) {
        const bracket = bracketsData[i]
        bracket.taxSnapshotId = currentSnapshot.uuid // Make sure the id is correct

        await prisma.taxBracket.upsert({
            where: { uuid: bracket.uuid },
            create: {
                taxSnapshotId: bracket.taxSnapshotId,
                min: bracket.min,
                hasMinBound: bracket.hasMinBound,
                max: bracket.max,
                hasMaxBound: bracket.hasMaxBound,
                filingType: bracket.filingType,
                rate: bracket.rate,
                ammount: bracket.ammount
            },
            update: {
                min: bracket.min,
                hasMinBound: bracket.hasMinBound,
                max: bracket.max,
                hasMaxBound: bracket.hasMaxBound,
                filingType: bracket.filingType,
                rate: bracket.rate,
                ammount: bracket.ammount
            }
        })
    }

    const deletedItems = currentBrackets.filter(bracket => bracketsData.findIndex(i => i.uuid == bracket.uuid) == -1)
    for (let i = 0; i < deletedItems.length; i++) {
        await prisma.taxBracket.delete({ where: { uuid: deletedItems[i].uuid } })
    }


    if (tax.sysAdminControlled) {
        // TODO: Add sysadmin tax path 
        revalidatePath("/user/taxes")
    } else {
        revalidatePath("/organization/admin/taxes")
    }

}