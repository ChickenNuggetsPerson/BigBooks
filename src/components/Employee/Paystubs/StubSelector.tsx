'use client'

import SelectInput from "@/components/Forms/SelectInput";
import { PayStub } from "@/database/generated/prisma";
import { deserializeData, SerializationResult } from "@/utils/serialization";
import { useRouter } from "next/navigation";





export enum StubSelectOption {
    View = "View",
    Edit = "Edit"
}

export default function StubSelector({ paystubs, action }: { paystubs: SerializationResult<PayStub[]>, action: string }) {

    console.log(action)

    const router = useRouter()

    function onSelect(val: string) {
        if (action == StubSelectOption.View) {
            router.replace(`/organization/paystubs/stub/${val}`)
        }

        if (action == StubSelectOption.Edit) {
            router.replace(`/organization/paystubs/stub/${val}/edit`)
        }
    }

    function getLabel() {
        if (action == StubSelectOption.View) {
            return "Submitted Paysubs:"
        }

        if (action == StubSelectOption.Edit) {
            return "Active Paysubs:"
        }
    }

    const stubs = deserializeData(paystubs)

    stubs.sort((s1, s2) => s2.payDate.getTime() - s1.payDate.getTime())
    const options = stubs.map(stub => {
        return { id: stub.uuid, label: `Paydate: ${stub.payDate.toLocaleDateString()}` }
    })

    return (
        <SelectInput label={getLabel()} options={options} changeCB={onSelect} searchable={true} />
    )
}