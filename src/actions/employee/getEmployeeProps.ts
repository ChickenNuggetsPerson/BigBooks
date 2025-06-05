'use server'


import { redirectIfInvalidSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { hideSSN } from "@/utils/functions/SSNStr"






export default async function getEmployeeProps(empUUID: string, stripSensitive: boolean) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Viewer)

    try {
        if (!stripSensitive) {
            await throwIfInsufficientPerms(RoleTypes.Editor)
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