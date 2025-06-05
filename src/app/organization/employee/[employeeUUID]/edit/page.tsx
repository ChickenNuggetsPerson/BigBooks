import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import EmployeeForm from "@/components/Employee/EmployeeForm";
import { MoveLeft } from "lucide-react";
import Link from "next/link";





export default async function EmployeeView({ params }: { params: Promise<{ employeeUUID: string }> }) {

    const { employeeUUID } = await params
    const isNew = employeeUUID === "new"

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

            <Link href={isNew ? "/organization/employee" : `/organization/employee/${employeeUUID}`} >
                <MoveLeft/>
            </Link>

            <AnimateChildren y={-100}>

                <EmployeeForm empUUID={employeeUUID}></EmployeeForm>

            </AnimateChildren>
        </div>
    )
}