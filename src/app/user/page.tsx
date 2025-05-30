import { logout } from "@/auth/actions/Logout";
import { getSession, getUserFromSession } from "@/auth/auth";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import { redirect } from "next/navigation";
import EditableDiv from "@/components/Decorative/EditableDiv";
import { UserOrganizationSelect } from "@/components/User/UserOrganizationSelect";
import Link from "next/link";


export const dynamic = 'force-dynamic';




export default async function UserPage() {

    const session = await getSession()
    const user = await getUserFromSession()

    if (!user) {
        redirect("/user/login")
    }

    return (
        <AnimateChildren x={0} y={-20}>
            <EditableDiv className="card w-100 h-50" url={session?.isAdmin ? "" : "/user/edit"}>

                <p className="text-xl font-semibold">{user.firstName + " " + user.lastName}</p>

                <div className="h-px bg-accent mb-2"></div>

                <p className="font-mono">{"Username: " + user.username}</p>
                <p className="font-mono">{"Email: " + user.email}</p>

                <div className="h-3"></div>

                <UserOrganizationSelect />

            </EditableDiv>

            <div className="flex flex-row justify-between">
                <button className="accent-button mt-5" onClick={logout}>Logout</button>

                {session?.isAdmin &&
                    <Link href={"/user/users"} className="primary-button mt-5">
                        Employees
                    </Link>
                }
            </div>

        </AnimateChildren>
    )
}


