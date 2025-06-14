'use client'

import submitOrganizationForm from "@/actions/organization/submitOrganizationForm"
import TextInput from "../Forms/TextInput"
import { useEffect, useState } from "react"
import getOrgDetails from "@/actions/organization/getOrgDetails"
import Link from "next/link"
import deactivateOrganization from "@/actions/organization/deactivateOrg"
import { useCompany } from "@/app/CompanyContext"
import { useRouter } from "next/navigation"
import LargeTextInput from "../Forms/LargeTextInput"
import Loading from "@/app/Loading"
import { Organization } from "@/database/generated/prisma"
import toast from "react-hot-toast"


interface OrganizationFormProps { orgUUID: string }
export default function OrganizationForm({ orgUUID }: OrganizationFormProps) {

    const { setContext } = useCompany()
    const router = useRouter()

    const [props, setProps] = useState({} as Organization)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const newOrganization = (orgUUID == "new")

    useEffect(() => {
        setLoading(true)
        async function load() {

            if (!newOrganization) {
                const organization = await getOrgDetails(orgUUID)
                if (organization) {
                    setProps(organization)
                } else {
                    setError(true)
                }
            }
            setLoading(false)
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

    if (loading) {
        return (
            <Loading vCenter hCenter />
        )
    }

    function cancelURL(isNew: boolean) {
        const url = "/organization/overview"
        if (isNew) {
            return "/user"
        }

        return url
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        toast.promise(
            async () => {
                const result = await submitOrganizationForm(newOrganization, new FormData(e.currentTarget));
                setContext({ companyUUID: result.companyUUID, companyName: result.companyName });

                if (newOrganization) {
                    router.push("/user")
                } else {
                    router.push("/organization")
                }
            },
            {
                loading: "Saving Organization Details",
                success: "Details Saved",
                error: "Error Saving Organization Details"
            }
        )
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto card mb-5" >

            <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 ">{newOrganization ? "Create Organization:" : "Edit Organization:"}</h5>


            <TextInput id={"name"} label={"Name:"} val={props.name} />
            <LargeTextInput id={"address"} label={"Address"} val={props.address} />
            <LargeTextInput id={"notes"} label={"Notes"} val={props.notes} />

            <TextInput id={"uuid"} label={"Org UUID"} val={props.uuid} disabled={true} />

            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                    <button type="submit" className="primary-button">Submit</button>
                    <Link href={cancelURL(newOrganization)} className="secondary-button">
                        Cancel
                    </Link>
                </div>

                {!newOrganization && <button onClick={() => { deactivateOrganization(props.uuid, !props.isDeleted) }} className="mx-5 accent-button">{props.isDeleted ? "Reactivate" : "Deactivate"}</button>}

            </div>
        </form>
    )
}