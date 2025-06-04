'use client'

import deactivateEmployee from "@/actions/employee/deactivateEmployee";
import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import submitEmployeeForm from "@/actions/employee/submitEmployeeForm"
import { useCompany } from "@/app/CompanyContext";
import TextInput, { InputMasks } from "@/components/Forms/TextInput";
import { useEffect, useState } from "react";
import LargeTextInput from "../Forms/LargeTextInput";
import Loading from "@/app/Loading";
import { Employee } from "@/database/generated/prisma";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";



interface EmployeeFormProps { empUUID: string }
export default function EmployeeForm({ empUUID }: EmployeeFormProps) {

    const { context } = useCompany()
    const router = useRouter()
    const [props, setProps] = useState({} as Employee)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const newEmployee = empUUID == "new"

    useEffect(() => {
        setLoading(true)
        async function load() {

            if (!newEmployee) {
                const employee = await getEmployeeProps(empUUID, false)
                if (employee) { // Employee exists
                    setProps(employee)
                } else {
                    setError(true)
                }
            }

            setLoading(false)

        }
        load()


    }, [empUUID, newEmployee])


    if (loading) {
        return (
            <Loading hCenter vCenter />
        )
    }
    if (error) {
        return (
            <div>
                Error Fetching Employee
            </div>
        )
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        toast.promise(
            async () => {
                const uuid = await submitEmployeeForm(newEmployee, new FormData(e.currentTarget))
                router.push(`/organization/employee/${uuid}`)
            },
            {
                loading: "Submitting Form",
                success: "Employee Saved",
                error: "Error Saving Information"
            }
        )
    };

    function deactivate() {
        toast.promise(
            async () => {
                await deactivateEmployee(props.uuid, !props.isDeleted)
                router.push(`/organization/employee/${props.uuid}`)
            },
            !props.isDeleted ? {
                loading: "Deactivating Employee",
                success: `Deactivated ${props.firstName}`,
                error: "Error Deactivating Employee"
            } : {
                loading: "Activating Employee",
                success: `Activated ${props.firstName}`,
                error: "Error Activating Employee"
            }
        )
    }

    return (
        <form className="flex flex-row w-full justify-center gap-10" onSubmit={handleSubmit}>

            <div className="w-md card h-fit">

                <div className="flex flex-row justify-between">
                    <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 ">{newEmployee ? "Create Employee:" : "Edit Employee:"}</h5>
                    {!newEmployee && <button type="button" onClick={deactivate} className="mx-5 accent-button max-h-10">{props.isDeleted ? "Reactivate" : "Deactivate"}</button>}
                </div>

                <TextInput id={"firstName"} label={"First Name"} val={props.firstName} />
                <TextInput id={"middleName"} label={"Middle Name"} val={props.middleName} />
                <TextInput id={"lastName"} label={"Last Name"} val={props.lastName} />
                <LargeTextInput id={"notes"} label={"Notes"} val={props.notes} />

                <button type="submit" className="bg-primary rounded-md text-white w-full text-xl font-bold p-1">Submit</button>
            </div>

            <div className="w-sm card h-fit">

                <TextInput id={"email"} label={"Email"} val={props.email} />
                <TextInput id={"phoneNumber"} label={"Phone Number"} val={props.phoneNumber} mask={InputMasks.PHONE} />
                <LargeTextInput id={"address"} label={"Address"} val={props.address} />
                <TextInput id={"ssn"} label={"SSN"} val={props.ssn} mask={InputMasks.SSN} />

                <TextInput id={"orgUUID"} label={"Org UUID"} val={context?.companyUUID ?? ""} disabled={true} />
                <TextInput id={"uuid"} label={"Emp UUID"} val={props.uuid} disabled={true} />
            </div>

        </form>
    )
}


