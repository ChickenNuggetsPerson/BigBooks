import { getSession } from "@/auth/auth"
import { SessionNotifierNoSession, SesssionNotifierClient } from "./SesssionNotifierClient"




export default async function SessionNotifier() {

    const session = await getSession()

    if (!session) {
        return (<SessionNotifierNoSession />)
    }

    if (session.userID.trim() === "") {
        return (<SessionNotifierNoSession />)
    }

    return (<SesssionNotifierClient expireTime={session.expireTime}/>)
}