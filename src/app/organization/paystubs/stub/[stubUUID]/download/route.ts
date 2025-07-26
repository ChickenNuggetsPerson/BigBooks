import { getSession } from "@/auth/auth";
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/permissions/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma";
import { hideSSN } from "@/utils/functions/SSNStr";
import { NextRequest, NextResponse } from "next/server"




export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ stubUUID: string }> }
) {
    const { stubUUID } = await params

    let paystub;
    try {
        await throwIfInsufficientPerms(RoleTypes.Viewer)
        const session = await getSession()
        paystub = await prisma.payStub.findUniqueOrThrow({ where: { uuid: stubUUID }, include: { employee: true, items: true } })
        if (paystub.employee.organizationId !== session?.orgUUID) { throw new Error("") }
    } catch {
        return NextResponse.json({ error: "Insufficient Permissions" })
    }

    paystub.employee.ssn = hideSSN(paystub.employee.ssn)

    return NextResponse.json({ message: "Work in progress page", data: paystub })
}



