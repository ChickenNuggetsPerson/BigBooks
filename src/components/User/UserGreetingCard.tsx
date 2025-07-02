
import { logout } from "@/auth/actions/Logout"
import { getUserFromSession } from "@/auth/auth"
import Link from "next/link"




export default async function UserGreetingCard() {

    const user = await getUserFromSession()

    if (!user) {
        return (
            <div className="card w-80 h-fit">

                <p className="mb-1 text-2xl font-semibold text-gray-700 select-none">Not Logged In</p>

                <div className="h-px bg-accent mb-3"></div>

                <Link href={"/user/login"}>
                    <div className="w-full primary-button text-center">Login</div>
                </Link>

            </div>
        )
    }

    return (
        <div className="card w-80 h-fit">

            <p className="mb-1 text-2xl font-semibold text-gray-700 select-none">{`Hello ${user.firstName}!`}</p>

            <div className="h-px bg-accent mb-3"></div>

            <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/user"} >
                View Profile
            </Link>

            <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/info/changelog"} >
                Changelog
            </Link>

            <button onClick={logout} className="block px-4 py-2 hover:bg-gray-100 rounded-lg w-full text-left">
                Logout
            </button>
        </div>
    )

}