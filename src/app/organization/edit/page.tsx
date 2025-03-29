'use client'

import { useCompany } from "@/app/CompanyContext"
import OrganizationForm from "@/components/Organization/OrganizationForm"



export default function EditPage() {

    const { context } = useCompany()

    return (
        <div>
            <OrganizationForm orgUUID={context?.companyUUID ?? "asdf"} />
        </div>
    )
}