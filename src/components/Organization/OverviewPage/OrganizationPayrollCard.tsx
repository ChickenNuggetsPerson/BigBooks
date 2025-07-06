import getOrgPayrollGroups from "@/actions/payrollGroup/getOrgPayrollGroups"
import getOrgRole from "@/auth/roles/getOrgRole"
import { Role_Admin } from "@/auth/roles/Roles"
import CollapsibleDiv from "@/components/Decorative/CollapsibleDiv"
import EditableDiv from "@/components/Decorative/EditableDiv"
import LoadingBlock from "@/components/Decorative/LoadingBlock"
import { CardProp } from "@/components/Forms/CardProp"
import { Divider } from "@/components/Forms/Divider"
import { nextOccurence } from "@/utils/functions/Date"




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

    const role = await getOrgRole()
    const groups = await getOrgPayrollGroups()

    return (
        <EditableDiv className="card" url={"/organization/admin/groups"} enabled={role.level >= Role_Admin.level}>
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
    )
}