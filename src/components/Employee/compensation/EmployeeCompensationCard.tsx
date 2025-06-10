import getEmployeeCompensations from "@/actions/employeeCompensation/getEmployeeCompensations";
import CollapsibleDiv from "@/components/Decorative/CollapsibleDiv";
import EditableDiv from "@/components/Decorative/EditableDiv";
import { Employee } from "@/database/generated/prisma";
import { MoneyToStr } from "@/utils/functions/MoneyStr";
import { deserializeData } from "@/utils/serialization";
import { CardProp } from "@/components/Forms/CardProp";
import { CornerDownRight, TriangleAlert } from "lucide-react";
import { Divider } from "@/components/Forms/Divider";




export default async function EmployeeCompensationCard({ employee }: { employee: Employee }) {

    const comps = deserializeData(await getEmployeeCompensations(employee.uuid))

    return (
        <EditableDiv className="w-xs h-fit" url={`/organization/employee/${employee.uuid}/editComps`}>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Compensations</h5>
            <Divider />

            <div className="h-1"></div>

            {comps.map((item) => (
                <CollapsibleDiv key={item.uuid} arrowSize={15} className="select-none" title={<p className="">{`Group: ${item.payrollGroup.name}`}</p>}>
                    <div className="pl-2 pt-1 pb-4">

                        {item.description && <p style={{ fontSize: 15, marginTop: 10 }} className="bg-gray-50 p-2 rounded-sm mb-1 max-h-20 overflow-y-scroll" >{item.description}</p>}

                        {item.isSalary &&
                            <div className=" w-full">
                                <CardProp label={"Salary:"} val={MoneyToStr(item.salaryAmount?.toNumber() ?? 0)} />
                            </div>
                        }

                        {!item.isSalary &&
                            <div>
                                {item.hourlyRates.map(rate => (
                                    <div key={rate.uuid}>
                                        <div className="w-full flex flex-row justify-between">
                                            <div>{rate.name}</div>
                                            <CardProp label="" val={MoneyToStr(rate.rate.toNumber())} />
                                        </div>
                                        {rate.canOvertime && <div className="pl-5 font-mono flex flex-row gap-2" style={{ fontSize: 15 }}><CornerDownRight /> <p className="pt-1" >Can Overtime</p>  </div>}
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </CollapsibleDiv>
            ))}

            {comps.length === 0 &&
                <div className="pl-2 pt-1 pb-4">
                    <div className="w-full flex flex-row justify-center gap-4">
                        <TriangleAlert />
                        <p style={{ fontSize: 15 }}>No Employee Compensations</p>
                    </div>

                </div>
            }

        </EditableDiv>
    )
}