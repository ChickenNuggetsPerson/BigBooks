import EditableDiv from "../../Decorative/EditableDiv";
import { HourlyRateStr, MoneyToStr } from "@/utils/functions/MoneyStr";
import { Divider } from "../../Forms/Divider";
import { CardProp } from "../EmployeeCard";
import { Employee } from "@/database/generated/prisma";





export default function EmployeeTaxCard({ employee }: { employee: Employee }) {

    return (

        <EditableDiv url={`/organization/employee/${employee.uuid}/editTaxes`} className="w-xs card mb-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Tax Details</h5>

            <Divider />

            <CardProp label="Status:" val={employee.filingStatus}/>
            <CardProp label="Dependants:" val={String(employee.dependants)}/>

        </EditableDiv>


    );
}


interface HourlyRateProps { rates: { name: string; rate: number }[] }
export function HourlyRates({ rates }: HourlyRateProps) {
    return (
        <div className="w-max">
            <a className="font-normal text-gray-500 ">Pay Rates: </a>

            <table className="table-fixed w-3xs text-white">

                <thead>
                    <tr className="bg-primary">
                        <th className="p-1" >Title</th>
                        <th>Rate</th>
                    </tr>
                </thead>

                <tbody className="bg-gray-100 text-black">
                    {rates.map((rate, i) => (
                        <tr key={i}>
                            <td className="text-center">{rate.name}</td>
                            <td className="text-center">{HourlyRateStr(rate.rate)}</td>
                        </tr>

                    ))}
                </tbody>

            </table>
        </div>

    )
}

interface SalaryRateProps { salary: number }
export function SalaryRate({ salary }: SalaryRateProps) {
    return (
        <CardProp label={"Salary:"} val={MoneyToStr(salary)} />
    )
}