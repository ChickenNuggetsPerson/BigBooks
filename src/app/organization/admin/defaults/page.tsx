import Loading from "@/components/Decorative/Loading/Loading"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import PaystubDefaultsForm from "@/components/payroll/payrollItems/PayrollItemsForm"
import { MoveLeft } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"





export const dynamic = 'force-dynamic'

export default async function OrgGroupsPage() {

    await throwIfInsufficientPerms(Permissions.admin.orgItem.view)

    return (
        <div>
            <Link href={`/organization/overview`} >
                <MoveLeft />
            </Link>

            <div className="w-full flex flex-row justify-center">
                <Suspense fallback={<Loading vCenter hCenter/>}>
                    <PaystubDefaultsForm organization/>
                </Suspense>
            </div>

        </div>
    )
}