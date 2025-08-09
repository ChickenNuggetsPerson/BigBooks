import getEmployeeCompensations from "@/actions/employeeCompensation/getEmployeeCompensations";
import { Divider } from "@/components/Forms/Divider";
import { deserializeData, serializeData } from "@/utils/serialization";
import EmployeeCompensationAddButton from "./EmployeeCompensationAddButton";
import EmployeeCompensationFormCard from "./EmployeeCompensationFormCard";
import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { Permissions } from "@/auth/permissions/PermissionsDef";




export default async function EmployeeCompensationForm({ employeeUUID }: { employeeUUID: string }) {


    try {
        await throwIfInsufficientPerms(Permissions.employee.compensation.edit)
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
    const comps = deserializeData(await getEmployeeCompensations(employee.uuid)).map(c => {
        return {
            data: serializeData(c),
            uuid: c.uuid
        }
    })

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
                    <EmployeeCompensationFormCard data={c.data} key={c.uuid}/>
                ))}
            </div>
        </div>
    )
}