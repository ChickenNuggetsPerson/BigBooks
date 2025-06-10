'use client'

import { useCompany } from "@/app/CompanyContext"
import { useState } from "react"
import AnimateChildren from "../Decorative/AnimateChildren"
import OrganizationSelectForm from "../Organization/OrganizationSelectForm"
import { ChevronDown } from "lucide-react"




export default function HeaderOrgOptions() {

    const { context } = useCompany()
    const [menuOpen, setMenuOpen] = useState(false)
    const [selectOrg, setSelectOrg] = useState(false)

    const onMouseEnter = () => setMenuOpen(true);
    const onMouseLeave = () => setMenuOpen(false);

    return (
        <>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="select-none">
                <button className="text-xl font-semibold tracking-tight text-gray-900 inline-flex hover:opacity-75 smallCard mt-2 w-full justify-between" style={{ paddingRight: 10, paddingLeft: 10 }}>
                    {context?.companyName}
                    <ChevronDown className="pt-2"/>
                </button>


                {menuOpen && <AnimateChildren x={0} y={-10}>
                    <div className={"smallCard w-44 translate-y-2"}>

                        <ul className="text-sm text-gray-700 " aria-labelledby="dropdownHoverButton">

                            <li>
                                <a onClick={() => { setSelectOrg(!selectOrg) }} className="block px-4 py-2 rounded-lg hover:bg-gray-100" >
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