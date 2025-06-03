import { getSession, getUserFromSession } from "@/auth/auth";
import OrganizationForm from "@/components/Organization/OrganizationForm";
import { redirect } from "next/navigation";




export default async function NewOrganizationPage() {

    const session = await getSession()
    const user = await getUserFromSession()
    
    if (!session || !user) {
        redirect("/user/login")
    }

    if (!session.isAdmin) {
        if (user.allocatedOrganizations <= 0) {
            redirect("/user")
        }
    }

    return (
        <div className="w-200 overflow-clip pt-30">
            <div className="text-white font-bold text-center mb-2">
                {`You are allocated ${user.allocatedOrganizations} more organization${user.allocatedOrganizations > 1 ? "s" : ""}`}
            </div>
            <OrganizationForm orgUUID={"new"} />
        </div>
    )
}