import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import EmployeeCard from "@/components/Employee/EmployeeCard";
import EmployeeSalaryCard from "@/components/Employee/EmployeeSalaryCard";
import { EmployeeSelectPaystub } from "@/components/Employee/EmployeeSelectPaystub";
import { hideSSN } from "@/functions/SSNStr";
import { MoveLeft } from "lucide-react";
import Link from "next/link";


export default async function EmployeeView({
    params,
}: {
    params: Promise<{ employeeUUID: string }>
}) {

    const empUUID = (await params).employeeUUID

    const employee = await getEmployeeProps(empUUID, false)

    if (!employee) {
        return (<a>Error Loading Details</a>)
    }

    employee.ssn = hideSSN(employee.ssn)

    return (

        <div>

            <Link href={`/organization/employee`} style={{ position: 'absolute' }} className="text-black font-medium text-lg w-full sm:w-auto px-5 py-2.5 text-center" >
                <MoveLeft size={20}/>
            </Link>

            <AnimateChildren y={-100} className="flex flex-col lg:flex-row gap-6 justify-center px-10 py-20">
                <EmployeeCard employee={employee} />
                <div>
                    <EmployeeSalaryCard employee={employee} />
                    <EmployeeSelectPaystub empUUID={employee.uuid} />
                </div>
            </AnimateChildren>

        </div>

    )
}

