'use server'

import { getSession, getUserFromSession, updateSession } from "../auth"






export default async function UpdateSelectedOrg(orgUUID: string) {

    const session = await getSession()
    if (!session) { return { error: true, name: "", sessionExpireTime: new Date() } }

    const user = await getUserFromSession()
    if (!user) { return { error: true, name: "", sessionExpireTime: new Date() } }

    let contains = false
    user.memberships.forEach((role) => {
        if (role.organizationId == orgUUID) {
            contains = true
        }
    })

    if (!contains && !session.isAdmin) { return { error: true, name: "", sessionExpireTime: new Date() } } // Make sure the user actually has access to the organization

    session.orgUUID = orgUUID
    await updateSession(session)

    return { error: false, name: `${user.firstName} ${user.lastName}`, sessionExpireTime: session.expireTime }
}