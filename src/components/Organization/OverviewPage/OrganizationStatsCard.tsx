import { getSession } from "@/auth/auth"
import CollapsibleDiv from "@/components/Decorative/CollapsibleDiv"
import LoadingBlock from "@/components/Decorative/LoadingBlock"
import { CardProp } from "@/components/Forms/CardProp"
import { Divider } from "@/components/Forms/Divider"
import { prisma } from "@/database/prisma"




export function OrganizationStatsCard_Loading() {
    return (
        <div className="card h-fit">
            <LoadingBlock w={"full"} />
            <Divider />
            <LoadingBlock w={"full"} className="mb-2" />
            <LoadingBlock w={"full"} className="mb-2" />
            <LoadingBlock w={"full"} className="mb-2" />
        </div>
    )
}

export default async function OrganizationStatsCard() {

    const session = await getSession()
    const employeeCount = await prisma.employee.count({ where: { organizationId: session?.orgUUID } })
    const completedPaystubCount = await prisma.payStub.count({ where: { employee: { organizationId: session?.orgUUID }, locked: true } })
    const activePaystubCount = await prisma.payStub.count({ where: { employee: { organizationId: session?.orgUUID }, locked: false } })

    return (
        <div className="card">
            <h5 className="mb-2 text-2xl font-normal text-gray-700 ">Organization Statistics:</h5>
            <Divider />
            <CardProp label="Total Employees:" val={employeeCount} />
            
            <CollapsibleDiv title={<CardProp label="Total Paystubs:" val={completedPaystubCount + activePaystubCount}/>} arrowSize={16} >
                <div className="flex flex-row justify-between px-2">
                    <CardProp label="Completed:" val={completedPaystubCount} />
                    <CardProp label="Active:" val={activePaystubCount} />
                </div>
            </CollapsibleDiv>

        </div>
    )
}