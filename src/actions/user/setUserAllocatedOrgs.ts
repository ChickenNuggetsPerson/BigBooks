'use server'

import { getSession } from "@/auth/auth"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"





export default async function setUserAllocatedOrgs(userUUID: string, amt: number) {

    const session = await getSession()
    if (!session) { redirect("/user/login") }

    if (!session.isAdmin) { return }

    await prisma.user.update({
        where: { uuid: userUUID },
        data: { allocatedOrganizations: amt }
    })

    revalidatePath("/user/users")
    revalidatePath("/user/users/" + userUUID)
}