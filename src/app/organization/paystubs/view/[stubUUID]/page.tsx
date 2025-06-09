import AnimateChildren from "@/components/Decorative/AnimateChildren";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/database/prisma";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import { RoleTypes } from "@/auth/roles/Roles";


export default async function ViewPaystubPage({
    params,
}: {
    params: Promise<{ stubUUID: string }>
}) {

    const paystubUUID = (await params).stubUUID

    await throwIfInsufficientPerms(RoleTypes.Viewer)

    const stub = await prisma.payStub.findUnique({ where: { uuid: paystubUUID }, include: { items: true }})

    if (!stub) {
        return (
            <div className="card w-fit h-fit">
                Invalid Paystub ID
            </div>
        )
    }

    return (

        <div>

            <Link href={`/organization/employee/${stub.employeeId}`} >
                <MoveLeft/>
            </Link>

            <AnimateChildren y={-100} className="flex flex-row justify-center gap-6">
                <div className="card h-fit w-fit">
                    <p className="font-semibold">Work in Progress Page</p>

                    {JSON.stringify(stub, null, 2).split("\n").map((str, i) => (
                        <p key={i} style={{ textIndent: (str.length - str.trimStart().length) * 10 }} >{str}</p>
                    ))}
                </div>

            </AnimateChildren>

        </div>

    )
}

