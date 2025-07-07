import { logout } from "@/auth/actions/Logout";
import { getSession, getUserFromSession } from "@/auth/auth";
import { redirect } from "next/navigation";
import CollapsibleDiv from "../Decorative/CollapsibleDiv";
import EditableDiv from "../Decorative/EditableDiv";
import { CardProp } from "../Forms/CardProp";
import Link from "next/link";
import LoadingBlock from "../Decorative/LoadingBlock";



export function UserPageColumn_Loading() {

    return (
        <div className="flex flex-col gap-4 smallCard h-fit mx-auto" style={{ padding: 10 }}>

            <div className="card w-100">

                <LoadingBlock w={30} h={6} className="mb-2" />

                <div className="h-px bg-accent mb-2"></div>

                <CardProp label="Username:" loading />
                <CardProp label="Email:" loading />

            </div>


        </div>
    )
}

export default async function UserPageColumn() {

    const session = await getSession()
    const user = await getUserFromSession()

    if (!user) {
        redirect("/user/login")
    }

    return (
        <div className="flex flex-col gap-4 smallCard h-fit mx-auto" style={{ padding: 10 }}>
            <EditableDiv className="card w-100" enabled={!session?.isAdmin} url={"/user/edit"}>

                <p className="text-xl font-semibold">{user.firstName + " " + user.lastName}</p>

                <div className="h-px bg-accent mb-2"></div>

                <CardProp label="Username:" val={user.username} />
                <CardProp label="Email:" val={user.email} />

            </EditableDiv>

            {
                !session?.isAdmin &&
                <CollapsibleDiv className="card" title={<h5 className="mb-2 text-2xl font-normal text-gray-700 select-none">Create Organization:</h5>}>
                    <div className="h-2"></div>
                    <CardProp label="Allocated Organizations:" val={String(user.allocatedOrganizations)} />

                    {(user.allocatedOrganizations !== 0) &&
                        <Link href={"/user/newOrganization"}>
                            <div className="w-full primary-button text-center mt-2">New Organization</div>
                        </Link>
                    }
                </CollapsibleDiv>
            }

            {
                session?.isAdmin &&
                <Link href={"/user/taxes"}>
                    <div className="w-full primary-button text-center mt-2">System Taxes</div>
                </Link>
            }

            {
                session?.isAdmin &&
                <div className="flex flex-row justify-between">

                    <Link href={"/user/users"} className="w-4/9">
                        <div className="w-full danger-button text-center">All Users</div>
                    </Link>

                    <Link href={"/user/newOrganization"} className="w-4/9">
                        <div className="w-full secondary-button text-center">New Organization</div>
                    </Link>

                </div>
            }

            <button className="accent-button" onClick={logout}>Logout</button>


        </div>
    )
}