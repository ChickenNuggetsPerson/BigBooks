import getActivePayrollDraft from "@/actions/payrollDraft/getActivePayrollDraft";
import DraftPageSelector from "@/components/payroll/draftsystem/DraftPageSelector";
import DraftSelectEmployeeList from "@/components/payroll/draftsystem/DraftSelectEmployeeList";
import PayrollPage_Loading from "@/components/payroll/PayrollPage_Loading";
import { redirect } from "next/navigation";
import { Suspense } from "react";




export default async function SelectPage() {
    return (
        <Suspense fallback={<PayrollPage_Loading path="select"/>}>
            <Page/>
        </Suspense>
    )    
}

async function Page() {
    const draft = await getActivePayrollDraft()
    if (!draft) {
        redirect("/organization/payroll")
    }

    return (
        <>
            <DraftPageSelector path='select' />
            <DraftSelectEmployeeList draft={draft} />
        </>
    )
}