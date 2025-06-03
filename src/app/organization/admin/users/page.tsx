import getOrgUsers from "@/actions/user/getOrgUsers"
import getInviteCodes from "@/actions/user/inviteCodes/getInviteCodes"
import { getSession } from "@/auth/auth"
import AnimateChildren from "@/components/Decorative/AnimateChildren"
import OrgInviteCodeCard from "@/components/User/OrgAdmin/OrgInviteCodeCard"
import OrgUserCreateInviteButton from "@/components/User/OrgAdmin/OrgUserCreateInviteButton"
import { OrgUserList } from "@/components/User/OrgAdmin/OrgUserList"



export default async function AdminUserPage() {

    const session = await getSession()
    if (!session) { return <div></div> }

    const users = await getOrgUsers(session.orgUUID)
    const codes = await getInviteCodes()

    return (
        <AnimateChildren className="grid grid-cols-2 gap-4">

            <OrgUserList users={users} />

            <div className="card max-w-80 relative">
                <div className="absolute right-5 top-5">
                    <OrgUserCreateInviteButton />
                </div>


                <p className="font-bold text-xl">
                    Invite Codes
                </p>

                <div className="bg-accent h-px mb-5 w-35"></div>
                {codes.map((code) => (
                    <OrgInviteCodeCard code={code} key={code.uuid} />
                ))}

            </div>
        </AnimateChildren>
    )
}