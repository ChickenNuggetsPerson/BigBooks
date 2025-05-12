'use client'

import { useEffect, useState } from "react"
import SelectInput from "../Forms/SelectInput"
import getOrgList from "@/actions/organization/getOrgList"
import { useChangeSelectedOrg } from "../Organization/changeSelectedOrg"



export function UserOrganizationSelect() {
    // TODO: Find organization based on what they are applied to? 

    const changeSelectedOrg = useChangeSelectedOrg()
    const [options, setOptions] = useState([] as { id: string, label: string }[])

    useEffect(() => {

        async function load() {

            const orgs = await getOrgList(false)
            const options = orgs.map((org) => {
                return { id: org.uuid, label: org.name }
            })

            setOptions([{ id: " ", label: "- Select Organization-" }, ...options])
        }

        load()

    }, [])



    function changePage(val: string) {
        const name = options.find((v) => v.id == val)?.label ?? ""

        if (val == " " || name == "") { return }
        changeSelectedOrg(val, name)
    }

    return (
        <div>

            {options.length != 0 && <SelectInput id={""} label={""} val={" "} disabled={false} options={options} changeCB={changePage} searchable={true} />}

        </div>
    )
}