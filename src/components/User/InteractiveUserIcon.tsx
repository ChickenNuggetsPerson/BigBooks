import { getUserFromSession } from "@/auth/auth"
import getOrgRole from "@/auth/roles/getOrgRole"
import Link from "next/link"
import { UserRoleIcon } from "./UserRoleIcon"


export default async function InteractiveUserIcon() {

    const user = await getUserFromSession()
    const role = await getOrgRole()

    if (!user) {
        return (<p>Error...</p>)
    }

    return (
        <div className="mt-1 flex flex-row">

            <UserRoleIcon role={role} />

            <Link href={"/user"} className="font-black text-xl ">
                {user.firstName + " " + user.lastName}
            </Link>
        </div>
    )
}