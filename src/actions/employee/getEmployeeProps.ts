'use server'


import { redirectIfInvalidSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { hideSSN } from "@/utils/functions/SSNStr"






export default async function getEmployeeProps(empUUID: string, stripSensitive: boolean) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(Permissions.employee.personal.view)

    try {
        if (!stripSensitive) {
            await throwIfInsufficientPerms(Permissions.employee.personal.edit)
        }

        const employee = await prisma.employee.findUniqueOrThrow({where: {uuid: empUUID}})
        if (stripSensitive) {
            employee.ssn = hideSSN(employee.ssn)
        }

        return employee
    } catch (err) {
        console.log(err)
        return null
    }
}