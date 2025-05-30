import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import EmployeeSalaryForm from "@/components/Employee/EmployeeSalaryForm";



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
        <div className="items-center min-h-screen p-8 pb-20 gap-16 ">
            <AnimateChildren x={0} y={-100}>

                <EmployeeSalaryForm empUUID={employeeUUID}></EmployeeSalaryForm>

            </AnimateChildren>
        </div>
    )
}