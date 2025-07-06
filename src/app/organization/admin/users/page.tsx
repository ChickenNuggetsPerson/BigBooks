import getOrgUsers from "@/actions/user/getOrgUsers"
import getInviteCodes from "@/actions/user/inviteCodes/getInviteCodes"
import Loading from "@/app/Loading"
import { getSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import OrgInviteCodeCard from "@/components/User/OrgAdmin/OrgInviteCodeCard"
import OrgUserCreateInviteButton from "@/components/User/OrgAdmin/OrgUserCreateInviteButton"
import { OrgUserList } from "@/components/User/OrgAdmin/OrgUserList"
import { Suspense } from "react"


export const dynamic = 'force-dynamic'

export default function AdminUserPage() {


    return (
        <Suspense fallback={<div className="mx-auto card w-fit"><Loading vCenter hCenter /></div>}>
            <Page />
        </Suspense>
    )
}



async function Page() {
    const session = await getSession()
    if (!session) { return <div></div> }

    try {
        await throwIfInsufficientPerms(RoleTypes.Admin)
    } catch {
        return (
            <div className="h-fit w-fit">
                Insufficient Permissions
            </div>
        )
    }

    const users = await getOrgUsers(session.orgUUID)
    const codes = await getInviteCodes()

    return (
        <div className="flex flex-row gap-4">

            <div className="h-fit">
                <OrgUserList users={users} />
            </div>

            {/* Invites Card */}
            <div className="card relative h-fit w-xs">
                <div className="absolute right-5 top-5">
                    <OrgUserCreateInviteButton />
                </div>

                <p className="font-bold text-xl">
                    Invite Codes
                </p>

                <div className="bg-accent h-px mb-5 w-40"></div>
                {codes.map((code) => (
                    <OrgInviteCodeCard code={code} key={code.uuid} />
                ))}

            </div>
        </div>
    )
}