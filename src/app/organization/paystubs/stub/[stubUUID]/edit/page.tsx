import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/database/prisma";
import PaystubEditForm from "@/components/payroll/paystub/PaystubEditForm";
import { Suspense } from "react";
import Loading from "@/components/Decorative/Loading/Loading";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { Permissions } from "@/auth/permissions/PermissionsDef";


export default async function EditPaystubPage({
    params,
}: {
    params: Promise<{ stubUUID: string }>
}) {

    const paystubUUID = (await params).stubUUID

    return (

        <div>

            <Suspense fallback={<Loading hCenter vCenter />}>
                <Page paystubUUID={paystubUUID} />
            </Suspense>

        </div>

    )
}

async function Page({ paystubUUID }: { paystubUUID: string }) {

    await throwIfInsufficientPerms(Permissions.payroll.paystub.edit)

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

    return (
        <>
            <Link href={`/organization/paystubs/stub/${stub.uuid}`} >
                <MoveLeft />
            </Link>

            <div className="h-2"></div>

            <PaystubEditForm empUUID={stub.employeeId} stubUUID={stub.uuid} />
        </>
    )
}

