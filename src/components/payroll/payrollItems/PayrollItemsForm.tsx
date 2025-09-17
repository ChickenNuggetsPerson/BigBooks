'use server'

import { Divider } from "@/components/Forms/Divider"
import getPayrollItems, { PayrollItemWithCount } from "@/actions/paystub/payrollItems/getPayrollItems"
import { getSession } from "@/auth/auth"
import { redirect } from "next/navigation"
import PayrollItemAddBtn from "./PayrollItemAddBtn"
import PayrollItemInfoBtn from "./PayrollItemInfoBtn"
import { prisma } from "@/database/prisma"
import { deserializeData, serializeData } from "@/utils/serialization"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import PayrollItemEditButton from "./PayrollItemFormCard"




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

    if (!organization && !group && !employee) {
        throw new Error("Payroll Items form not configured correctly")
    }

    if (organization) {
        await throwIfInsufficientPerms(Permissions.admin.orgItem.edit)
    }
    if (group) {
        await throwIfInsufficientPerms(Permissions.payroll.payrollGroup.items.edit)
    }
    if (employee) {
        await throwIfInsufficientPerms(Permissions.employee.items.edit)
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
        const emp = (await prisma.employee.findUnique({ where: { uuid: employeeUUID } }))
        name = `${emp?.firstName} ${emp?.lastName}`
    }
    if (group) {
        items = deserializeData(await getPayrollItems({ payrollGroupId: groupUUID })).group
        name = (await prisma.payrollGroup.findUnique({ where: { uuid: groupUUID } }))?.name
    }

    const serializedData = items.map(item => {
        return {
            data: serializeData(item),
            id: item.uuid,
            name: item.name
        }
    })

    if (employee && employeeUUID === "") { throw new Error("Invalid Props") }
    if (group && groupUUID === "") { throw new Error("Invalid Props") }

    return (
        <div className="h-fit w-fit mx-auto">
            <div className="card mb-5 w-sm h-fit">
                <div className="flex flex-row justify-between">
                    <h5 className="text-xl font-semibold text-gray-700">{`${title} Payroll Items`}</h5>
                    <PayrollItemInfoBtn />
                </div>

                <p>{`Payroll Items for: ${name}`}</p>

                {serializedData.length !== 0 && <Divider/> }

                {serializedData.map((item) => (
                    <div key={item.id + "-name"} className="mb-1 smallCard flex justify-between" style={{ padding: 10 }}>
                        <h1 className="select-none">{item.name}</h1>
                        <PayrollItemEditButton serializedData={item.data}/>
                    </div>
                ))}

                <Divider />

                <PayrollItemAddBtn organization={organization} group={group} employee={employee} employeeUUID={employeeUUID} groupUUID={groupUUID} />
            </div>
        </div>
    )
}


