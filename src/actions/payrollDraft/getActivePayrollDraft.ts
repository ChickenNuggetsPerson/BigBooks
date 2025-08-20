'use server'

import { Permissions } from "@/auth/permissions/PermissionsDef"
import { getOrgMembership, throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import getPayrollDraft from "./getPayrollDraft"





export default async function getActivePayrollDraft() {

    await throwIfInsufficientPerms(Permissions.payroll.paystub.edit)

    const membership = await getOrgMembership()
    if (!membership) { throw new Error("Insufficient Permissions") }
    if (!membership.activeDraftId) { return null }

    return await getPayrollDraft(membership.activeDraftId)
}