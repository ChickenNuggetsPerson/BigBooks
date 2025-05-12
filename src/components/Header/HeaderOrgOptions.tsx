'use client'

import { useCompany } from "@/app/CompanyContext"
import { useState } from "react"
import AnimateChildren from "../AnimateChildren"
import Link from "next/link"
import OrganizationSelectForm from "../Organization/OrganizationSelectForm"




export default function HeaderOrgOptions() {

    const { context } = useCompany()
    const [menuOpen, setMenuOpen] = useState(false)
    const [selectOrg, setSelectOrg] = useState(false)

    const onMouseEnter = () => setMenuOpen(true);
    const onMouseLeave = () => setMenuOpen(false);

    return (
        <>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <button className="mt-2 text-xl font-bold tracking-tight text-gray-900 inline-flex hover:opacity-75">
                    {context?.companyName}
                    <svg className="w-2.5 h-2.5 ms-3 mt-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>


                {menuOpen && <AnimateChildren x={0} y={-10}>
                    <div className={"bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44"}>

                        <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownHoverButton">
                            <li>
                                <Link className="block px-4 py-2 hover:bg-gray-100 " href={"/organization/edit"}>
                                    Edit Organization
                                </Link>
                            </li>


                            <li>
                                <a onClick={() => { setSelectOrg(!selectOrg) }} className="block px-4 py-2 hover:bg-gray-100" >
                                    Switch Organization
                                </a>
                            </li>

                        </ul>
                    </div>
                </AnimateChildren>}
            </div>

            {selectOrg && <OrganizationSelectForm dismiss={() => { setSelectOrg(false) }} />}
        </>
    )
}