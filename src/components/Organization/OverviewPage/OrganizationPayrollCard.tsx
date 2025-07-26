import getOrgPayrollGroups from "@/actions/payrollGroup/getOrgPayrollGroups"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { userHasPermission } from "@/auth/permissions/PermissionsFunctions"
import CollapsibleDiv from "@/components/Decorative/CollapsibleDiv"
import EditableDiv from "@/components/Decorative/EditableDiv"
import LoadingBlock from "@/components/Decorative/LoadingBlock"
import { CardProp } from "@/components/Forms/CardProp"
import { Divider } from "@/components/Forms/Divider"
import { nextPayrollOccurence } from "@/utils/functions/Date"




export function OrganizationPayrollCard_Loading() {
    return (
        <div className="card h-fit">
            <LoadingBlock w={"full"} />
            <Divider />
            
            <LoadingBlock w={"full"} className="mb-2" />
            <LoadingBlock w={"full"} className="mb-2" />
            <LoadingBlock w={"full"} className="mb-2" />
        </div>
    )
}

export default async function OrganizationPayrollCard() {

    const groups = await getOrgPayrollGroups()
    const editable = await userHasPermission({ perm: Permissions.payroll.payrollGroup.edit })

    return (
        <EditableDiv className="card" url={"/organization/admin/groups"} enabled={editable}>
            <h5 className="mb-2 text-2xl font-normal text-gray-700 ">Payroll Groups:</h5>
            <Divider />

            {groups.length == 0 && <h5 className="font-normal text-gray-700">No groups...</h5>}
            {groups.map(group => {
                
                const period = nextPayrollOccurence(group.periodRefDate, group.payRefDate, group.payFrequency)

                return (
                <CollapsibleDiv key={group.uuid} arrowSize={15} className="select-none" title={<p>{group.name}</p>}>
                    <div className="pl-2 pt-1 pb-4">
                        <CardProp label={"Current Period:"} val={`${period.periodStart.toLocaleDateString()} - ${period.periodEnd.toLocaleDateString()}`} />
                        <CardProp label={"Next Paydate:"} val={period.payDate.toLocaleDateString()} />
                        <CardProp label={"Days per Period:"} val={String(group.payFrequency)} />
                    </div>
                </CollapsibleDiv>
            )})}
        </EditableDiv>
    )
}