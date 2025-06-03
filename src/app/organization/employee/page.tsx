'use client'

import populateTestData from "@/actions/employee/populateTestData";
import ClickableDiv from "@/components/Decorative/ClickableDiv";
import EmployeeList from "@/components/Employee/EmployeeList/EmployeeList";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Employee() {

    const router = useRouter()

    return (
        <div className="flex flex-row gap-10 mr-2">

            <EmployeeList pageination pageCount={8} searchable clickCB={(emp) => { router.push(`/organization/employee/${emp.uuid}`) }} />

            <div className="flex flex-col">
                <ClickableDiv>
                    <Link type="button" href={`/organization/employee/new/edit`} className="card block w-50">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 "> Create New Employee</h5>
                        <p className="font-normal text-gray-700 ">Click to Create</p>
                    </Link>
                </ClickableDiv>

                {process.env.NODE_ENV === "development" &&
                    <ClickableDiv className="mt-10">
                        <button className="card" onClick={populateTestData} >Create Test Employees</button>
                    </ClickableDiv>
                }

            </div>
        </div>
    );
}