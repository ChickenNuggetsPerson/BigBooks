'use server'

import submitPaystub from "../paystub/submitPaystub"
import getActivePayrollDraft from "./getActivePayrollDraft"





export default async function submitAllDraftPaystubs() {
    const draft = await getActivePayrollDraft()
    if (!draft) { return }


    for (let i = 0; i < draft.paystubs.length; i++) {
        await submitPaystub(draft.paystubs[i].uuid)
    }
}