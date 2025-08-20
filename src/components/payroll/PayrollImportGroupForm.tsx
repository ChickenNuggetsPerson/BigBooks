'use client'

import { useState } from "react"
import DateInput from "../Forms/DateInput"
import { PayrollGroup } from "@/database/generated/prisma"
import SelectInput from "../Forms/SelectInput"
import { Divider } from "../Forms/Divider"
import { nextPayrollOccurence } from "@/utils/functions/Date"
import toast from "react-hot-toast"
import upsertPayrollDraft from "@/actions/payrollDraft/upsertPayrollDraft"
import { PayrollDraftWithEmployees } from "@/actions/payrollDraft/types"
import { promptUser } from "../Decorative/Modals/promptUser"
import { useModalManager } from "../Decorative/Modal/ModalContext"
import deletePayrollDraft from "@/actions/payrollDraft/deletePayrollDraft"
import { useRouter } from "next/navigation"
import { CardProp } from "../Forms/CardProp"
import { PayrollSteps } from "./draftsystem/DraftPaths"




export default function PayrollImportGroupForm({ draft, groups }: { draft: PayrollDraftWithEmployees, groups: PayrollGroup[] }) {

    const { addModal } = useModalManager()
    const router = useRouter()
    const [selectedGroup, setSelectedGroup] = useState("")
    const options = groups.map(group => { return { id: group.uuid, label: group.name } })

    const [state, setState] = useState(draft)

    function importGroup(val: string) {
        setSelectedGroup(val)

        const group = groups.find(v => v.uuid == val)
        if (!group) { return }

        const period = nextPayrollOccurence(group.periodRefDate, group.payRefDate, group.payFrequency)

        setState({
            ...state,
            periodStart: period.periodStart,
            periodEnd: period.periodEnd,
            periodPaydate: period.payDate
        })
    }

    async function save() {
        await toast.promise(upsertPayrollDraft(state), {
            loading: "Saving Draft",
            success: "Draft Settings Saved",
            error: "Error Saving Draft Settings"
        })
        router.push(`/organization/payroll/${PayrollSteps[1].path}`)
    }

    async function deleteDraft() {
        const result = await promptUser({
            addModal,
            title: "Are You Sure?",
            message: "Deleting this draft will not delete any active paystubs.",
            trueButton: {
                title: "Yes, Delete",
                type: 'danger'
            },
            falseButton: {
                title: "Cancel",
                type: "primary"
            }
        })
        if (!result) { return }

        toast.promise(async () => {
            await deletePayrollDraft(draft.uuid)
            router.push("/organization/payroll")
        }, {
            loading: "Deleting Payroll Draft",
            success: "Draft Deleted",
            error: "Error Deleting Payroll Draft"
        })
    }

    return (
        <div className="flex flex-row gap-10 w-fit mx-auto">

            <div className="card h-fit">

                <p className="font-semibold">Payroll Draft:</p>

                <Divider />
                <div className="h-2"></div>

                <CardProp label="Started:" val={draft.startedDate.toLocaleString()} />

                <div className="flex flex-row gap-8 mt-4">
                    <DateInput label="Period Start:" val={state.startedDate} onChange={(val) => { setState({ ...state, startedDate: val }) }} />

                    <DateInput label="Period End:" val={state.periodEnd} onChange={(val) => { setState({ ...state, periodEnd: val }) }} />

                    <DateInput label="Pay Date:" val={state.periodPaydate} onChange={(val) => { setState({ ...state, periodPaydate: val }) }} />
                </div>

                <div className="w-full flex justify-between mt-4">
                    <button className="danger-button" onClick={deleteDraft}>Delete Draft</button>
                    <button className="primary-button" onClick={save}>Save Information</button>
                </div>
            </div>

            <div>
                <div className="card h-fit w-xs">
                    <p>Import Dates From:</p>
                    <Divider />
                    <div className="h-2"></div>
                    <SelectInput label="Group" val={selectedGroup} options={options} changeCB={importGroup} />

                </div>
            </div>

        </div>
    )
}