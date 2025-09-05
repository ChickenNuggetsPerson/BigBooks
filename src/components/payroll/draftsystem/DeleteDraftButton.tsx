'use client'

import deletePayrollDraft from "@/actions/payrollDraft/deletePayrollDraft"
import { useModalManager } from "@/components/Decorative/Modal/ModalContext"
import { promptUser } from "@/components/Decorative/Modals/promptUser"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"


export default function DeleteDraftButton({ draftUUID }: { draftUUID: string }) {

    const { addModal } = useModalManager()
    const router = useRouter()

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
            await deletePayrollDraft(draftUUID)
            router.push("/organization/payroll")
        }, {
            loading: "Deleting Payroll Draft",
            success: "Draft Deleted",
            error: "Error Deleting Payroll Draft"
        })
    }

    return (
        <button className="danger-button" onClick={deleteDraft}>Delete Draft</button>
    )
}