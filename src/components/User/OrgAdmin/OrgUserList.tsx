'use client'

import { useCompany } from "@/app/CompanyContext";
import { DispUser } from "@/database/models/DisplayModels";
import OrgUserCard from "./OrgUserCard";
import TextInput from "@/components/Forms/TextInput";
import { useEffect, useState } from "react";




export function OrgUserList({
    users
}: { users: DispUser[] }) {

    const { context } = useCompany()
    const [search, setSearch] = useState("")
    const [dispUsers, setDispUsers] = useState([] as DispUser[])

    useEffect(() => {

        const term = search.toLowerCase()
        const filteredList = users.filter((user) => {
            return user.firstName.toLowerCase().includes(term) || user.lastName.toLowerCase().includes(term)
        })

        setDispUsers(filteredList)
    }, [users, search])

    return (
        <div className="max-w-sm card">
            <div className="font-light text-xl">
                <p>Users Associated With</p>
                <p className="font-mono font-bold">{context?.companyName}</p>
            </div>

            <div className="bg-accent h-px mb-5"></div>

            <TextInput label="Search:" val={search} onChange={(val) => setSearch(val)} />

            <div className="">
                {dispUsers.map((user) => (
                    <OrgUserCard user={user} key={user.uuid} />
                ))}
            </div>
        </div>
    )
}