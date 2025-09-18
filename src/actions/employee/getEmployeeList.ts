'use server'

import { redirectIfInvalidSession } from "@/auth/auth";
import { Permissions } from "@/auth/permissions/PermissionsDef";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { prisma } from "@/database/prisma";



enum FilterOption {
    All = 1,
    Visable = 2,
    Deactivated = 3
}

// 1 For All, 2 For Visable, 3 for Deactivated
export default async function getEmployeeList(orgUUID: string, filter: FilterOption) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(Permissions.employee.personal.view)
    
    try {

        const organization = await prisma.organization.findUnique({
            where: { uuid: orgUUID },
            include: {
                employees: true
            },
        })

        if (!organization) { return [] }

        let list = organization.employees

        if (filter == FilterOption.Deactivated) {
            list = list.filter((e) => e.isDeleted === true)
        }
        if (filter == FilterOption.Visable) {
            list = list.filter((e) => e.isDeleted === false)
        }

        return list;

    } catch (err) {
        console.error(err)
        return []
    }
}