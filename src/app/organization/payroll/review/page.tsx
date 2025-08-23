import getActivePayrollDraft from "@/actions/payrollDraft/getActivePayrollDraft";
import DraftPageSelector from "@/components/payroll/draftsystem/DraftPageSelector";
import PayrollPage_Loading from "@/components/payroll/PayrollPage_Loading";
import ActivePaystubList from "@/components/payroll/paystub/ActivePaystubList";
import { redirect } from "next/navigation";
import { Suspense } from "react";




export default async function ReviewPage() {
    return (
        <Suspense fallback={<PayrollPage_Loading path="review"/>}>
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
            <DraftPageSelector path='review' />
            <ActivePaystubList useActiveDraft />
        </>
    )
}