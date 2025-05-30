'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { prisma } from "@/database/prisma"




export default async function declineInviteCode(codeID: string) {

    await redirectIfInvalidSession()
    await prisma.inviteCode.delete({ where: { uuid: codeID } })
    
}