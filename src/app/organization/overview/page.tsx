import getOrgDetails from "@/actions/organization/getOrgDetails";
import getOrgPayrollGroups from "@/actions/payrollGroup/getOrgPayrollGroups";
import { getSession } from "@/auth/auth";
import getOrgRole from "@/auth/roles/getOrgRole";
import { Role_Admin } from "@/auth/roles/Roles";
import AdminCard from "@/components/admin/AdminCard";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import CollapsibleDiv from "@/components/Decorative/CollapsibleDiv";
import EditableDiv from "@/components/Decorative/EditableDiv";
import { CardProp } from "@/components/Employee/EmployeeCard";
import { Divider } from "@/components/Forms/Divider";
import { prisma } from "@/database/prisma";
import { nextOccurence } from "@/utils/functions/Date";

export const dynamic = 'force-dynamic'

export default async function Overview() {

    const session = await getSession()
    const role = await getOrgRole()
    const details = await getOrgDetails(session?.orgUUID ?? " ")

    const employeeCount = await prisma.employee.count({ where: { organizationId: session?.orgUUID } })

    const groups = await getOrgPayrollGroups()

    if (!details) {
        return <div>
            Error Fetching Details...
        </div>
    }

    return (

        <AnimateChildren x={-200} className="grid grid-cols-2 gap-4">
            <EditableDiv className="card max-w-sm" url={"/organization/admin/configure"} enabled={role.level >= Role_Admin.level}>

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{details.name}</h5>
                {details.isDeleted && <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 opacity-50">{"[ Deactivated ]"}</h5>}
                <p className="font-normal text-gray-700 ">{details.address}</p>

                {(details.notes != "") &&
                    <div>
                        <div className="bg-zinc-200 h-1 my-5 rounded-sm" />
                        <p className="font-normal text-gray-700 ">{details.notes}</p>
                    </div>
                }
            </EditableDiv>

            <div className="card max-w-sm">
                <h5 className="mb-2 text-2xl font-normal text-gray-700 ">Organization Statistics:</h5>
                <Divider />
                <h5 className="font-normal text-gray-700">Total Employees: {employeeCount}</h5>
            </div>

            <EditableDiv className="card max-w-sm" url={"/organization/admin/groups"} enabled={role.level >= Role_Admin.level}>
                <h5 className="mb-2 text-2xl font-normal text-gray-700 ">Payroll Groups:</h5>
                <Divider />

                {groups.length == 0 && <h5 className="font-normal text-gray-700">No groups...</h5>}
                {groups.map(group => (
                    <CollapsibleDiv key={group.uuid} arrowSize={15} className="select-none" title={<p>{group.name}</p>}>
                        <div className="pl-2 pt-1 pb-4">
                            <CardProp label={"Next Paydate:"} val={nextOccurence(group.payRefDate, group.payFrequency).toLocaleDateString()} />
                            <CardProp label={"Days per Period:"} val={String(group.payFrequency)} />
                        </div>
                    </CollapsibleDiv>
                ))}
            </EditableDiv>

            {role.level >= Role_Admin.level && <AdminCard />}

        </AnimateChildren>

    )

}