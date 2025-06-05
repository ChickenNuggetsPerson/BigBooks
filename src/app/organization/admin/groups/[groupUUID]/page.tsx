import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import AnimateChildren from "@/components/Decorative/AnimateChildren"
import PayrollItemsForm from "@/components/payroll/payrollItems/PayrollItemsForm"
import { MoveLeft } from "lucide-react"
import Link from "next/link"





export default async function GroupPayrollItemEditPage({
    params,
}: {
    params: Promise<{ groupUUID: string }>
}) {

    const groupUUID = (await params).groupUUID


    try {
        await throwIfInsufficientPerms(RoleTypes.Editor)
    } catch {

        return (
            <div className="items-center min-h-screen p-8 pb-20 gap-16">
                <div className="card max-w-sm">
                    Insufficient Permissions
                </div>
            </div>
        )

    }


    return (
        <div className="">

            <Link href={"/organization/admin/groups"} >
                <MoveLeft />
            </Link>

            <AnimateChildren y={-100}>

                <PayrollItemsForm group groupUUID={groupUUID}/>

            </AnimateChildren>
        </div>
    )

}