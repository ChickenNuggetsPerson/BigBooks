import getActivePayrollDraft from "@/actions/payrollDraft/getActivePayrollDraft";
import getOrgPayrollGroups from "@/actions/payrollGroup/getOrgPayrollGroups";
import DraftPageSelector from "@/components/payroll/draftsystem/DraftPageSelector";
import PayrollImportGroupForm from "@/components/payroll/PayrollImportGroupForm";
import PayrollPage_Loading from "@/components/payroll/PayrollPage_Loading";
import { redirect } from "next/navigation";
import { Suspense } from "react";




export default async function DraftPage() {
    return (
        <Suspense fallback={<PayrollPage_Loading path="draft"/>}>
            <Page/>
        </Suspense>
    )    
}

async function Page() {
    const draft = await getActivePayrollDraft()
    if (!draft) {
        redirect("/organization/payroll")
    }

    const groups = await getOrgPayrollGroups()

    return (
        <>
            <DraftPageSelector path='draft' />
            <PayrollImportGroupForm draft={draft} groups={groups} />
        </>
    )
}