import Loading from "@/components/Decorative/Loading/Loading";
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
                <Suspense fallback={<Loading hCenter vCenter />}>
                    <EmployeeCompensationForm employeeUUID={employeeUUID} />
                </Suspense>
            </AnimateChildren>
        </div>
    )
}