import { getUserFromSession } from "@/auth/auth"
import Link from "next/link"


export default async function InteractiveUserIcon() {

    const user = await getUserFromSession()

    if (!user) {
        return (<p>Error...</p>)
    }

    return (
        <div className="mt-1">
            <Link href={"/user"} className="font-black text-xl">
                {user.firstName + " " + user.lastName}
            </Link>
        </div>
    )
}