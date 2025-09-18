import { getSession } from "@/auth/auth";
import { Permissions } from "@/auth/permissions/PermissionsDef";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { prisma } from "@/database/prisma";
import { NextRequest, NextResponse } from "next/server"




export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ stubUUID: string }> }
) {
    const { stubUUID } = await params

    let paystub;
    try {
        await throwIfInsufficientPerms(Permissions.payroll.paystub.view)
        const session = await getSession()
        paystub = await prisma.payStub.findUniqueOrThrow({ where: { uuid: stubUUID }, include: { employee: true, items: true } })
        if (paystub.employee.organizationId !== session?.orgUUID) { throw new Error("") }
    } catch {
        return NextResponse.json({ error: "Insufficient Permissions" })
    }

    return NextResponse.json({ message: "Work in progress page", data: paystub })
}



