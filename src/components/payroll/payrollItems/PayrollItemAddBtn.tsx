'use client'

import upsertPayrollItems from "@/actions/paystub/payrollItems/upsertPayrollItems"
import { useCompany } from "@/app/CompanyContext"
import { AbsMaxPeriodTypes, PayStubItemType } from "@/database/generated/prisma"
import { Decimal } from "@/database/generated/prisma/runtime/index-browser"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"





export default function PayrollItemAddBtn({
    organization = false,
    group = false,
    employee = false,
    employeeUUID = "",
    groupUUID = "",
}: {
    organization?: boolean,
    group?: boolean,
    employee?: boolean,
    employeeUUID?: string,
    groupUUID?: string
}) {

    const { context } = useCompany()
    const router = useRouter()

    function clicked() {
        toast.promise(
            async () => {
                await upsertPayrollItems({
                    name: "New Item",
                    uuid: "",
                    type: PayStubItemType.Other,
                    description: null,
                    percent: null,
                    amount: new Decimal(0),
                    organizationId: (organization) ? (context?.companyUUID ?? null) : null,
                    payrollGroupId: (group) ? groupUUID : null,
                    employeeId: (employee) ? employeeUUID : null,
                    absMax: new Decimal(0),
                    absMaxPeriod: AbsMaxPeriodTypes.None
                })
                router.refresh()
            },
            {
                loading: "Creating New Item",
                success: "Payroll Item Created",
                error: "Error Creating Payroll Item"
            }
        )
    }

    return (
        <button onClick={clicked} className="bg-primary rounded-md text-white w-full text-xl font-bold p-1">New Item</button>
    )
}