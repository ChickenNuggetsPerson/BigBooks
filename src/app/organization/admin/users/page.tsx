import getOrgDetails from "@/actions/organization/getOrgDetails"
import getOrgUsers from "@/actions/user/getOrgUsers"
import getInviteCodes from "@/actions/user/inviteCodes/getInviteCodes"
import { getSession } from "@/auth/auth"
import AnimateChildren from "@/components/Decorative/AnimateChildren"
import OrgInviteCodeCard from "@/components/User/OrgAdmin/OrgInviteCodeCard"
import OrgUserCard from "@/components/User/OrgAdmin/OrgUserCard"
import OrgUserCreateInviteButton from "@/components/User/OrgAdmin/OrgUserCreateInviteButton"
import { DispUser, getDispUser } from "@/database/models/DisplayModels"




export default async function AdminUserPage() {

    const session = await getSession()
    if (!session) { return <div></div> }

    const users = await getOrgUsers(session.orgUUID)
    const orgDetails = await getOrgDetails(session.orgUUID)
    const codes = await getInviteCodes()

    const dispUsers = [] as DispUser[]
    for (let i = 0; i < users.length; i++) {
        dispUsers.push(await getDispUser(users[i]))
    }

    return (
        <AnimateChildren className="grid grid-cols-2 gap-4">

            <div className="max-w-sm card">
                <div className="font-light text-xl">
                    <p>Users Associated With</p>
                    <p className="font-mono font-bold">{orgDetails.name}</p>
                </div>

                <div className="bg-accent h-px mb-5"></div>

                <div className="">
                    {dispUsers.map((user) => (
                        <OrgUserCard user={user} key={user.uuid} />
                    ))}
                </div>
            </div>

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