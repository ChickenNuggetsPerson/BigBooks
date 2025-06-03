import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import EmployeeSalaryForm from "@/components/Employee/EmployeeSalaryForm";
import { MoveLeft } from "lucide-react";
import Link from "next/link";



export default async function EmployeeSalaryPage({params}: { params: Promise<{ employeeUUID: string }> }) {

    const { employeeUUID } = await params

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

            <Link href={`/organization/employee/${employeeUUID}`} >
                <MoveLeft/>
            </Link>

            <AnimateChildren y={-100} className="mx-20">

                <EmployeeSalaryForm empUUID={employeeUUID}></EmployeeSalaryForm>

            </AnimateChildren>
        </div>
    )
}