'use server'



import { Permissions } from "@/auth/permissions/PermissionsDef";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { prisma } from "@/database/prisma";



export default async function deletePayrollGroup(groupUUID: string) {

    await throwIfInsufficientPerms(Permissions.payroll.payrollGroup.del)

    await prisma.payrollGroup.delete({ where: { uuid: groupUUID } })
}