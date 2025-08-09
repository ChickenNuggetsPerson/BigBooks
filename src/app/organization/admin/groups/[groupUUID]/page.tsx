import Loading from "@/components/Decorative/Loading/Loading"
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

                <Suspense fallback={<Loading vCenter hCenter />}>
                    <PayrollItemsForm group groupUUID={groupUUID} />
                </Suspense>

            </AnimateChildren>
        </div>
    )

}