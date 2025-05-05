'use server'

import { getDispEmployee, getEmptyDispEmployee } from "@/database/models/DisplayModels"
import { prisma } from "@/database/prisma";



export default async function getEmployeeList(orgUUID: string, showDeleted: boolean) {
    try {

        const organization = await prisma.organization.findUnique({
            where: { uuid: orgUUID },
            include: {
                employees: true
            }
        })

        if (!organization) { return [getEmptyDispEmployee("Error")] }

        const list = organization.employees
            .map((e) => getDispEmployee(e, true))
            .filter((e) => e.isDeleted === showDeleted)
            .sort((a, b) => a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase()));

        return list;

    } catch (err) {
        console.error(err)
        return [getEmptyDispEmployee("Error")]
    }
}