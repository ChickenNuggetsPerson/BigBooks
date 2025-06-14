import { getSession } from "@/auth/auth";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import LoginForm from "@/components/auth/LoginForm";
import { redirect } from "next/navigation";



export const dynamic = 'force-dynamic';

export default async function LoginPage() {

    const session = await getSession()
    if (session) {
        redirect("/user")
    }

    return (
        <AnimateChildren x={0} y={-20}>

            <LoginForm />

        </AnimateChildren>
    );
}