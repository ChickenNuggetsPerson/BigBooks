import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import EmployeeCompensationForm from "@/components/Employee/compensation/EmployeeCompensationForm";
import { MoveLeft } from "lucide-react";
import Link from "next/link";



export default async function EmployeeSalaryPage({ params }: { params: Promise<{ employeeUUID: string }> }) {

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

    const employee = await getEmployeeProps(employeeUUID, true)
    if (!employee) {
        return (
            <div className="items-center min-h-screen p-8 pb-20 gap-16">
                <div className="card max-w-sm">
                    Invalid Employee
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

                <EmployeeCompensationForm employee={employee}/>

            </AnimateChildren>
        </div>
    )
}