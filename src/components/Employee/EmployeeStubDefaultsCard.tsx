'use server'

import { AbsMaxPeriodTypes, Employee } from "@/database/generated/prisma";
import EditableDiv from "../Decorative/EditableDiv";
import { Divider } from "../Forms/Divider";
import { MoneyToStr } from "@/utils/functions/MoneyStr";
import { percentToStr } from "@/utils/functions/PercentStr";
import CollapsibleDiv from "../Decorative/CollapsibleDiv";
import { CardProp } from "@/components/Forms/CardProp";
import getPayrollItems from "@/actions/paystub/payrollItems/getPayrollItems";
import { deserializeData } from "@/utils/serialization";





export default async function EmployeeStubDefaultsCard({ employee }: { employee: Employee }) {

    const defaults = deserializeData(await getPayrollItems({ employeeId: employee.uuid })).employee

    return (
        <EditableDiv url={`/organization/employee/${employee.uuid}/editDefaults`} className="w-xs h-fit">

            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Payroll Items</h5>
            <Divider />

            {defaults.map((item) => (
                <CollapsibleDiv key={item.uuid} arrowSize={15} className="select-none" title={<p>{item.name}</p>}>
                    <div className="pl-2 pt-1 pb-4">
                        <div className="flex flex-row justify-between w-full">
                            <CardProp label={"Section:"} val={item.type} />
                            <p style={{ fontSize: 15 }} >{item.percent ? percentToStr(Number(item.percent)) : MoneyToStr(Number(item.amount))}</p>
                        </div>

                        <div className="flex flex-row justify-between w-full">
                            <CardProp label={"Limit: "} val={item.absMaxPeriod} />
                            {item.absMaxPeriod !== AbsMaxPeriodTypes.None && <p style={{ fontSize: 15 }} >{MoneyToStr(Number(item.absMax))}</p>}
                        </div>
                    </div>
                </CollapsibleDiv>
            ))}

            {defaults.length === 0 &&
                <div className="pl-2 pt-1 pb-4">
                    <div className="text-center w-full">
                        <p style={{ fontSize: 15 }}>No Employee Specific Items</p>
                    </div>

                </div>
            }

        </EditableDiv>
    )
}