import getUserPagePermissions from "@/actions/user/getUserPagePermissions"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { getOrgMembership, userHasPermission } from "@/auth/permissions/PermissionsFunctions"
import CollapsibleDiv from "@/components/Decorative/CollapsibleDiv"
import LoadingBlock from "@/components/Decorative/LoadingBlock"
import Link from "next/link"



export async function OrganizationAdminToolsCard_Loading() {
    return (
        <CollapsibleDiv title={<p className="mb-2 text-2xl font-normal text-gray-700 select-none">Admin Tools:</p>} className="card max-w-sm">
            <LoadingBlock w={"full"} className="mb-2" />
            <LoadingBlock w={"full"} className="mb-2" />
            <LoadingBlock w={"full"} className="mb-2" />
        </CollapsibleDiv>
    )
}

export default async function OrganizationAdminToolsCard() {

    const perms = await getUserPagePermissions()

    return (
        <CollapsibleDiv title={<p className="mb-2 text-2xl font-normal text-gray-700 select-none">Admin Tools:</p>} className="card max-w-sm">

            {perms.orgEdit &&
                <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/configure"}>
                    Edit Organization Details
                </Link>}


            {perms.orgItemsEdit &&
                <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/defaults"}>
                    Organization Payroll Items
                </Link>
            }

            {perms.payrollGroupEdit &&
                <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/groups"}>
                    Payroll Groups
                </Link>}


            {perms.taxesEdit &&
                <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/taxes"}>
                    Organization Taxes
                </Link>
            }

            {perms.orgUsersEdit &&
                <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/users"}>
                    Configure Users
                </Link>
            }

        </CollapsibleDiv>
    )
}