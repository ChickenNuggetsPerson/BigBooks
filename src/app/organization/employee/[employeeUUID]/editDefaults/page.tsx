import Loading from "@/app/Loading";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import PaystubDefaultsForm from "@/components/payroll/payrollItems/PayrollItemsForm";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";



export default async function EmployeeDefaultsPage({params}: { params: Promise<{ employeeUUID: string }> }) {

    const { employeeUUID } = await params

    
    return (
        <div className="">

            <Link href={`/organization/employee/${employeeUUID}`} >
                <MoveLeft/>
            </Link>

            <AnimateChildren y={-20} className="mx-20">

                <Suspense fallback={<div className="mx-auto card w-fit"><Loading hCenter vCenter /></div>}>
                    <PaystubDefaultsForm employee employeeUUID={employeeUUID}/>
                </Suspense>

            </AnimateChildren>
        </div>
    )
}