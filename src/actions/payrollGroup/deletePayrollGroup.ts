'use server'

import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import { prisma } from "@/database/prisma";



export default async function deletePayrollGroup(groupUUID: string) {

    await throwIfInsufficientPerms(RoleTypes.Admin)

    await prisma.payrollGroup.delete({ where: { uuid: groupUUID } })
}