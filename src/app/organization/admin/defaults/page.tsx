import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import PaystubDefaultsForm from "@/components/payroll/paystubItems/PaystubDefaultsForm"
import { MoveLeft } from "lucide-react"
import Link from "next/link"





export const dynamic = 'force-dynamic'

export default async function OrgGroupsPage() {

    await throwIfInsufficientPerms(RoleTypes.Admin)

    return (
        <div>
            <Link href={`/organization/overview`} >
                <MoveLeft />
            </Link>

            <PaystubDefaultsForm organization/>

        </div>
    )
}