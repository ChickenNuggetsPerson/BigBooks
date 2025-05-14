'use client'

import AnimateChildren from "@/components/Decorative/AnimateChildren";
import EmployeeForm from "@/components/Employee/EmployeeForm";
import { useParams } from "next/navigation";


export default function EmployeeView() {

    const params = useParams();
    const empUUID = params.employeeUUID as string

    return (
        <div className="items-center min-h-screen p-8 pb-20 gap-16 ">
            <AnimateChildren x={0} y={-100}>
                <EmployeeForm empUUID={empUUID}></EmployeeForm>
            </AnimateChildren>
        </div>
    )
}