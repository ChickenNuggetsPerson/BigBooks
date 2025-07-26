'use client'


import TextInput from "../Forms/TextInput";
import { useEffect, useState } from "react";
import getUser from "@/actions/user/getUser";
import editUser from "@/actions/user/editUser";
import Link from "next/link";
import { Prisma } from "@/database/generated/prisma";
import Loading from "@/app/Loading";



interface EditUserFormProps {
    userID: string
}
export default function EditUserForm({ userID }: EditUserFormProps) {

    const [userProps, setUserProps] = useState({} as Prisma.UserGetPayload<{ include: { memberships: true } }>)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        async function load() {
            const props = await getUser(userID ?? "")
            if (props) {
                setUserProps(props)
            }
            setLoading(false)
        }

        load()
    }, [userID])


    if (loading) {
        return (
            <div className="mx-auto card w-fit">
                <Loading hCenter vCenter />
            </div>
        )
    }

    return (
        <form action={editUser} className="card w-md">

            <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 ">{userProps.uuid == "" ? "Create User:" : "Edit User:"}</h5>

            <TextInput id={"firstName"} label={"First Name"} val={userProps.firstName} placeholder={""} disabled={false} />
            <TextInput id={"lastName"} label={"Last Name"} val={userProps.lastName} placeholder={""} disabled={false} />
            <TextInput id={"email"} label={"Email"} val={userProps.email} placeholder={""} disabled={false} />

            <div className="flex flex-row justify-between">

                <Link href={"/user"} className="w-4/9">
                    <div className="w-full accent-button text-center">Cancel</div>
                </Link>

                <button type="submit" className="primary-button w-4/9">Submit</button>

            </div>
        </form>
    );
}