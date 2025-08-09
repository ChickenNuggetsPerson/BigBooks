'use client'

import { InviteCode } from "@/database/generated/prisma";
import ClickableDiv from "@/components/Decorative/ClickableDiv";
import deleteInviteCode from "@/actions/user/inviteCodes/deleteInviteCode";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";





export default function OrgInviteCodeCard({ code }: { code: InviteCode }) {

    const router = useRouter()

    function del() {
        toast.promise(
            async () => {
                await deleteInviteCode(code.uuid)
                router.refresh()
            },
            {
                loading: "Deleting Code",
                success: "Invite Code Deleted",
                error: "Error Deleting Invite Code"
            }
        )
    }

    function getURL() {
        return `${window.location.protocol}//${window.location.host}/user/invite/${code.uuid}`
    }

    function clicked() {
        navigator.clipboard.writeText(getURL())
        toast.success("Coppied URL")
    }

    return (
        <div className="smallCard flex flex-row justify-between select-none w-full mb-2">
            {/* <ClickableDiv onClick={clicked}>
                <UserRoleIcon role={getRoleFromID(code.role)} />
            </ClickableDiv> */}

            <ClickableDiv onClick={clicked} className="flex flex-col justify-center">
                <p className="font-mono mt-1">{code.expires.toLocaleDateString()}</p>
            </ClickableDiv>


            <div className="flex flex-col justify-center">
                <button onClick={del} className="bg-accent text-white font-bold w-8 h-8 text-center rounded-xl">X</button>
            </div>

        </div>
    )

}