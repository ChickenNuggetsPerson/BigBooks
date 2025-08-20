import getActivePayrollDraft from "@/actions/payrollDraft/getActivePayrollDraft";
import DraftPageSelector from "@/components/payroll/draftsystem/DraftPageSelector";
import PayrollPage_Loading from "@/components/payroll/PayrollPage_Loading";
import PayrollPaystubPage from "@/components/payroll/paystub/PayrollPaystubPage";
import { redirect } from "next/navigation";
import { Suspense } from "react";




export default async function PaystubPage() {
    return (
        <Suspense fallback={<PayrollPage_Loading path="paystubs"/>}>
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
            <DraftPageSelector path='paystubs' />
            <PayrollPaystubPage draft={draft}/>
        </>
    )
}