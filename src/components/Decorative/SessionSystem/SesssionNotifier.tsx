import { getSession } from "@/auth/auth"
import { SesssionNotifierClient } from "./SesssionNotifierClient"




export default async function SessionNotifier() {

    const session = await getSession()

    if (!session) {
        return (<></>)
    }

    if (session.userID.trim() === "") {
        return (<></>)
    }

    return (<SesssionNotifierClient expireTime={session.expireTime}/>)
}