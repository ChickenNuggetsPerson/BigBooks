'use server'

import { Employee } from "@/database/generated/prisma";
import EditableDiv from "../Decorative/EditableDiv";
import { Divider } from "../Forms/Divider";
import getPaystubItems from "@/actions/paystub/items/getPaystubItems";
import { MoneyToStr } from "@/functions/MoneyStr";
import { percentToStr } from "@/functions/PercentStr";





export default async function EmployeeStubDefaultsCard({ employee }: { employee: Employee }) {

    const defaults = await getPaystubItems({ employeeId: employee.uuid })

    return (
        <EditableDiv url={`/organization/employee/${employee.uuid}/editDefaults`} className="w-xs card mb-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Payroll Items</h5>
            <Divider />

            {defaults.map((item) => (
                <div key={item.uuid} className="flex flex-row justify-between">
                    <p>{item.name}</p>
                    <p className="font-semibold font-mono" style={{ fontSize: 15 }}>
                        {item.percent ? percentToStr(Number(item.percent)) : MoneyToStr(Number(item.amount))}
                    </p>
                </div>
            ))}

        </EditableDiv>
    )
}