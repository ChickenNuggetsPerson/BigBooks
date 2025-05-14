'use client'

import { useCompany } from "@/app/CompanyContext"
import AnimateChildren from "@/components/Decorative/AnimateChildren"
import OrganizationForm from "@/components/Organization/OrganizationForm"



export default function EditPage() {

    const { context } = useCompany()

    return (
        <AnimateChildren x={0} y={-100}>
            <OrganizationForm orgUUID={context?.companyUUID ?? "asdf"} />
        </AnimateChildren>
    )
}