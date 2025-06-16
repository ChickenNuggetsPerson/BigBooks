import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/database/prisma";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import { RoleTypes } from "@/auth/roles/Roles";
import { PaystubCard } from "@/components/payroll/paystub/PaystubCard";
import { serializeData } from "@/utils/serialization";


export default async function ViewPaystubPage({
    params,
}: {
    params: Promise<{ stubUUID: string }>
}) {

    const paystubUUID = (await params).stubUUID

    await throwIfInsufficientPerms(RoleTypes.Viewer)

    const stub = await prisma.payStub.findUnique({ 
        where: { uuid: paystubUUID }, 
        include: { employee: true, items: true }
    })

    if (!stub) {
        return (
            <div className="card w-fit h-fit">
                Invalid Paystub ID
            </div>
        )
    }

    const data = serializeData(stub)

    return (

        <div>

            <Link href={`/organization/employee/${stub.employeeId}`} >
                <MoveLeft/>
            </Link>

            <div className="h-2"></div>

            <PaystubCard stub={data}/>

        </div>

    )
}

