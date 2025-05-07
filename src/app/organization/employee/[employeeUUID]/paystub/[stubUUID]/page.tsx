import getPaystubById from "@/actions/paystub/getPaystubById"
import PaystubCard from "@/components/payroll/paystub/PaystubCard"




export default async function PaystubViewPage({
    params,
}: {
    params: Promise<{ employeeUUID: string; stubUUID: string }>
}) {

    const { stubUUID } = await params

    const stub = await getPaystubById(stubUUID)

    return (
        <>{stub && <PaystubCard stub={stub} />}</>
    )
}