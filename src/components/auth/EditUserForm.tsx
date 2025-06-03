'use client'


import TextInput from "../Forms/TextInput";
import { useEffect, useState } from "react";
import getUser from "@/actions/user/getUser";
import editUser from "@/actions/user/editUser";
import Link from "next/link";
import { Prisma } from "@/database/generated/prisma";



interface EditUserFormProps {
    userID: string
}
export default function EditUserForm({ userID } : EditUserFormProps) {

    const [userProps, setUserProps] = useState({} as Prisma.UserGetPayload<{ include: { memberships: true } }>)

    useEffect(() => {
        async function load() {
            const props = await getUser(userID ?? "")
            if (props) {
                setUserProps(props)
            }
        }

        load()
    }, [userID])


    return (
        <form action={editUser} className="card w-md">

            <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 ">{userProps.uuid == "" ? "Create User:" : "Edit User:"}</h5>

            <TextInput id={"firstName"} label={"First Name"} val={userProps.firstName} placeholder={""} disabled={false} />
            <TextInput id={"lastName"} label={"Last Name"} val={userProps.lastName} placeholder={""} disabled={false} />
            <TextInput id={"email"} label={"Email"} val={userProps.email} placeholder={""} disabled={false} />

            <TextInput id={"uuid"} label={"UUID"} val={userProps.uuid} placeholder={""} disabled={true} />

            <div className="flex flex-row justify-between">

                <Link href={"/user"} className="accent-button">
                    Cancel
                </Link>

                <button type="submit" className="primary-button">Submit</button>

            </div>
        </form>
    );
}