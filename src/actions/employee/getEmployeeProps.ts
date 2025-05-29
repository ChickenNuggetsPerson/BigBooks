'use server'


import { redirectIfInvalidSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { getDispEmployee } from "@/database/models/DisplayModels"
import { prisma } from "@/database/prisma"






export default async function getEmployeeProps(empUUID: string, stripSensitive: boolean) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Viewer)

    try {
        const employee = await prisma.employee.findUniqueOrThrow({where: {uuid: empUUID}})
        return getDispEmployee(employee, stripSensitive)
    } catch (err) {
        console.log(err)
        return null
    }
}