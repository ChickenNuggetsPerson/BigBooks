import { getUserFromSession, redirectIfInvalidSession } from "@/auth/auth";
import { getRoleFromID } from "@/auth/roles/Roles";
import InviteButtons from "@/components/User/OrgAdmin/InviteButtons";
import { UserRoleIcon } from "@/components/User/UserRoleIcon";
import { prisma } from "@/database/prisma";







export const dynamic = 'force-dynamic';
export default async function InvitePage({ params }: { params: Promise<{ inviteCode: string }> }) {

    const { inviteCode } = await params

    await redirectIfInvalidSession()

    const code = await prisma.inviteCode.findUnique({ where: { uuid: inviteCode }, include: { organization: true } })
    if (!code) {
        return (
            <div className="card w-md">
                <p>Whoops! That is an invalid invite link...</p>
            </div>
        )
    }

    const user = await getUserFromSession()

    return (
        <>
            <div 
                className="card mb-5 flex flex-row "
                style={{
                    position: "fixed",
                    top: 10,
                    left: 10
                }}
            >
                <p>Logged in as: {user?.firstName + " " + user?.lastName}</p>
            </div>

            <div className="card w-md">

                <p className="text-lg font-semibold">You are invited to the {code.organization.name} organization.</p>
                <div className="bg-accent h-px my-5"></div>

                <div className="flex flex-row justify-start">

                    <p className="mr-2 mt-1">Role:</p>
                    <UserRoleIcon role={getRoleFromID(code.role)} />

                    <div className="w-full flex flex-row justify-end mb-2">
                        <InviteButtons inviteID={code.uuid} />
                    </div>

                </div>

            </div>
        </>
    )

}