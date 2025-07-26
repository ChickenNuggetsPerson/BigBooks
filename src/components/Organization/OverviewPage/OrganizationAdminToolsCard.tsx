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

    const membership = await getOrgMembership()

    const details = await userHasPermission({ membership, perm: Permissions.org.edit })
    const items = await userHasPermission({ membership, perm: Permissions.admin.orgItem.edit })
    const groups = await userHasPermission({ membership, perm: Permissions.payroll.payrollGroup.edit })
    const taxes = await userHasPermission({ membership, perm: Permissions.admin.taxes.edit })
    const users = await userHasPermission({ membership, perm: Permissions.admin.users.edit })

    return (
        <CollapsibleDiv title={<p className="mb-2 text-2xl font-normal text-gray-700 select-none">Admin Tools:</p>} className="card max-w-sm">

            {details &&
                <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/configure"}>
                    Edit Organization Details
                </Link>}


            {items &&
                <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/defaults"}>
                    Organization Payroll Items
                </Link>
            }

            {groups &&
                <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/groups"}>
                    Payroll Groups
                </Link>}


            {taxes &&
                <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/taxes"}>
                    Organization Taxes
                </Link>
            }

            {users &&
                <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/users"}>
                    Configure Users
                </Link>
            }

        </CollapsibleDiv>
    )
}