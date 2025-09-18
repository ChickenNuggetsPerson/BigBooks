'use server'


import { redirectIfInvalidSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"




export default async function getEmployeeProps(empUUID: string) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(Permissions.employee.personal.view)

    return await prisma.employee.findUnique({ where: { uuid: empUUID } })
}