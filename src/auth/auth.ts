// lib/auth.ts
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { hashPassword, signSession, verifySession } from './encryption';
import { prisma } from '@/database/prisma';
import bcrypt from 'bcryptjs';
import { getDispUser, getEmptyDispUser } from '@/database/models/DisplayModels';



interface Session {
    userID: string,
    isAdmin: boolean
}

// Function for user login

// Validates user and sets the propper cookies
// Used in Login process
export async function loginUser(username: string, password: string) {


    // TODO: Check for authentication :3

    let token = ""

    if (username == process.env.ADMIN_USER && password == process.env.ADMIN_PASS) {

        token = await signSession({
            userID: "admin",
            isAdmin: true
        })

    } else {

        const user = await prisma.user.findUnique({
            where: {
                username: username,
                isActive: true
            }
        })

        if (!user) { throw new Error("Invalid Credentials") }

        const match = await bcrypt.compare(password, user.passHash)
        if (!match) { throw new Error("Invalid Credentials") }

        token = await signSession({
            userID: user.uuid,
            isAdmin: false
        })
    }


    const cookieStore = await cookies()
    cookieStore.set("session", token, { // Set session
        httpOnly: true,
        secure: process.env.NODE_ENV == "production",
        path: "/",
        maxAge: 60 * 60 * 2, // 1 Hour
        sameSite: "lax"
    })
}

// Creates the user in the database
export async function registerUser(username: string, password: string) {
    const authHash = hashPassword(password)

    await prisma.user.create({
        data: {
            isActive: true,
            firstName: "New Employee",
            lastName: "",
            email: "",
            username: username,
            passHash: authHash
        }
    })

}





// Functions for verifying API requests...

export async function getUserFromSession() {
    const session = await getSession()
    if (!session) { return null }

    if (session.isAdmin) { // Make a disp user for the admin
        const dispUser = getEmptyDispUser()
        dispUser.firstName = "ADMIN"
        return dispUser
    }

    const user = await prisma.user.findUnique({ where: { uuid: session.userID, isActive: true } })
    if (user) {
        return getDispUser(user)
    }
    return null
}

export async function getSession(): Promise<Session | null> {
    const token = (await cookies()).get('session')?.value;
    if (!token) return null;
    return await verifySession(token) as Session | null;
}

export async function isValidSession() {
    const session = await getSession()
    if (session) {
        return true
    }
    return false
}

export async function throwIfInvalidSession() {
    if (!(await isValidSession())) {
        throw new Error("Unauthorized")
    }
}

export async function redirectIfInvalidSession() {
    if (!(await isValidSession())) {
        redirect("/user/login")
    }
}

export async function invalidateSession() {
    const cookieStore = await cookies();

    const encryptToken = cookieStore.get('session')?.value;
    if (!encryptToken) { return }

    cookieStore.delete("session")
}
