import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import EmployeeCard from "@/components/Employee/EmployeeCard";
import EmployeeTaxCard from "@/components/Employee/taxes/EmployeeTaxCard";
import { EmployeeSelectPaystub } from "@/components/Employee/EmployeeSelectPaystub";
import EmployeeStubDefaultsCard from "@/components/Employee/EmployeeStubDefaultsCard";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import EmployeeCompensationCard from "@/components/Employee/compensation/EmployeeCompensationCard";


export default async function EmployeeView({
    params,
}: {
    params: Promise<{ employeeUUID: string }>
}) {

    const empUUID = (await params).employeeUUID
    const employee = await getEmployeeProps(empUUID, true)

    if (!employee) {
        return (<a>Error Loading Details</a>)
    }

    return (

        <div>

            <Link href={`/organization/employee`} >
                <MoveLeft />
            </Link>

            <AnimateChildren y={-20} className="flex flex-row justify-center gap-6">
                <div>
                    <EmployeeCard employee={employee} />
                </div>
                <div>
                    <EmployeeTaxCard employee={employee} />
                    <EmployeeStubDefaultsCard employee={employee} />
                </div>

                <div className="flex flex-col gap-8">
                    <EmployeeCompensationCard employee={employee} />
                    <EmployeeSelectPaystub empUUID={employee.uuid} />
                </div>
            </AnimateChildren>

        </div>

    )
}

