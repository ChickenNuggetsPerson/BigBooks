'use server'

import { getSession, updateSession } from "../auth"






export default async function UpdateSelectedOrg(orgUUID: string) {
    
    const session = await getSession()
    if (!session) { return }

    session.orgUUID = orgUUID
    await updateSession(session)
}