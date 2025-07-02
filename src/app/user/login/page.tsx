import { getSession } from "@/auth/auth";
import AnimateChildren from "@/components/Decorative/AnimateChildren";
import LoginForm from "@/components/auth/LoginForm";
import { redirect } from "next/navigation";



export const dynamic = 'force-dynamic';

export default async function LoginPage() {

    const session = await getSession()
    if (session) {
        redirect("/")
    }

    return (
        <div className="flex flex-row justify-center">
            <div className="h-screen flex flex-col justify-center pb-10">
                <AnimateChildren x={0} y={-20}>
                    <LoginForm />
                </AnimateChildren>
            </div>
        </div>

    );
}