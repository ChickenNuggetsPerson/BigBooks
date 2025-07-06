import { getSession } from "@/auth/auth"
import LoadingBlock from "@/components/Decorative/LoadingBlock"
import { CardProp } from "@/components/Forms/CardProp"
import { Divider } from "@/components/Forms/Divider"
import { prisma } from "@/database/prisma"




export function OrganizationStatsCard_Loading() {
    return (
        <div className="card h-fit">
            <LoadingBlock w={"full"} />
            <Divider />
            <CardProp label="Total Employees" loading/>
        </div>
    )
}

export default async function OrganizationStatsCard() {

    const session = await getSession()
    const employeeCount = await prisma.employee.count({ where: { organizationId: session?.orgUUID } })

    return (
        <div className="card">
            <h5 className="mb-2 text-2xl font-normal text-gray-700 ">Organization Statistics:</h5>
            <Divider />
            <CardProp label="Total Employees" val={String(employeeCount)}/>
        </div>
    )
}