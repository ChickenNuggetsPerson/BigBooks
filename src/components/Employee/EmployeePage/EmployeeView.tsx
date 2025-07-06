import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import EmployeeCard from "@/components/Employee/EmployeeCard";
import EmployeeTaxCard from "@/components/Employee/taxes/EmployeeTaxCard";
import { EmployeeSelectPaystub } from "@/components/Employee/Paystubs/EmployeeSelectPaystub";
import EmployeeStubDefaultsCard from "@/components/Employee/EmployeeStubDefaultsCard";
import EmployeeCompensationCard from "@/components/Employee/compensation/EmployeeCompensationCard";
import TabGroup from "@/components/Decorative/TabGroup";
import getEmployeePaystubs from "@/actions/paystub/getEmployeePaystubs";
import LoadingBlock from "@/components/Decorative/LoadingBlock";




export function EmployeeView_Loading() {
    return (
        <TabGroup tabNames={["Employee", "Taxes", "Comps", "Payroll", "Paystubs"]} className="" verticalTabs>
            <div className="w-xs">
                <LoadingBlock w={"full"} h={10} />
            </div> 
            <div className="w-xs">
                <LoadingBlock w={"full"} h={10} />
            </div>
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

    const employee = await getEmployeeProps(empUUID, true)

    if (!employee) {
        return (
            <div className="card h-fit w-fit">
                Invalid Employee UUID
            </div>
        )
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


