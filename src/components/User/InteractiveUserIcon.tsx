import { getUserFromSession } from "@/auth/auth"
import getOrgRole from "@/auth/roles/getOrgRole"
import Link from "next/link"


export default async function InteractiveUserIcon() {

    const user = await getUserFromSession()
    const role = await getOrgRole()

    if (!user) {
        return (<p>Error...</p>)
    }

    return (
        <div className="mt-1 flex flex-row">

            <div className="p-1 rounded-md text-white font-bold mr-2 max-h-8" style={{background: role.color}}>
                {role.type}
            </div>

            <Link href={"/user"} className="font-black text-xl ">
                {user.firstName + " " + user.lastName}
            </Link>
        </div>
    )
}