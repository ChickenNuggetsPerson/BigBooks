'use server'

import { throwIfNotSYSAdmin } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"






export default async function setUserActiveStatus(userID: string, status: boolean) {

    await throwIfNotSYSAdmin()

    await prisma.user.update({
        where: { uuid: userID},
        data: { isActive: status }
    })

    revalidatePath("/user/users")
    revalidatePath("/user/users/" + userID)
    revalidatePath("/user/users/" + userID)
}