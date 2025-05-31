import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import EmployeeForm from "@/components/Employee/EmployeeForm";
import { MoveLeft } from "lucide-react";
import Link from "next/link";





export default async function EmployeeView({ params }: { params: Promise<{ employeeUUID: string }> }) {

    const { employeeUUID } = await params

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


    return (
        <div className="">

            <Link href={`/organization/employee/${employeeUUID}`} style={{ position: 'absolute' }} className="text-black font-medium text-lg w-full sm:w-auto px-5 py-2.5 text-center">
                <MoveLeft />
            </Link>

            <AnimateChildren x={0} y={-100} className="mx-20">

                <EmployeeForm empUUID={employeeUUID}></EmployeeForm>

            </AnimateChildren>
        </div>
    )
}