'use client'

import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import submitEmployeeSalaryForm from "@/actions/employee/submitEmployeeSalaryFrom";
import { useEffect, useState } from "react";
import SelectInput from "../../Forms/SelectInput";
import NumberInput from "../../Forms/NumberInput";
import { Divider } from "../../Forms/Divider";
import { FilingTypes } from "@/database/Taxes/FilingTypes";
import Loading from "@/app/Loading";
import { Employee } from "@/database/generated/prisma";
import TextInput from "../../Forms/TextInput";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


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


interface EmployeeTaxFormProps { empUUID: string }
export default function EmployeeTaxForm({ empUUID }: EmployeeTaxFormProps) {

    const router = useRouter()
    const [props, setProps] = useState({} as Employee)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)
        async function load() {

            const employee = await getEmployeeProps(empUUID, false)
            if (employee) { // Employee exists
                setProps(employee)

            } else {
                setError(true)
            }

            setLoading(false)

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

    if (loading) {
        return (
            <Loading hCenter vCenter />
        )
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        toast.promise(
            async () => {
                const uuid = await submitEmployeeSalaryForm(new FormData(e.currentTarget))
                router.push(`/organization/employee/${uuid}`)
            },
            {
                loading: "Submitting Form",
                success: "Tax Information Saved",
                error: "Error Saving Tax Information"
            }
        )

    };

    return (

        <form className="flex flex-row w-full justify-center gap-10" onSubmit={handleSubmit}>

            <div className="w-sm card h-fit">
                <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 ">Edit Tax Information</h5>
                <Divider />
                <h6 className="mb-5 text-2xl tracking-tight text-gray-400">{`${props.firstName} ${props.lastName}`}</h6>

                <div className="flex flex-row gap-4 mb-3">
                    <SelectInput id={"filing"} label={"Filing Status"} val={props.filingStatus} options={FilingOptions} />
                    <NumberInput id={"dependants"} label={"# of Dependants"} val={props.dependants} />
                </div>

                <TextInput id="uuid" val={empUUID} label="Employee UUID" disabled />

                <button type="submit" className="bg-primary rounded-md text-white w-full text-xl font-bold p-1">Submit</button>
            </div>

        </form>

    )
}

