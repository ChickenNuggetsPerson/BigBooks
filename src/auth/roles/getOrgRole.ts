import { getSession, getUserFromSession } from "@/auth/auth";
import { prisma } from "@/database/prisma";
import { redirect } from "next/navigation";
import { getRoleFromID, Role_Error, Role_SysAdmin } from "./Roles";






// To be run in server actions
export default async function getOrgRole(orgUUID: string = "") {

    const session = await getSession()
    if (!session) {
        redirect("/user/login")
    }

    if (session.isAdmin) {
        return Role_SysAdmin // If logged in as sys admin, just return the admin role
    }

    const user = await getUserFromSession()

    if (!user) {
        redirect("/user/login")
    }

    const role = await prisma.role.findFirst({
        where: {
            organizationId: (orgUUID == "") ? session.orgUUID : orgUUID,
            userId: user.uuid
        }
    })

    if (!role) {
        return Role_Error
    }

    return getRoleFromID(role.role)
}