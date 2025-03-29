'use client'

import { DispEmployee } from "@/database/models/DisplayModels";





export default function EmployeeSalaryCard({ employee }: { employee: DispEmployee }) {
    return (
        <div className="w-sm card mb-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Employee Pay</h5>

            <HourlyRates rates={employee?.hourlyRates ?? []} />

        </div>
    );
}


interface HourlyRateProps { rates: { name: string; rate: number }[] }
function HourlyRates({ rates }: HourlyRateProps) {


    return (
        <div>
            <a className="font-normal text-gray-500 dark:text-gray-300">Pay Rates: </a>

            {rates.map((rate, i) => (

                <div className="flex" key={i}>
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-white-200 rounded-s-md dark:bg-zinc-600 dark:text-gray-100 border border-gray-300 dark:border-gray-600">
                        <a>{rate.name}</a>
                    </span>
                    <input type="text" defaultValue={`$${rate.rate} / hr`} className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-zinc-700 dark:border-gray-600 dark:text-white" disabled></input>
                </div>

            ))}

            {/* <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-white-200 rounded-s-md dark:bg-zinc-600 dark:text-gray-100 border border-gray-300 dark:border-gray-600">
                <a>{"+"}</a>
            </span> */}

        </div>
    )
}