'use server'

import { Divider } from "@/components/Forms/Divider"
import { PayrollItem } from "@/database/generated/prisma"
import getPayrollItems from "@/actions/paystub/payrollItems/getPayrollItems"
import PayrollItemFormCard from "./PayrollItemFormCard"
import { getSession } from "@/auth/auth"
import { redirect } from "next/navigation"
import PayrollItemAddBtn from "./PayrollItemAddBtn"
import PayrollItemInfoBtn from "./PayrollItemInfoBtn"
import { prisma } from "@/database/prisma"
import { deserializeData } from "@/utils/serialization"




export default async function PayrollItemsForm({
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

    const session = await getSession()
    if (!session) { redirect("/user/login") }

    const title = (organization ? "Organization" : "") + (employee ? "Employee" : "") + (group ? "Group" : "")
    let name = null

    let items = [] as PayrollItem[]

    if (organization) {
        items = deserializeData(await getPayrollItems({ organizationId: session.orgUUID })).organization
        name = (await prisma.organization.findUnique({ where: { uuid: session.orgUUID } }))?.name
    }
    if (employee) {
        items = deserializeData(await getPayrollItems({ employeeId: employeeUUID })).employee
        name = (await prisma.employee.findUnique({ where: { uuid: employeeUUID } }))?.firstName
    }
    if (group) {
        items = deserializeData(await getPayrollItems({ payrollGroupId: groupUUID })).group
        name = (await prisma.payrollGroup.findUnique({ where: { uuid: groupUUID } }))?.name
    }

    if (employee && employeeUUID === "") { return (<div>Error...</div>) }
    if (group && groupUUID === "") { return (<div>Error...</div>) }

    return (
        <div className="h-fit w-full flex flex-row gap-4">
            <div className="card mb-5 w-sm h-fit">
                <div className="flex flex-row justify-between">
                    <h5 className="text-xl font-semibold text-gray-700">{`${title} Payroll Items`}</h5>
                    <PayrollItemInfoBtn />
                </div>
                <Divider />

                <p>{`Payroll Items for: ${name}`}</p>

                <div className="h-7"></div>
                <PayrollItemAddBtn organization={organization} group={group} employee={employee} employeeUUID={employeeUUID} groupUUID={groupUUID} />
            </div>

            <div className="h-screen overflow-y-scroll pt-8 px-10 pb-20">
                {items.map((item) => (
                    <div key={item.uuid} className="card mb-5">
                        <PayrollItemFormCard  item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}


