import { logout } from "@/auth/actions/Logout";
import { getSession, getUserFromSession } from "@/auth/auth";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import { redirect } from "next/navigation";
import EditableDiv from "@/components/Decorative/EditableDiv";
import Link from "next/link";
import OrganizationList from "@/components/Organization/OrganizationList";


export const dynamic = 'force-dynamic';




export default async function UserPage() {

    const session = await getSession()
    const user = await getUserFromSession()

    if (!user) {
        redirect("/user/login")
    }

    return (
        <>
            <AnimateChildren y={-20} className="pb-20 flex flex-row gap-20">
                <EditableDiv className="card w-100 h-55" url={session?.isAdmin ? "" : "/user/edit"}>

                    <p className="text-xl font-semibold">{user.firstName + " " + user.lastName}</p>

                    <div className="h-px bg-accent mb-2"></div>

                    <p className="font-mono">{"Username: " + user.username}</p>
                    <p className="font-mono">{"Email: " + user.email}</p>

                </EditableDiv>

                <OrganizationList />

            </AnimateChildren>


            <div className="flex flex-col absolute bottom-5 left-5">
                <button className="accent-button mt-5" onClick={logout}>Logout</button>

                {session?.isAdmin &&
                    <Link href={"/user/users"} className="secondary-button mt-2">
                        Employees
                    </Link>
                }
            </div>
        </>

    )
}


