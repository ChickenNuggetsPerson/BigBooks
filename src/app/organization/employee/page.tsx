'use client'

import ClickableDiv from "@/components/Decorative/ClickableDiv";
import EmployeeList from "@/components/Employee/EmployeeList";
import Link from "next/link";

export default function Employee() {



    return (
        <div className="flex flex-row gap-10 mr-2">

            <EmployeeList employeePage={true} selectCB={() => { }} preSelected={[]} />

            <ClickableDiv>
                <Link type="button" href={`/organization/employee/new/edit`} className="card block w-50">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 "> Create New Employee</h5>
                    <p className="font-normal text-gray-700 ">Click to Create</p>
                </Link>
            </ClickableDiv>
        </div>
    );
}