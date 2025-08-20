'use client'

import { PayrollDraftWithEmployees } from "@/actions/payrollDraft/types";
import upsertPayrollDraft from "@/actions/payrollDraft/upsertPayrollDraft";
import SelectableEmployeeList from "@/components/Employee/EmployeeList/SelectableEmployeeList";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";





export default function DraftSelectEmployeeList({ draft }: { draft: PayrollDraftWithEmployees }) {

    const router = useRouter()

    function selectCB(selected: string[]) {
        toast.promise(async () => {
            await upsertPayrollDraft({
                ...draft,
                employees: selected.map(s => {
                    return {
                        uuid: s,
                        firstName: "",
                        lastName: ""
                    }
                })
            })

            router.refresh()
        }, {
            loading: "Saving Selection",
            success: "Selection Saved",
            error: "Error Saving Selection"
        })
    }

    return (
        <SelectableEmployeeList selectCB={selectCB} preSelected={draft.employees.map(e => e.uuid)} />
    )
}