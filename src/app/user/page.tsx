import { logout } from "@/auth/actions/Logout";
import { getSession, getUserFromSession } from "@/auth/auth";
import { redirect } from "next/navigation";
import EditableDiv from "@/components/Decorative/EditableDiv";
import Link from "next/link";
import { CardProp } from "@/components/Forms/CardProp";
import OrganizationList from "@/components/Organization/OrganizationList";
import CollapsibleDiv from "@/components/Decorative/CollapsibleDiv";


export const dynamic = 'force-dynamic';




export default async function UserPage() {

    const session = await getSession()
    const user = await getUserFromSession()

    if (!user) {
        redirect("/user/login")
    }

    return (
        <div className="py-5 px-10">

            <div className="flex flex-row justify-between w-full gap-10">

                {/* Left Side */}
                <div className="flex flex-col gap-4 smallCard h-fit" style={{ padding: 10 }}>
                    <EditableDiv className="card w-100 relative" enabled={!session?.isAdmin} url={"/user/edit"}>

                        <div className="absolute bottom-0 right-0">
                            <button className="smallCard text-white/90 font-bold cursor-pointer" style={{ paddingLeft: 10, paddingRight: 10, borderRadius: 12, background: "var(--color-primary)" }} onClick={logout}>Logout</button>
                        </div>

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
                        <div className="flex flex-row justify-between">

                            <Link href={"/user/users"} className="w-4/9">
                                <div className="w-full accent-button text-center">All Users</div>
                            </Link>

                            <Link href={"/user/newOrganization"} className="w-4/9">
                                <div className="w-full primary-button text-center">New Organization</div>
                            </Link>

                        </div>
                    }


                </div>

                {/* Right Side */}
                <div>
                    <OrganizationList showBackground />
                </div>
            </div>
        </div>
    )
}


