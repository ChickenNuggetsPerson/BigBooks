'use client'

import acceptInviteCode from "@/actions/user/inviteCodes/acceptInviteCode"
import declineInviteCode from "@/actions/user/inviteCodes/declineInviteCode"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"





export default function InviteButtons({ inviteID }: { inviteID: string }) {

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
        <div className="flex flex-row justify-between">
            <button type="submit" className={`accent-button w-4/9`} onClick={decline}>Decline</button>
            <button type="submit" className={`primary-button w-4/9`} onClick={accept}>Accept</button>
        </div>
    )
}