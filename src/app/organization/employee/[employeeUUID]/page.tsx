import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import EmployeeCard from "@/components/Employee/EmployeeCard";
import EmployeeTaxCard from "@/components/Employee/taxes/EmployeeTaxCard";
import { EmployeeSelectPaystub } from "@/components/Employee/EmployeeSelectPaystub";
import EmployeeStubDefaultsCard from "@/components/Employee/EmployeeStubDefaultsCard";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import EmployeeCompensationCard from "@/components/Employee/compensation/EmployeeCompensationCard";
import TabGroup from "@/components/Decorative/TabGroup";


export default async function EmployeeView({
    params,
}: {
    params: Promise<{ employeeUUID: string }>
}) {

    const empUUID = (await params).employeeUUID
    const employee = await getEmployeeProps(empUUID, true)

    if (!employee) {
        return <>Invalid Employee</>
    }

    return (
        <div>
            <Link href={`/organization/employee`}>
                <MoveLeft />
            </Link>

            <div className="w-full flex flex-row justify-center">
                <TabGroup tabNames={["Employee", "Taxes", "Comps", "Payroll", "Paystubs"]} className="" horizontal>
                    <EmployeeCard employee={employee} />
                    <EmployeeTaxCard employee={employee} />
                    <EmployeeCompensationCard employee={employee} />
                    <EmployeeStubDefaultsCard employee={employee} />

                    <EmployeeSelectPaystub empUUID={employee.uuid} />
                </TabGroup>
            </div>

        </div>
    );

}


