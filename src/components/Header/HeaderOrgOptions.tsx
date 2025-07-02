'use client'

import { useCompany } from "@/app/CompanyContext"
import { ChevronDown } from "lucide-react"
import { useModalManager } from "../Decorative/Modal/ModalContext"
import OrganizationList from "../Organization/OrganizationList"




export default function HeaderOrgOptions() {

    const { context } = useCompany()
    const { addModal } = useModalManager()

    function clicked() {
        addModal({
            title: "",
            required: false,
            background: false,
            component: (push, pop) => (<OrganizationList refreshCB={pop}/>)
        })
    }

    return (
        <div className="select-none">
            <button onClick={clicked} className="text-xl font-semibold tracking-tight text-gray-900 inline-flex hover:opacity-75 smallCard mt-2 w-full justify-between" style={{ paddingRight: 10, paddingLeft: 10 }}>
                {context?.companyName}
                <ChevronDown className="pt-2" />
            </button>
        </div>
    )
}