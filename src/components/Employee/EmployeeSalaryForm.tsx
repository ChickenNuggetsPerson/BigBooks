'use client'

import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import submitEmployeeSalaryForm from "@/actions/employee/submitEmployeeSalaryFrom";
import TextInput from "@/components/Forms/TextInput";
import { DispEmployee, getEmptyDispEmployee } from "@/database/models/DisplayModels";
import { useEffect, useState } from "react";
import SelectInput from "../Forms/SelectInput";
import AnimateChildren from "../Decorative/AnimateChildren";
import NumberInput from "../Forms/NumberInput";
import { Divider } from "../Forms/Divider";
import { FilingTypes } from "@/database/Taxes/FilingTypes";


const SalaryOptions = [
    {
        label: "Salary",
        id: "salary"
    },
    {
        label: "Hourly",
        id: "hourly"
    }
]

const FilingOptions = [
    {
        label: "Single",
        id: FilingTypes.Single
    },
    {
        label: "Joint",
        id: FilingTypes.Joint
    }
]


interface EmployeeSalaryFormProps { empUUID: string }
export default function EmployeeSalaryForm({ empUUID }: EmployeeSalaryFormProps) {

    const [props, setProps] = useState(getEmptyDispEmployee())
    const [error, setError] = useState(false)

    const [section, setSection] = useState("")

    useEffect(() => {
        async function load() {

            const employee = await getEmployeeProps(empUUID, false)
            if (employee) { // Employee exists
                setProps(employee)
                setSection(SalaryOptions[employee.isSalary ? 0 : 1].id)
            } else {
                setError(true)
                setSection("")
            }

        }
        load()


    }, [empUUID])


    if (error) {
        return (
            <div>
                Error Fetching Employee
            </div>
        )
    }

    function onSalaryTypeChange(val: string) { setSection(val) }

    return (

        <form className="grid grid-cols-2" action={submitEmployeeSalaryForm}>

            <div className="max-w-md card">
                <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 ">Edit Employee Pay</h5>
                <Divider />
                <h6 className="mb-5 text-2xl tracking-tight text-gray-400">{`${props.firstName} ${props.lastName}`}</h6>

                <div className="flex flex-row gap-4">
                    <SelectInput id={"filing"} label={"Filing Status"} val={props.filingStatus} options={FilingOptions} />
                    <div className="mt-8 w-full">
                        <NumberInput id={"dependants"} label={"# of Dependants"} val={props.dependants} />
                    </div>
                </div>

                <SelectInput id={"isSalary"} label={"Pay Type"} val={SalaryOptions[props.isSalary ? 0 : 1].id} options={SalaryOptions} changeCB={onSalaryTypeChange} />

                <button type="submit" className="bg-primary rounded-md text-white w-full text-xl font-bold p-1">Submit</button>
            </div>

            <div className="max-w-md card">
                <div className="mb-10">
                    {section == SalaryOptions[0].id && <AnimateChildren x={0} y={-10}> <SalarySection d={props} /> </AnimateChildren>}
                    {section == SalaryOptions[1].id && <AnimateChildren x={0} y={-10}> <HourlySection d={props} /> </AnimateChildren>}
                </div>

                <TextInput id={"uuid"} label={"Emp UUID"} val={props.uuid} disabled />
            </div>
        </form>

    )
}



interface SectionProps { d: DispEmployee }
function SalarySection({ d }: SectionProps) {
    return (
        <div className="card">
            <div className="mt-3">
                <NumberInput id={"salary"} label={"Annual Salary"} val={d.salary} placeholder={""} disabled={false} />
            </div>
        </div>
    )
}


function HourlySection({ d }: SectionProps) {
    const [rates, setRate] = useState(d.hourlyRates)

    function addRate() {
        setRate([...rates, { name: "", rate: 0 }])
    }

    function removeRate(i: number) {
        setRate(rates.filter((r, index) => { return index != i }))
    }

    return (
        <div>
            {rates.map((r, i) => (
                <div key={i} className="card w-full flex flex-row justify-between">
                    <TextInput id={i + "-name"} label={"Name"} val={r.name} placeholder={""} disabled={false} />
                    <NumberInput id={i + "-rate"} label={"$ / hr"} val={r.rate} placeholder={""} disabled={false} />

                    <button type="button" onClick={() => { removeRate(i) }} className="accent-button m-2">X</button>
                </div>
            ))}

            <button type="button" onClick={addRate} className="primary-button m-2">+</button>
        </div>
    )

}