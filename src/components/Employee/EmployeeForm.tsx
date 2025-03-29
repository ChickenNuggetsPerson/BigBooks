'use clients'

import deactivateEmployee from "@/actions/employee/deactivateEmployee";
import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import submitEmployeeForm from "@/actions/employee/submitEmployeeForm"
import { useCompany } from "@/app/CompanyContext";
import TextInput from "@/components/Forms/TextInput";
import { getEmptyDispEmployee } from "@/database/models/DisplayModels";
import Link from "next/link";
import { useEffect, useState } from "react";


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

            <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{newEmployee ? "Create Employee:" : "Edit Employee:"}</h5>

            <TextInput id={"firstName"} label={"First Name"} val={props.firstName} placeholder={""} disabled={false} />
            <TextInput id={"middleName"} label={"Middle Name"} val={props.middleName} placeholder={""} disabled={false} />
            <TextInput id={"lastName"} label={"Last Name"} val={props.lastName} placeholder={""} disabled={false} />
            <TextInput id={"email"} label={"Email"} val={props.email} placeholder={""} disabled={false} />
            <TextInput id={"address"} label={"Address"} val={props.address} placeholder={""} disabled={false} />
            <TextInput id={"ssn"} label={"SSN"} val={props.ssn} placeholder={""} disabled={false} />

            <TextInput id={"notes"} label={"Notes"} val={props.notes} placeholder={""} disabled={false} />

            <TextInput id={"orgUUID"} label={"Org UUID"} val={context?.companyUUID ?? ""} placeholder={""} disabled={true} />
            <TextInput id={"uuid"} label={"Emp UUID"} val={props.uuid} placeholder={""} disabled={true} />



            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            <Link href={cancelURL(newEmployee, props.uuid)} className="mx-5 text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">
                Cancel
            </Link>

            { !newEmployee && <button onClick={() => {deactivateEmployee(props.uuid, !props.isDeleted)}} className="hover:outline-2 hover:outline-pink-500 mx-5 text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:focus:ring-rose-800">{props.isDeleted ? "Reactivate" : "Deactivate"}</button> }
        </form>

    )
}


