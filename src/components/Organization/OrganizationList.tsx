'use client'


import { useEffect, useState } from "react";
import OrganizationCard from "./OrganizationCard";
import { DispOrganization } from "@/database/models/DisplayModels";
import getOrgList from "@/actions/organization/getOrgList";
import Logo from "../Decorative/Logo";





export default function OrganizationList() {

    const [orgs, setOrgs] = useState([] as DispOrganization[])
    const [filteredList, setFilteredList] = useState([] as DispOrganization[])
    const [showDeleted, setShowDeleted] = useState(false)

    useEffect(() => {
        async function load() {
            const list = await getOrgList(showDeleted)
            setOrgs(list)
            setFilteredList(list)
        }
        load()
    }, [showDeleted])

    const inputHandler = (e: { target: { value: string; }; }) => { // Filter search
        const search = e.target.value.toLowerCase();
        const f = orgs.filter((i) => {

            return i.name.toLowerCase().includes(search) || i.address.includes(search)
        })

        setFilteredList(f)
    };


    return (
        <>

            <Logo width={300} />

            <div className="flex flex-row w-full mb-10 card mt-5" >
                <div className=" relative z-0 w-full mb-5 group">
                    <input onChange={inputHandler} type="text" name={"search"} id={"search"} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={""} defaultValue={""} />
                    <label htmlFor={"search"} className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search:</label>
                </div>

                <button onClick={() => { setShowDeleted(!showDeleted) }} className={"accent-button ml-5"}>{showDeleted ? "Deactivated" : "Active"}</button>
            </div>

            <table className="table-fixed w-lg">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredList.map((org, i) => (
                        <OrganizationCard name={org.name} address={org.address} uuid={org.uuid} key={"Org-" + i} i={i} />
                    ))}
                </tbody>

            </table>
        </>
    )
}

