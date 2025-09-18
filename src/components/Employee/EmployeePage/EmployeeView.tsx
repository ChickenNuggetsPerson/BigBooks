import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import EmployeeCard, { EmployeeCard_Loading } from "@/components/Employee/EmployeeCard";
import EmployeeTaxCard, { EmployeeTaxCard_Loading } from "@/components/Employee/taxes/EmployeeTaxCard";
import { EmployeeSelectPaystub } from "@/components/Employee/Paystubs/EmployeeSelectPaystub";
import EmployeeStubDefaultsCard from "@/components/Employee/EmployeeStubDefaultsCard";
import EmployeeCompensationCard from "@/components/Employee/compensation/EmployeeCompensationCard";
import TabGroup from "@/components/Decorative/TabGroup";
import getEmployeePaystubs from "@/actions/paystub/getEmployeePaystubs";
import LoadingBlock from "@/components/Decorative/LoadingBlock";
import { notFound } from "next/navigation";



export function EmployeeView_Loading() {
    return (
        <TabGroup tabNames={["Employee", "Taxes", "Comps", "Payroll", "Paystubs"]} className="" verticalTabs>
            <EmployeeCard_Loading />
            <EmployeeTaxCard_Loading />

            <div className="w-xs">
                <LoadingBlock w={"full"} h={10} />
            </div>
            <div className="w-xs">
                <LoadingBlock w={"full"} h={10} />
            </div>
            <div className="w-xs">
                <LoadingBlock w={"full"} h={10} />
            </div>
        </TabGroup>
    )
}


export default async function EmployeeView({ empUUID }: { empUUID: string }) {

    const employee = await getEmployeeProps(empUUID)

    if (!employee) {
        notFound()
    }

    const stubs = await getEmployeePaystubs(empUUID)

    return (
        <TabGroup tabNames={["Employee", "Taxes", "Comps", "Payroll", "Paystubs"]} className="" verticalTabs>
            <EmployeeCard employee={employee} />
            <EmployeeTaxCard employee={employee} />
            <EmployeeCompensationCard employee={employee} />
            <EmployeeStubDefaultsCard employee={employee} />
            <EmployeeSelectPaystub data={stubs} />
        </TabGroup>
    );

}


