import Loading from "@/components/Decorative/Loading/Loading";
import { Permissions } from "@/auth/permissions/PermissionsDef";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import EmployeeTaxForm from "@/components/Employee/taxes/EmployeeTaxForm";
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
                    <EditForm employeeUUID={employeeUUID}/>
                </Suspense>

            </AnimateChildren>
        </div>
    )
}

async function EditForm({ employeeUUID }: { employeeUUID: string }) {
    try {
        await throwIfInsufficientPerms(Permissions.employee.tax.edit)
    } catch {

        return (
            <div className="items-center min-h-screen p-8 pb-20 gap-16">
                <div className="card max-w-sm">
                    Insufficient Permissions
                </div>
            </div>
        )

    }

    return (<EmployeeTaxForm empUUID={employeeUUID}></EmployeeTaxForm>)
}