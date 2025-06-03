'use server'

import { redirectIfInvalidSession } from "@/auth/auth";
import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import { prisma } from "@/database/prisma";



enum FilterOption {
    All = 1,
    Visable = 2,
    Deactivated = 3
}

// 1 For All, 2 For Visable, 3 for Deactivated
export default async function getEmployeeList(orgUUID: string, filter: FilterOption) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Viewer)
    
    try {

        const organization = await prisma.organization.findUnique({
            where: { uuid: orgUUID },
            include: {
                employees: true
            },
        })

        if (!organization) { return [] }

        let list = organization.employees

        // Strip SSNs from payload
        for (let i = 0; i < list.length; i++) {
            list[i].ssn = ""
        }

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