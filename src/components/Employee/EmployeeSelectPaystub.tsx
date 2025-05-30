'use client'

import { useEffect, useState } from "react";
import SelectInput from "../Forms/SelectInput";
import getEmployeePaystubs from "@/actions/paystub/getEmployeePaystubs";
import { useRouter } from "next/navigation";



export function EmployeeSelectPaystub({ empUUID }: { empUUID: string }) {

    const router = useRouter()

    const [options, setOptions] = useState([] as { id: string, label: string }[])
    useEffect(() => {

        async function load() {
            const stubs = await getEmployeePaystubs(empUUID)

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
        router.replace(`/organization/employee/${empUUID}/paystub/${val}`)
    }

    return (
        <>
            {options.length != 0 &&
                <SelectInput id={""} label={"View Paystub"} val={""} disabled={false} options={options} changeCB={onSelect} searchable={true} />
            }
        </>
    )
}