import getPaystubById from "@/actions/paystub/getPaystubById"
import PaystubCard from "@/components/payroll/paystub/PaystubCard"




type Props = {
    params: { employeeUUID: string, stubUUID: string }
}
export default async function PaystubViewPage({ params }: Props) {

    const { stubUUID } = await params

    const stub = await getPaystubById(stubUUID)

    return (
        <>{stub && <PaystubCard stub={stub} />}</>
    )
}