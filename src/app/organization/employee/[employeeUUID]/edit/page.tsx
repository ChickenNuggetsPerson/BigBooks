import Loading from "@/app/Loading";
import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import EmployeeForm from "@/components/Employee/EmployeeForm";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";





export default async function EmployeeView({ params }: { params: Promise<{ employeeUUID: string }> }) {

    const { employeeUUID } = await params
    const isNew = employeeUUID === "new"




    return (
        <div className="">

            <Link href={isNew ? "/organization/employee" : `/organization/employee/${employeeUUID}`} >
                <MoveLeft />
            </Link>

            <AnimateChildren y={-20}>

                <Suspense fallback={<div className="mx-auto card w-fit"><Loading hCenter vCenter /></div>}>
                    <EditForm employeeUUID={employeeUUID}/>
                </Suspense>

            </AnimateChildren>
        </div>
    )
}

async function EditForm({ employeeUUID }: { employeeUUID: string }) {
    try {
        await throwIfInsufficientPerms(RoleTypes.Editor)
    } catch {

        return (
            <div className="items-center min-h-screen p-8 pb-20 gap-16">
                <div className="card max-w-sm">
                    Insufficient Permissions
                </div>
            </div>
        )

    }

    return (<EmployeeForm empUUID={employeeUUID}></EmployeeForm>)
}