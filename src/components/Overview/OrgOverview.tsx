'use client'

import getOrgDetails from "@/actions/organization/getOrgDetails";
import { useEffect, useState } from "react";
import AnimateChildren from "../Decorative/AnimateChildren";
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
            <div className="card mb-5 max-w-md">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{state.name}</h5>
                {state.isDeleted && <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 opacity-50">{"[ Deactivated ]"}</h5>}
                <p className="font-normal text-gray-700 ">{state.address}</p>

                {(state.notes != "") &&
                    <div>
                        <div className="bg-zinc-200 h-1 my-5 rounded-sm" />

                        <p className="font-normal text-gray-700 ">{state.notes}</p>
                    </div>
                }
            </div>



            <div className="card max-w-sm">
                <h5 className="mb-2 text-2xl font-normal text-gray-700 ">Organization Statistics:</h5>

                {/* {periodToStr(generatePayperiodFromDate(state.periodsRefDate, state.periodsPerYear, new Date()))} */}
                
                <h5 className="font-normal text-gray-700">Total Employees: {state.employeeCount}</h5>
            </div>
        </AnimateChildren>
    )
}