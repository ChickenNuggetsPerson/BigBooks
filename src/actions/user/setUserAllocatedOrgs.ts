'use server'

import { throwIfNotSYSAdmin } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"





export default async function setUserAllocatedOrgs(userUUID: string, amt: number) {

    await throwIfNotSYSAdmin()

    await prisma.user.update({
        where: { uuid: userUUID },
        data: { allocatedOrganizations: amt }
    })

    revalidatePath("/user/users")
    revalidatePath("/user/users/" + userUUID)
}