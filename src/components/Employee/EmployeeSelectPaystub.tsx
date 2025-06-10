'use client'

import { useEffect, useState } from "react";
import SelectInput from "../Forms/SelectInput";
import { useRouter } from "next/navigation";
import getEmployeePaystubs from "@/actions/paystub/getEmployeePaystubs";
import { deserializeData } from "@/utils/serialization";



export function EmployeeSelectPaystub({ empUUID }: { empUUID: string }) {

    const router = useRouter()

    const [options, setOptions] = useState([] as { id: string, label: string }[])
    useEffect(() => {

        async function load() {
            const stubs = deserializeData( await getEmployeePaystubs(empUUID))

            const opt = [] as { id: string, label: string}[]

            stubs.forEach((stub) => {
                opt.push({ id: stub.uuid, label: `Ending In: ${stub.periodEnd.toLocaleDateString()}` })
            })

            setOptions(opt)
        }
        load()

    }, [empUUID])

    
    function onSelect(val: string) {        
        if (val == "select") { return }
        router.replace(`/organization/paystubs/view/${val}`)
    }

    return (
        <div className="card">
            <SelectInput label={"View Paystub"} options={options} changeCB={onSelect} searchable={true} />
        </div>
    )
}