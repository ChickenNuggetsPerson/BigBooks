import getOrgDetails from "@/actions/organization/getOrgDetails"
import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { userHasPermission } from "@/auth/permissions/PermissionsFunctions"
import EditableDiv from "@/components/Decorative/EditableDiv"
import LoadingBlock from "@/components/Decorative/LoadingBlock"




export function OrganizationDetailsCard_Loading() {
    return (
        <div className="card h-fit">
            <LoadingBlock w={"full"} />
            <LoadingBlock w={"full"} h={4} className="mt-2"/>

            <div>
                <div className="bg-zinc-200 h-1 my-5 rounded-sm" />
                <LoadingBlock w={"full"} h={4} />
            </div>
        </div>
    )
}

export default async function OrganizationDetailsCard() {

    const session = await getSession()
    const details = await getOrgDetails(session?.orgUUID ?? " ")
    const editable = await userHasPermission({ perm: Permissions.org.edit })

    if (!details) {
        return <div className="card h-fit">
            Error Fetching Details...
        </div>
    }

    return (
        <EditableDiv className="card h-fit" url={"/organization/admin/configure"} enabled={editable}>

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
    )
}