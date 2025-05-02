'use client'

import submitOrganizationForm from "@/actions/organization/submitOrganizationForm"
import TextInput from "../Forms/TextInput"
import { getEmptyDispOrganization } from "@/database/models/DisplayModels"
import { useEffect, useState } from "react"
import getOrgDetails from "@/actions/organization/getOrgDetails"
import Link from "next/link"
import deactivateOrganization from "@/actions/organization/deactivateOrg"
import { useCompany } from "@/app/CompanyContext"
import { useRouter } from "next/navigation"





interface OrganizationFormProps { orgUUID: string }
export default function OrganizationForm({ orgUUID } : OrganizationFormProps) {

        const { setContext } = useCompany()
        const router = useRouter()

        const [props, setProps] = useState(getEmptyDispOrganization())
        const [error, setError] = useState(false)
    
        const newOrganization = (orgUUID == "new")
    
        useEffect(() => {
            async function load() {
    
                if (!newOrganization) {
                    const organization = await getOrgDetails(orgUUID)
                    if (organization) { // Employee exists
                        setProps(organization)  
                    } else {
                        setError(true)
                    }
                }
            }
            load()
        }, [orgUUID, newOrganization])
    
    
        if (error) {
            return (
                <div>
                    Error Fetching Employee
                </div>
            )
        }
    
        function cancelURL(isNew: boolean) {
            const url = "/organization/overview"
            if (isNew) {
                return "/"
            }

            return url
        }
    
    // const updateOrganization = .bind(null, newOrganization)


    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        
        async function submit() {
            try {
                const result = await submitOrganizationForm(newOrganization, new FormData(e.currentTarget));
                setContext({ companyUUID: result.companyUUID, companyName: result.companyName });

                router.push("/organization")

            } catch(err) {
                alert(err)
            }
        }
        submit()

    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto card mb-5" >

            <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 ">{newOrganization ? "Create Organization:" : "Edit Organization:"}</h5>


            <TextInput id={"name"} label={"Name:"} val={props.name} placeholder={""} disabled={false} />
            <TextInput id={"address"} label={"Address"} val={props.address} placeholder={""} disabled={false} />
            <TextInput id={"notes"} label={"Notes"} val={props.notes} placeholder={""} disabled={false} />
            <TextInput id={"uuid"} label={"Org UUID"} val={props.uuid} placeholder={""} disabled={true} />

            <button type="submit" className="primary-button">Submit</button>
            <Link href={cancelURL(newOrganization)} className="mx-5 secondary-button">
                Cancel
            </Link>

            {!newOrganization && <button onClick={() => { deactivateOrganization(props.uuid, !props.isDeleted) }} className="mx-5 accent-button">{props.isDeleted ? "Reactivate" : "Deactivate"}</button>}
        </form>
    )
}