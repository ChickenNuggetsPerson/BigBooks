import getTaxes from "@/actions/taxes/getTaxes"
import { getSession } from "@/auth/auth"
import { deserializeData, serializeData } from "@/utils/serialization"
import TaxEditForm, { TaxWithSnapshots } from "./TaxEditForm"



export function TaxesEditor_Loading() {
    return (
        <TaxEditForm loading />
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

    let taxes = [] as TaxWithSnapshots[]
    if (sysTaxes) {
        taxes = deserializeData(await getTaxes({ system: true }))
    } else {
        taxes = deserializeData(await getTaxes({ organization: true }))
    }

    const data = serializeData(taxes)

    return (
        <TaxEditForm taxesData={data} sysTaxes={sysTaxes} />
    )
}