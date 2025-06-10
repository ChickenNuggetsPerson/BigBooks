'use client'

import { useEffect, useState } from "react";
import SelectInput from "../Forms/SelectInput";
import { useRouter } from "next/navigation";
import getEmployeePaystubs from "@/actions/paystub/getEmployeePaystubs";
import { deserializeData } from "@/utils/serialization";
import { CardProp } from "../Forms/CardProp";
import { Divider } from "../Forms/Divider";



export function EmployeeSelectPaystub({ empUUID }: { empUUID: string }) {

    const router = useRouter()

    const [options, setOptions] = useState([] as { id: string, label: string }[])
    useEffect(() => {

        async function load() {
            const stubs = deserializeData(await getEmployeePaystubs(empUUID))

            const opt = [] as { id: string, label: string }[]

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
        <div className="w-xs h-fit">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Paystubs</h5>
            <Divider />

            <CardProp label="Total Paystubs" val={String(options.length)}/>

            <div className="h-2"></div>

            <SelectInput label={"View Paystub"} options={options} changeCB={onSelect} searchable={true} />
        </div>
    )
}