import Loading from "@/app/Loading"
import AnimateChildren from "@/components/Decorative/AnimateChildren"
import PayrollItemsForm from "@/components/payroll/payrollItems/PayrollItemsForm"
import { MoveLeft } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"





export default async function GroupPayrollItemEditPage({
    params,
}: {
    params: Promise<{ groupUUID: string }>
}) {

    const groupUUID = (await params).groupUUID

    return (
        <div className="">

            <Link href={"/organization/admin/groups"} >
                <MoveLeft />
            </Link>

            <AnimateChildren y={-20}>

                <Suspense fallback={<div className="mx-auto card w-fit"><Loading vCenter hCenter /></div>}>
                    <PayrollItemsForm group groupUUID={groupUUID} />
                </Suspense>

            </AnimateChildren>
        </div>
    )

}