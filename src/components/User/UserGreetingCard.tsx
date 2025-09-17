
import { logout } from "@/auth/actions/Logout"
import { getUserFromSession } from "@/auth/auth"
import Link from "next/link"
import LoadingBlock from "../Decorative/LoadingBlock"


export function UserGreetingCard_Loading() {

    return (
        <div className="card w-80 h-fit ">

            <div className="mb-1 text-2xl font-semibold text-gray-700 select-none flex flex-row">
                <p>Hello </p>
                <LoadingBlock w={"30"} h={8} className="w-30"/>
                <p>!</p>
            </div>

            <div className="h-px bg-accent mb-3"></div>

            <LoadingBlock h={8} w={"full"} className="my-2"/>
            <LoadingBlock h={8} w={"full"} className="my-2"/>
            <LoadingBlock h={8} w={"full"} className="my-2"/>
        </div>
    )

}

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

            <Link className="block px-4 py-2 hover:bg-gray-100/80 rounded-lg" href={"/user"} >
                View Profile
            </Link>

            <Link className="block px-4 py-2 hover:bg-gray-100/80 rounded-lg" href={"/info/changelog"} >
                Changelog
            </Link>

            <button onClick={logout} className="block px-4 py-2 hover:bg-gray-100/80 rounded-lg w-full text-left">
                Logout
            </button>
        </div>
    )

}