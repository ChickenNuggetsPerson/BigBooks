'use server'

import { redirectIfInvalidSession } from "@/auth/auth";
import { getDispEmployee, getEmptyDispEmployee } from "@/database/models/DisplayModels"
import { prisma } from "@/database/prisma";



enum FilterOption {
    All = 1,
    Visable = 2,
    Deactivated = 3
}

// 1 For All, 2 For Visable, 3 for Deactivated
export default async function getEmployeeList(orgUUID: string, filter: FilterOption) {

    await redirectIfInvalidSession()
    
    try {

        const organization = await prisma.organization.findUnique({
            where: { uuid: orgUUID },
            include: {
                employees: true
            }
        })

        if (!organization) { return [getEmptyDispEmployee("Error")] }

        let list = organization.employees
            .map((e) => getDispEmployee(e, true))
            .sort((a, b) => a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase()));

        if (filter == FilterOption.Deactivated) {
            list = list.filter((e) => e.isDeleted === true)
        }
        if (filter == FilterOption.Visable) {
            list = list.filter((e) => e.isDeleted === false)
        }

        return list;

    } catch (err) {
        console.error(err)
        return [getEmptyDispEmployee("Error")]
    }
}