import getPaystubTotals from "@/actions/paystub/paystubStats/getPaystubTotals"
import { getSession } from "@/auth/auth"
import CollapsibleDiv from "@/components/Decorative/CollapsibleDiv"
import LoadingBlock from "@/components/Decorative/LoadingBlock"
import { CardProp } from "@/components/Forms/CardProp"
import { Divider } from "@/components/Forms/Divider"
import { Decimal } from "@/database/generated/prisma/runtime/library"
import { prisma } from "@/database/prisma"
import { MoneyToStr } from "@/utils/functions/MoneyStr"
import { deserializeData } from "@/utils/serialization"




export function OrganizationStatsCard_Loading() {
    return (
        <div className="card h-fit">
            <LoadingBlock w={"full"} />
            <Divider />
            <LoadingBlock w={"full"} className="mb-2" />
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
    const orgTotals = (new Decimal(deserializeData(await getPaystubTotals({ locked: true })).totalNetPay)).toNumber()

    return (
        <div className="card">
            <h5 className="mb-2 text-2xl font-normal text-gray-700 ">Organization Statistics:</h5>
            <Divider />
            <CardProp label="Total Employees:" val={employeeCount} />

            <div className="bg-gray-300 w-full rounded-2xl h-px"></div>

            <CardProp label="Total Paystubs:" val={completedPaystubCount + activePaystubCount} />
            <div className="flex flex-row justify-between px-2">
                <CardProp label="Completed:" val={completedPaystubCount} />
                <CardProp label="Active:" val={activePaystubCount} />
            </div>

            <div className="bg-gray-300 w-full rounded-2xl h-px"></div>

            <CardProp label="Total Net Pay:" val={MoneyToStr(orgTotals)} />

        </div>
    )
}