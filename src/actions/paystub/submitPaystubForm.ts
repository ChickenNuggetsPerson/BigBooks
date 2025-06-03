'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { PayStub } from "@/database/generated/prisma"
import { prisma } from "@/database/prisma"


export default async function submitPaystubForm(newStub: PayStub) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Editor)

    // TODO: Make this logic work

    if (newStub.uuid == "") { // Create new

        // await prisma.payStub.create({
        //     data: {

        //     }
        // })

    } else {

        await prisma.payStub.update({
            where: { uuid: newStub.uuid },
            data: {
                
            }
        })

    }
}