import Loading from "@/components/Decorative/Loading/Loading";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import EmployeeCompensationForm from "@/components/Employee/compensation/EmployeeCompensationForm";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import getEmployeeCompensations from "@/actions/employeeCompensation/getEmployeeCompensations";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { notFound } from "next/navigation";
import { Permissions } from "@/auth/permissions/PermissionsDef";



export default async function EmployeeSalaryPage({ params }: { params: Promise<{ employeeUUID: string }> }) {

    const { employeeUUID } = await params

    await throwIfInsufficientPerms(Permissions.employee.compensation.edit)

    const employee = await getEmployeeProps(employeeUUID)
    if (!employee) {
        notFound()
    }
    const comps = await getEmployeeCompensations(employee.uuid)

    return (
        <div className="">

            <Link href={`/organization/employee/${employeeUUID}`} >
                <MoveLeft />
            </Link>

            <AnimateChildren y={-20} className="mx-20">
                <Suspense fallback={<Loading hCenter vCenter />}>
                    <EmployeeCompensationForm payload={comps} employee={employee} />
                </Suspense>
            </AnimateChildren>
        </div>
    )
}