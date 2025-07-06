import Loading from "@/app/Loading";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import EmployeeCompensationForm from "@/components/Employee/compensation/EmployeeCompensationForm";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";



export default async function EmployeeSalaryPage({ params }: { params: Promise<{ employeeUUID: string }> }) {

    const { employeeUUID } = await params

    return (
        <div className="">

            <Link href={`/organization/employee/${employeeUUID}`} >
                <MoveLeft />
            </Link>

            <AnimateChildren y={-20} className="mx-20">
                <Suspense fallback={<div className="mx-auto card w-fit"><Loading hCenter vCenter /></div>}>
                    <EmployeeCompensationForm employeeUUID={employeeUUID} />
                </Suspense>
            </AnimateChildren>
        </div>
    )
}