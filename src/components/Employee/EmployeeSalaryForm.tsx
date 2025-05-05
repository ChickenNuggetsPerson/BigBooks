'use clients'

import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import submitEmployeeSalaryForm from "@/actions/employee/submitEmployeeSalaryFrom";
import TextInput from "@/components/Forms/TextInput";
import { DispEmployee, getEmptyDispEmployee } from "@/database/models/DisplayModels";
import Link from "next/link";
import { useEffect, useState } from "react";
import SelectInput from "../Forms/SelectInput";
import AnimateChildren from "../AnimateChildren";
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

    function cancelURL(id: string) {
        return `/organization/employee/${id}`
    }

    function onSalaryTypeChange(val: string) { setSection(val) }

    return (

        <form className="max-w-md mx-auto card mb-5" action={submitEmployeeSalaryForm}>

            <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 ">Edit Employee Pay</h5>
            <h6 className="mb-5 text-2xl tracking-tight text-gray-400">{`${props.firstName} ${props.lastName}`}</h6>

            <SelectInput id={"filing"} label={"Filing Status"} val={props.filingStatus} disabled={false} options={FilingOptions} changeCB={() => {}} searchable={false} />
            <NumberInput id={"dependants"} label={"# of Dependants"} val={props.dependants} placeholder={""} disabled={false} />

            <SelectInput id={"isSalary"} label={"Pay Type"} val={SalaryOptions[props.isSalary ? 0 : 1].id} disabled={false} options={SalaryOptions} changeCB={onSalaryTypeChange} searchable={false}/>

            <Divider />

            <div className="mb-10">
                {section == SalaryOptions[0].id && <AnimateChildren x={0} y={-10}> <SalarySection d={props} /> </AnimateChildren>}
                {section == SalaryOptions[1].id && <AnimateChildren x={0} y={-10}> <HourlySection d={props} /> </AnimateChildren>}
            </div>

            <TextInput id={"uuid"} label={"Emp UUID"} val={props.uuid} placeholder={""} disabled={true} />

            <div>
                <button type="submit" className="primary-button">Submit</button>
                <Link href={cancelURL(props.uuid)} className="mx-5 secondary-button">
                    Cancel
                </Link>
            </div>
        </form>

    )
}



interface SectionProps { d: DispEmployee }
function SalarySection({ d }: SectionProps) {
    return (
        <div className="card">
            Salary:
            <NumberInput id={"salary"} label={""} val={d.salary} placeholder={""} disabled={false} />
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