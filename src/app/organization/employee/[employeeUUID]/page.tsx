'use client'

import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import AnimateChildren from "@/components/AnimateChildren";
import EmployeeCard from "@/components/Employee/EmployeeCard";
import EmployeeSalaryCard from "@/components/Employee/EmployeeSalaryCard";
import { getEmptyDispEmployee } from "@/database/models/DisplayModels";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";



export default function EmployeeView() {

    const params = useParams()
    const { employeeUUID } = params
    const empUUID = employeeUUID as string

    const [employee, setEmployee] = useState(getEmptyDispEmployee())
    const [error, setError] = useState(false)

    useEffect(() => {
        async function load() {
            const e = await getEmployeeProps(empUUID, false)
            if (e) {
                setEmployee(e)
            } else {
                setError(true)
            }
        }
        load()
    }, [empUUID])

    if (error) {
        return (<a>Error Loading Details</a>)
    }

    return (

        <div>

            <Link href={`/organization/employee`} style={{ position: 'absolute' }} className="text-black font-medium text-lg w-full sm:w-auto px-5 py-2.5 text-center" >
                ← Back
            </Link>

            <div className="flex flex-col lg:flex-row gap-6 justify-center px-10 py-20">

                <AnimateChildren x={0} y={-100}>
                    <EmployeeCard employee={employee} />
                    <EmployeeSalaryCard employee={employee} />
                </AnimateChildren>
            </div>

        </div>

    )
}

