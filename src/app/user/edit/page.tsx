import { getSession } from "@/auth/auth";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import EditUserForm from "@/components/auth/EditUserForm";
import { redirect } from "next/navigation";



export const dynamic = 'force-dynamic';

export default async function EditUserPage() {
    const session = await getSession()

    if (!session) {
        redirect("/user/login")
    }

    return (
        <AnimateChildren x={0} y={-20}>
            <EditUserForm userID={session.userID} />
        </AnimateChildren>
    )
}