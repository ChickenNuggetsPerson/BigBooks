import getPaystubById from "@/actions/paystub/getPaystubById"
import PaystubCard from "@/components/payroll/paystub/PaystubCard"
import Link from "next/link";




export default async function PaystubViewPage({params}: {params: Promise<{ employeeUUID: string; stubUUID: string }>}) {

    const { stubUUID, employeeUUID } = await params

    const stub = await getPaystubById(stubUUID)

    return (
        <>
            <Link href={`/organization/employee/${employeeUUID}`} style={{ position: 'absolute' }} className="text-black font-medium text-lg w-full sm:w-auto px-5 py-2.5 text-center" >
                ← Back
            </Link>

            <div className="flex flex-col lg:flex-row gap-6 justify-center px-10 py-20">
                {stub && <PaystubCard stub={stub} />}
            </div>
        </>
    )
}