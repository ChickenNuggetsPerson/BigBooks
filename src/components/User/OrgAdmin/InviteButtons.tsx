'use client'

import acceptInviteCode from "@/actions/user/inviteCodes/acceptInviteCode"
import declineInviteCode from "@/actions/user/inviteCodes/declineInviteCode"
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"





export default function InviteButtons({ inviteID } : { inviteID: string }) {

    const router = useRouter()

    async function accept() {
        const message = await acceptInviteCode(inviteID)
        if (message.success) {
            toast.success(message.message)
            setTimeout(() => {
                router.push("/user")
            }, 1000);
        } else {
            toast.error(message.message)
        }
    }
    async function decline() {
        await declineInviteCode(inviteID)
        router.push("/user")
    }

    return (
        <>
            <button onClick={decline} className="accent-button mr-5">Decline</button>
            <button onClick={accept} className="primary-button">Accept</button>
            <Toaster/>
        </>
    )
}