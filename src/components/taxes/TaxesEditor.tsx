import getTaxes from "@/actions/taxes/getTaxes"
import { getSession } from "@/auth/auth"
import { Prisma } from "@/database/generated/prisma"
import { deserializeData } from "@/utils/serialization"
import TaxEditForm from "./TaxEditForm"



export function TaxesEditor_Loading() {
    return (
        <TaxEditForm loading taxes={[]} />
    )
}

// TODO: Make sure to add this form for sys admins
export default async function TaxesEditor({
    sysTaxes = false
}: {
    sysTaxes?: boolean
}) {

    const session = await getSession()
    if (!session) { <div className="card h-fit w-fit">Invalid Session</div> }

    let taxes = [] as Prisma.TaxGetPayload<{ include: { snapshots: { include: { brackets: true } } } }>[]
    if (sysTaxes) {
        taxes = deserializeData(await getTaxes({ system: true }))
    } else {
        taxes = deserializeData(await getTaxes({ organization: true }))
    }

    return (
        <TaxEditForm taxes={taxes} sysTaxes={sysTaxes} />
    )
}