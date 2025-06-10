import { getUserFromSession } from "@/auth/auth"
import getOrgRole from "@/auth/roles/getOrgRole"
import Link from "next/link"
import { UserRoleIcon } from "./UserRoleIcon"
import { RoleTypes } from "@/auth/roles/Roles"


export default async function InteractiveUserIcon() {

    const user = await getUserFromSession()
    const role = await getOrgRole()

    if (!user) {
        return (<p>Error...</p>)
    }

    return (
        <div className="flex flex-row justify-between smallCard h-fit" style={{ paddingLeft: 10, paddingRight: 5 }}>

            {role.type == RoleTypes.SysAdmin &&
                <Link href={"/user"} className="font-semibold text-xl pt-1">
                    ADMIN
                </Link>
            }

            {role.type !== RoleTypes.SysAdmin &&
                <Link href={"/user"} className="font-semibold text-xl pt-1">
                    {user.firstName + " " + user.lastName}
                </Link>
            }


            <UserRoleIcon role={role} />
        </div>
    )
}