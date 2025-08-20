import { getSession } from "@/auth/auth"
import AnimateChildren from "@/components/Decorative/AnimateChildren"
import OrganizationForm from "@/components/Organization/OrganizationForm"
import { redirect } from "next/navigation"



export default async function EditPage() {

    const session = await getSession()
    if (!session) {
        redirect("/user/login")
    }

    return (
        <AnimateChildren x={0} y={-20}>
            <OrganizationForm orgUUID={session.orgUUID} />
        </AnimateChildren>
    )
}