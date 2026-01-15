'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { getOrgMembership, userHasPermission } from "@/auth/permissions/PermissionsFunctions"




export type UserPagePermissions = {
    orgEdit: boolean,
    orgItemsEdit: boolean,
    payrollGroupEdit: boolean,
    taxesEdit: boolean,
    orgUsersEdit: boolean
}


export default async function getUserPagePermissions(): Promise<UserPagePermissions> {
    const session = await getSession()
    if (!session) { throw new Error("Insufficient Permissions")}

    const membership = await getOrgMembership()

    const details = await userHasPermission({ membership, perm: Permissions.org.edit })
    const items = await userHasPermission({ membership, perm: Permissions.admin.orgItem.edit })
    const groups = await userHasPermission({ membership, perm: Permissions.payroll.payrollGroup.edit })
    const taxes = await userHasPermission({ membership, perm: Permissions.admin.taxes.edit })
    const users = await userHasPermission({ membership, perm: Permissions.admin.users.edit })

    return {
        orgEdit: details,
        orgItemsEdit: items,
        payrollGroupEdit: groups,
        taxesEdit: taxes,
        orgUsersEdit: users
    }
}