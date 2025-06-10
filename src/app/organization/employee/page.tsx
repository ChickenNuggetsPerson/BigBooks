'use client'

import populateTestData from "@/actions/employee/populateTestData";
import ClickableDiv from "@/components/Decorative/ClickableDiv";
import EmployeeList from "@/components/Employee/EmployeeList/EmployeeList";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Employee() {

    const router = useRouter()

    return (
        <div className="flex flex-col xl:flex-row gap-10 mr-2">

            <div className="order-2 xl:order-1">
                <EmployeeList pageination pageCount={8} searchable clickCB={(emp) => { router.push(`/organization/employee/${emp.uuid}`) }} />
            </div>

            <div className="flex flex-row xl:flex-col gap-10 order-1 xl:order-2">
                <ClickableDiv>
                    <Link type="button" href={`/organization/employee/new/edit`} className="card block w-75 xl:w-50">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 "> Create New Employee</h5>
                        <p className="font-normal text-gray-700 ">Click to Create</p>
                    </Link>
                </ClickableDiv>

                {process.env.NODE_ENV === "development" &&
                    <ClickableDiv>
                        <button className="card" onClick={populateTestData} >Create Test Employees</button>
                    </ClickableDiv>
                }

            </div>
        </div>
    );
}