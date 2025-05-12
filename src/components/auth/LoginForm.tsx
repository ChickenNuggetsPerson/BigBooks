'use client'

import Login from "@/auth/actions/Login";
import { useActionState } from "react";
import TextInput from "../Forms/TextInput";
import Logo from "../Decorative/Logo";
import Link from "next/link";




export default function LoginForm() {
    const [state, formAction] = useActionState(Login, { error: null, loggedIn: false });

    return (

        <div>
            <div className="flex flex-row justify-between">

                <Link href={"/"}>
                    ← Back
                </Link>

                <div className="font-bold text-red-500">
                    {(state?.error ?? "")}
                </div>

            </div>

            <div className="h-px w-full bg-accent mb-5"></div>

            <form action={formAction} className="card w-sm">

                <Logo width={200} rounded={true} />

                <div className="h-5"></div>

                <TextInput id={"username"} label={"Username:"} val={""} placeholder={""} disabled={false} />
                <TextInput id={"password"} label={"Password:"} val={""} placeholder={""} disabled={false} />

                <button type="submit" className="primary-button">Login</button>
            </form>

        </div>
    );
}