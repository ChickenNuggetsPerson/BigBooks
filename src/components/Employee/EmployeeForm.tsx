'use clients'

import deactivateEmployee from "@/actions/employee/deactivateEmployee";
import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import submitEmployeeForm from "@/actions/employee/submitEmployeeForm"
import { useCompany } from "@/app/CompanyContext";
import TextInput from "@/components/Forms/TextInput";
import { getEmptyDispEmployee } from "@/database/models/DisplayModels";
import Link from "next/link";
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

    function cancelURL(isNew: boolean, id: string) {
        const url = "/organization/employee"
        if (isNew) {
            return url
        }
        return url + `/${id}`
    }

    const updateEmployee = submitEmployeeForm.bind(null, newEmployee)
    return (

        <form className="max-w-md mx-auto card mb-5" action={updateEmployee}>

            <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 ">{newEmployee ? "Create Employee:" : "Edit Employee:"}</h5>

            <TextInput id={"firstName"} label={"First Name"} val={props.firstName} placeholder={""} disabled={false} />
            <TextInput id={"middleName"} label={"Middle Name"} val={props.middleName} placeholder={""} disabled={false} />
            <TextInput id={"lastName"} label={"Last Name"} val={props.lastName} placeholder={""} disabled={false} />
            <TextInput id={"email"} label={"Email"} val={props.email} placeholder={""} disabled={false} />
            <TextInput id={"address"} label={"Address"} val={props.address} placeholder={""} disabled={false} />
            <TextInput id={"ssn"} label={"SSN"} val={props.ssn} placeholder={""} disabled={false} />

            <LargeTextInput id={"notes"} label={"Notes"} val={props.notes} placeholder={""} disabled={false} />

            <TextInput id={"orgUUID"} label={"Org UUID"} val={context?.companyUUID ?? ""} placeholder={""} disabled={true} />
            <TextInput id={"uuid"} label={"Emp UUID"} val={props.uuid} placeholder={""} disabled={true} />



            <button type="submit" className="primary-button">Submit</button>
            <Link href={cancelURL(newEmployee, props.uuid)} className="mx-5 secondary-button">
                Cancel
            </Link>

            { !newEmployee && <button onClick={() => {deactivateEmployee(props.uuid, !props.isDeleted)}} className="mx-5 accent-button">{props.isDeleted ? "Reactivate" : "Deactivate"}</button> }
        </form>

    )
}


