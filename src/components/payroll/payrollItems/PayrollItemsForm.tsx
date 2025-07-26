'use server'

import { Divider } from "@/components/Forms/Divider"
import getPayrollItems, { PayrollItemWithCount } from "@/actions/paystub/payrollItems/getPayrollItems"
import PayrollItemFormCard from "./PayrollItemFormCard"
import { getSession } from "@/auth/auth"
import { redirect } from "next/navigation"
import PayrollItemAddBtn from "./PayrollItemAddBtn"
import PayrollItemInfoBtn from "./PayrollItemInfoBtn"
import { prisma } from "@/database/prisma"
import { deserializeData, serializeData } from "@/utils/serialization"
import { throwIfInsufficientPerms } from "@/auth/permissions/throwIfInsufficientPerms"
import { RoleTypes } from "@/auth/roles/Roles"




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

    try {
        await throwIfInsufficientPerms(RoleTypes.Editor)
    } catch {
        return (
            <div className="items-center min-h-screen p-8 pb-20 gap-16">
                <div className="card max-w-sm">
                    Insufficient Permissions
                </div>
            </div>
        )
    }

    const session = await getSession()
    if (!session) { redirect("/user/login") }

    const title = (organization ? "Organization" : "") + (employee ? "Employee" : "") + (group ? "Group" : "")
    let name = null

    let items = [] as PayrollItemWithCount[]

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

    const serializedData = items.map(item => {
        return {
            data: serializeData(item),
            id: item.uuid
        }
    })

    if (employee && employeeUUID === "") { return (<div>Error...</div>) }
    if (group && groupUUID === "") { return (<div>Error...</div>) }

    return (
        <div className="h-fit w-fit flex flex-row gap-4">
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
                {serializedData.map((item) => (
                    <div key={item.id} className="card mb-5">
                        <PayrollItemFormCard serializedData={item.data} />
                    </div>
                ))}
            </div>
        </div>
    )
}


