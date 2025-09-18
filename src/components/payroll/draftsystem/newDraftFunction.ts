'use client'

import upsertPayrollDraft from "@/actions/payrollDraft/upsertPayrollDraft"
import toast from "react-hot-toast"
import { PayrollSteps } from "./DraftPaths"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"



export function clientNewPayrollDraft(router: AppRouterInstance) {
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