import getEmployeeCompensations from "@/actions/employeeCompensation/getEmployeeCompensations";
import { Divider } from "@/components/Forms/Divider";
import { Employee } from "@/database/generated/prisma";
import { deserializeData } from "@/utils/serialization";
import EmployeeCompensationAddButton from "./EmployeeCompensationAddButton";
import EmployeeCompensationFormCard from "./EmployeeCompensationFormCard";




export default async function EmployeeCompensationForm({ employee }: { employee: Employee }) {

    const comps = deserializeData(await getEmployeeCompensations(employee.uuid))

    return (
        <div className="flex flex-row justify-center w-full gap-5">
            <div className="card w-sm h-fit">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Compensations</h5>
                <Divider />
                <h6 className="mb-5 text-2xl tracking-tight text-gray-400">{`${employee.firstName} ${employee.lastName}`}</h6>
                
                <EmployeeCompensationAddButton employee={employee} />
            </div>

            <div className="flex flex-col gap-2">
                {comps.map(c => (
                    <EmployeeCompensationFormCard comp={c} key={c.uuid}/>
                ))}
            </div>
        </div>
    )
}