'use client'

import { DispEmployee } from "@/database/models/DisplayModels";
import EditableDiv from "../Decorative/EditButton";
import { HourlyRateStr, MoneyToStr } from "@/functions/MoneyStr";





export default function EmployeeSalaryCard({ employee }: { employee: DispEmployee }) {

    return (
        <EditableDiv url={`/organization/employee/${employee.uuid}/editSalary`} className="w-xs card mb-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Employee Pay</h5>
            
            {employee.isSalary && <SalaryRate salary={employee.salary}/>}

            {!employee.isSalary && <HourlyRates rates={employee?.hourlyRates ?? []} />}
            
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

                        // <div className="flex text-white" key={i}>
                        //     <span className="bg-primary  inline-flex items-center px-3 text-sm rounded-s-md ">
                        //         <a>{rate.name}</a>
                        //     </span>
                        //     <input type="text" defaultValue={`$${rate.rate} / hr`}
                        //         className="bg-primary-up bordertext-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 rounded-e-md"
                        //         disabled></input>
                        // </div>

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
        <div className="w-max">
            <a className="font-normal text-gray-500 ">Salary: </a>

            <p className="font-mono">{MoneyToStr(salary)}</p>
        </div>

    )
}