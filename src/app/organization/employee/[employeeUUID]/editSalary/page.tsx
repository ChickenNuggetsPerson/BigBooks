'use client'

import AnimateChildren from "@/components/AnimateChildren";
import EmployeeSalaryForm from "@/components/Employee/EmployeeSalaryForm";
import { useParams } from "next/navigation";


export default function EmployeeSalaryPage() {

    const params = useParams();
    const empUUID = params.employeeUUID as string

    return (
        <div className="items-center min-h-screen p-8 pb-20 gap-16 ">
            <AnimateChildren x={0} y={-100}>
                <EmployeeSalaryForm empUUID={empUUID}></EmployeeSalaryForm>
            </AnimateChildren>
        </div>
    )
}