import Loading from "@/app/Loading"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import PaystubDefaultsForm from "@/components/payroll/payrollItems/PayrollItemsForm"
import { MoveLeft } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"





export const dynamic = 'force-dynamic'

export default async function OrgGroupsPage() {

    await throwIfInsufficientPerms(RoleTypes.Admin)

    return (
        <div>
            <Link href={`/organization/overview`} >
                <MoveLeft />
            </Link>

            <div className="w-full flex flex-row justify-center">
                <Suspense fallback={<div className="mx-auto card w-fit"><Loading vCenter hCenter/></div>}>
                    <PaystubDefaultsForm organization/>
                </Suspense>
            </div>

        </div>
    )
}