import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/database/prisma";
import { PaystubCard } from "@/components/payroll/paystub/PaystubCard";
import { serializeData } from "@/utils/serialization";
import { Suspense } from "react";
import Loading from "@/app/Loading";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { Permissions } from "@/auth/permissions/PermissionsDef";


export default async function ViewPaystubPage({
    params,
}: {
    params: Promise<{ stubUUID: string }>
}) {

    const paystubUUID = (await params).stubUUID



    return (

        <div>

            <Suspense fallback={<div className="mx-auto card w-fit"><Loading hCenter vCenter /></div>}>
                <ViewStub paystubUUID={paystubUUID} />
            </Suspense>

        </div>

    )
}

async function ViewStub({ paystubUUID }: { paystubUUID: string }) {

    await throwIfInsufficientPerms(Permissions.payroll.paystub.view)

    const stub = await prisma.payStub.findUnique({
        where: { uuid: paystubUUID },
        include: { employee: true, items: true }
    })

    if (!stub) {
        return (
            <div className="card w-fit h-fit">
                Invalid Paystub UUID
            </div>
        )
    }

    const data = serializeData(stub)

    return (
        <>
            <Link href={`/organization/employee/${stub.employeeId}`} >
                <MoveLeft />
            </Link>

            <div className="h-2"></div>

            <PaystubCard stub={data} editable downloadable />
        </>
    )
}