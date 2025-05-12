
import { logout } from "@/auth/actions/Logout"
import { getSession } from "@/auth/auth"
import { prisma } from "@/database/prisma"
import Link from "next/link"





export default async function UserGreetingCard() {

    const session = await getSession()
    const user = await prisma.user.findUnique({ where: { uuid: session?.userID ?? "" } })

    if (!user) {
        return (
            <div className="card h-30 w-70">
                <p className="font-semibold">
                    You are not logged in!
                </p>

                <div className="h-px bg-accent mb-5"></div>

                <Link href={"/user/login"} className="primary-button">
                    Login
                </Link>
            </div>
        )
    }

    return (
        <div className="card h-30 w-70">
            <p className="font-semibold">
                {`Hello ${user.firstName + " " + user.lastName}!`}
            </p>

            <div className="h-px bg-accent mb-3"></div>

            <div className="flex flex-row justify-between">

                <Link href={"/user"} className="primary-button">
                    View Profile
                </Link>

                <button onClick={logout} className="accent-button">
                    Logout
                </button>

            </div>
        </div>
    )

}