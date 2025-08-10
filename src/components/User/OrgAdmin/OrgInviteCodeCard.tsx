'use client'

import { InviteCode } from "@/database/generated/prisma";
import ClickableDiv from "@/components/Decorative/ClickableDiv";
import deleteInviteCode from "@/actions/user/inviteCodes/deleteInviteCode";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { CardProp } from "@/components/Forms/CardProp";
import { Pen } from "lucide-react";
import { useModalManager } from "@/components/Decorative/Modal/ModalContext";
import UserPermissionsTree from "../Permissions/UserPermissionsTree";





export default function OrgInviteCodeCard({ code }: { code: InviteCode }) {

    const router = useRouter()
    const { addModal } = useModalManager()

    async function del() {
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

    function copyURL() {
        navigator.clipboard.writeText(getURL())
        toast.success("Coppied URL")
    }

    function editClicked() {
        addModal({
            title: "Organization Invite",
            component: (push, pop) => (
                <div>
                    <h1 className="font-mono text-lg" >Permissions:</h1>
                    <div className="bg-accent h-px w-40 mb-2"></div>
                    <UserPermissionsTree activePerms={code.perms} />

                    <div className="flex gap-4 mt-8">
                        <button onClick={copyURL} className="primary-button w-full">
                            Copy URL
                        </button>
                        <button onClick={async () => {
                            await del()
                            pop()
                        }} className="danger-button w-full">
                            Delete Invite
                        </button>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="smallCard flex flex-row justify-between select-none w-full mb-2">

            <ClickableDiv onClick={copyURL} className="flex flex-col justify-center ml-2">
                <CardProp label="Expires: " val={code.expires.toLocaleDateString()}/>
            </ClickableDiv>


            <div className="flex flex-col justify-center">
                <ClickableDiv className="icon bg-accent" onClick={editClicked}>
                    <Pen color="white"/>
                </ClickableDiv>
            </div>

        </div>
    )

}