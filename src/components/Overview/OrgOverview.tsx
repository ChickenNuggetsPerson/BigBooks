'use client'

import getOrgDetails from "@/actions/organization/getOrgDetails";
import { useEffect, useState } from "react";
import AnimateChildren from "../AnimateChildren";
import { getEmptyDispOrganization } from "@/database/models/DisplayModels";



interface OverviewProps {
    uuid: string
}

export default function OrgOverview({ uuid }: OverviewProps) {

    const loadingDetails = getEmptyDispOrganization("Loading")
    const [state, setState] = useState(loadingDetails)

    useEffect(() => {

        async function fetch() {
            const details = await getOrgDetails(uuid)
            setState(details)
        }
        fetch()
    }, [uuid])

    return (
        <AnimateChildren x={-200} y={0}>
            <a className="card mb-5 max-w-md">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{state.name}</h5>
                {state.isDeleted && <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-50">{"[ Deactivated ]"}</h5> }
                <p className="font-normal text-gray-700 dark:text-gray-400">{state.address}</p>

                {(state.notes != "") &&
                    <div>
                        <div className="bg-zinc-200 dark:bg-zinc-700 h-2 my-5 rounded-sm" />

                        <p className="font-normal text-gray-700 dark:text-gray-400">{state.notes}</p>
                    </div>
                }
            </a>



            <a className="card max-w-sm">

                <h5 className="mb-2 text-2xl font-normal text-gray-700 dark:text-gray-400">Organization Statistics:</h5>


                <h5 className="font-normal text-gray-700 dark:text-gray-400">Total Employees: {state.employeeCount}</h5>
            </a>
        </AnimateChildren>
    )
}