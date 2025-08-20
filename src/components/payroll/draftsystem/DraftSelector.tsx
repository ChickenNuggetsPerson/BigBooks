'use client'

import getUserPayrollDrafts from "@/actions/payrollDraft/getUserPayrollDrafts"
import { PayrollDraftWithCount } from "@/actions/payrollDraft/types"
import updateActivePayrollDraft from "@/actions/payrollDraft/updateActivePayrollDraft"
import { Divider } from "@/components/Forms/Divider"
import SelectInput from "@/components/Forms/SelectInput"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { PayrollSteps } from "./DraftPaths"
import upsertPayrollDraft from "@/actions/payrollDraft/upsertPayrollDraft"



export default function DraftSelector() {

    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [drafts, setDrafts] = useState([] as PayrollDraftWithCount[])
    const [selected, setSelected] = useState(null as string | null)

    useEffect(() => {
        async function load() {
            setLoading(true)
            setDrafts(await getUserPayrollDrafts())
            setLoading(false)
        }
        load()
    }, [])

    if (loading) {
        return (
            <div className="card">
                <h1 className="font-semibold text-lg"> Select Payroll Draft: </h1>
                <Divider />
                <div className="mx-auto w-fit">
                    <h1 className="font-mono text-lg animate-pulse">Loading</h1>
                </div>
            </div>
        )
    }

    if (drafts.length == 0) {
        return (
            <div className="card">
                <h1 className="font-semibold text-lg"> Select Payroll Draft: </h1>
                <Divider />
                <div className="mx-auto w-fit">
                    <h1 className="font-mono text-lg" >No Active Payroll Drafts</h1>
                </div>
                <button onClick={newClicked} className="primary-button w-full text-nowrap mt-5">
                    Start New Payroll Draft
                </button>
            </div>
        )
    }

    const options = drafts.map(d => {
        return {
            label: `Pay: ${d.periodPaydate.toLocaleDateString()}     (${d._count.employees} Included)`,
            id: d.uuid
        }
    })
    function selectCB(val: string) { setSelected(val) }

    function editClicked() {
        if (!selected) { return }

        toast.promise(async () => {
            await updateActivePayrollDraft(selected)
            router.push(`/organization/payroll/${PayrollSteps[0].path}`)
        }, {
            loading: "Setting Active Payroll Draft",
            success: "Active Payroll Draft Changed",
            error: "Error Setting Active Payroll Draft"
        })
    }
    function newClicked() {
        toast.promise(async () => {
            await upsertPayrollDraft({
                employees: [],
                uuid: "",
                membershipId: "",
                startedDate: new Date(),
                periodStart: new Date(),
                periodEnd: new Date(),
                periodPaydate: new Date()
            })
            router.push(`/organization/payroll/${PayrollSteps[0].path}`)
        }, {
            loading: "Creating New Payroll Draft",
            success: "Payroll Draft Created",
            error: "Error Creating New Payroll Draft"
        })
    }

    return (
        <div className="card">
            <h1 className="font-semibold text-lg"> Select Payroll Draft: </h1>
            <Divider />
            <div className="w-full flex justify-between gap-4">

                <div className="w-full">
                    <SelectInput label="Payroll Draft" val={selected ?? ""} options={options} searchable changeCB={selectCB} />
                </div>
                {selected &&
                    <motion.div
                        initial={{ width: "0" }}
                        animate={{ width: "auto" }}
                    >
                        <button onClick={editClicked} className="accent-button w-full text-nowrap mt-1">
                            Use Draft
                        </button>
                    </motion.div>
                }

            </div>

            <button onClick={newClicked} className="primary-button w-full text-nowrap mt-5">
                Start New Payroll Draft
            </button>
        </div>
    )
}