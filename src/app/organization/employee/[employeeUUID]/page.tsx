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
                <MoveLeft/>
            </Link>

            <AnimateChildren y={-100} className="flex flex-row gap-6 justify-center px-10">
                <div>
                    <EmployeeCard employee={employee} />
                    <EmployeeCompensationCard employee={employee}/>
                    <EmployeeSelectPaystub empUUID={employee.uuid} />
                </div>
                <div>
                    <EmployeeTaxCard employee={employee} />
                    <EmployeeStubDefaultsCard employee={employee} />
                </div>
            </AnimateChildren>

        </div>

    )
}

