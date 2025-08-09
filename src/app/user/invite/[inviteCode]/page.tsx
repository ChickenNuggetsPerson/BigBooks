import { getUserFromSession, redirectIfInvalidSession } from "@/auth/auth";
import InviteButtons from "@/components/User/OrgAdmin/InviteButtons";
import { prisma } from "@/database/prisma";







export const dynamic = 'force-dynamic';
export default async function InvitePage({ params }: { params: Promise<{ inviteCode: string }> }) {

    const { inviteCode } = await params

    await redirectIfInvalidSession()

    const code = await prisma.inviteCode.findUnique({ where: { uuid: inviteCode }, include: { organization: true } })
    if (!code) {
        return (

            <div className="flex flex-row justify-center">
                <div className="h-screen flex flex-col justify-center pb-10">
                    <div className="card w-xs">
                        <p className="font-bold">Whoops!</p>
                        <p>{`That's an invalid invite link...`}</p>
                    </div>
                </div>
            </div>
        )
    }

    const user = await getUserFromSession()

    return (
        <div className="flex flex-row justify-center">
            <div className="h-screen flex flex-col justify-center pb-10">

                <div
                    className="card mb-5 flex flex-row gap-2"
                    style={{
                        position: "fixed",
                        top: 10,
                        left: 10
                    }}
                >
                    <p>Logged in as:</p>
                    <p className="font-semibold">{user?.firstName + " " + user?.lastName}</p>
                </div>

                <div className="card w-sm">

                    <div className="flex flex-row justify-between">

                        <div className="w-1/2">
                            <p>You are invited to:</p>
                            <p className="text-lg font-semibold">{code.organization.name}</p>
                        </div>

                        <div className="flex flex-row justify-end mt-auto mb-1">
                            <p className="mr-2 mt-auto font-mono">Permissions:</p>
                        </div>
                    </div>

                    <div className="bg-accent h-px mb-4"></div>

                    <div className="bg-gray-300/40 p-2 rounded-xl mb-4 overflow-y-scroll h-25">
                        {code.perms.map((perm) => (
                            <p key={perm}>{perm}</p>
                        ))}
                    </div>

                    <InviteButtons inviteID={code.uuid} />

                </div>


            </div>
        </div>



    )

}