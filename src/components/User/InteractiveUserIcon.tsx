import { getUserFromSession } from "@/auth/auth"
import Link from "next/link"
import { UserRoleIcon } from "./UserRoleIcon"
import { getOrgMembership } from "@/auth/permissions/PermissionsFunctions"


export function InteractiveUserIcon_Loading() {

    return (
        <div className="flex flex-row justify-between smallCard h-fit animate-pulse" style={{ paddingLeft: 10, paddingRight: 5 }}>

            <p className="font-semibold text-xl pt-1">
                Loading...
            </p>

        </div>
    )
}

export default async function InteractiveUserIcon() {

    const user = await getUserFromSession()
    const membership = await getOrgMembership()

    if (!user || !membership) {
        return (<p>Error...</p>)
    }

    return (
        <div className="flex flex-row justify-between smallCard h-fit" style={{ paddingLeft: 10, paddingRight: 5 }}>

            <Link href={"/user"} className="font-semibold text-xl pt-1">
                {user.firstName + " " + user.lastName}
            </Link>


            <UserRoleIcon perms={membership.permissions} />
        </div>
    )
}