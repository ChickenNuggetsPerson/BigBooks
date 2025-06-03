'use client'

import deactivateEmployee from "@/actions/employee/deactivateEmployee";
import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import submitEmployeeForm from "@/actions/employee/submitEmployeeForm"
import { useCompany } from "@/app/CompanyContext";
import TextInput from "@/components/Forms/TextInput";
import { getEmptyDispEmployee } from "@/database/models/DisplayModels";
import { useEffect, useState } from "react";
import LargeTextInput from "../Forms/LargeTextInput";



interface EmployeeFormProps { empUUID: string }
export default function EmployeeForm({ empUUID }: EmployeeFormProps) {

    const { context } = useCompany()
    const [props, setProps] = useState(getEmptyDispEmployee())
    const [error, setError] = useState(false)

    const newEmployee = empUUID == "new"

    useEffect(() => {
        async function load() {

            if (!newEmployee) {
                const employee = await getEmployeeProps(empUUID, false)
                if (employee) { // Employee exists
                    setProps(employee)
                } else {
                    setError(true)
                }
            }

        }
        load()


    }, [empUUID, newEmployee])


    if (error) {
        return (
            <div>
                Error Fetching Employee
            </div>
        )
    }

    const updateEmployee = submitEmployeeForm.bind(null, newEmployee)
    return (
        <form className="grid grid-cols-2" action={updateEmployee}>

            <div className="card max-w-md">

                <div className="flex flex-row justify-between">
                    <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 ">{newEmployee ? "Create Employee:" : "Edit Employee:"}</h5>
                    {!newEmployee && <button onClick={() => { deactivateEmployee(props.uuid, !props.isDeleted) }} className="mx-5 accent-button max-h-10">{props.isDeleted ? "Reactivate" : "Deactivate"}</button>}
                </div>


                <TextInput id={"firstName"} label={"First Name"} val={props.firstName} />
                <TextInput id={"middleName"} label={"Middle Name"} val={props.middleName} />
                <TextInput id={"lastName"} label={"Last Name"} val={props.lastName} />
                <LargeTextInput id={"notes"} label={"Notes"} val={props.notes} />

                <button type="submit" className="bg-primary rounded-md text-white w-full text-xl font-bold p-1">Submit</button>
            </div>

            <div className="card max-w-md">

                <TextInput id={"email"} label={"Email"} val={props.email} />
                <TextInput id={"phoneNumber"} label={"Phone Number"} val={props.phoneNumber} />
                <LargeTextInput id={"address"} label={"Address"} val={props.address} />
                <TextInput id={"ssn"} label={"SSN"} val={props.ssn} />

                <TextInput id={"orgUUID"} label={"Org UUID"} val={context?.companyUUID ?? ""} disabled={true} />
                <TextInput id={"uuid"} label={"Emp UUID"} val={props.uuid} disabled={true} />
            </div>

        </form>
    )
}


