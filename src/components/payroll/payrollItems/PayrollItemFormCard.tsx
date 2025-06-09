'use client'

import deletePayrollItem from "@/actions/paystub/payrollItems/deletePayrollItem"
import upsertPayrollItems from "@/actions/paystub/payrollItems/upsertPayrollItems"
import CollapsibleDiv from "@/components/Decorative/CollapsibleDiv"
import LargeTextInput from "@/components/Forms/LargeTextInput"
import NumberInput from "@/components/Forms/NumberInput"
import SelectInput from "@/components/Forms/SelectInput"
import TextInput from "@/components/Forms/TextInput"
import { AbsMaxPeriodTypes, PayrollItem, PayStubItemType } from "@/database/generated/prisma/"
import { Decimal } from "@prisma/client/runtime/index-browser.js"
import { Save, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"





export default function PayrollItemFormCard({ item }: { item: PayrollItem }) {

    const [itemState, setItemState] = useState(item)
    const [edited, setEdited] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setEdited(JSON.stringify(itemState) !== JSON.stringify(item))
    }, [itemState, item])


    const typeOptions = Object.values(PayStubItemType).map((v) => { return { id: v, label: v } })
    const limitOptions = Object.values(AbsMaxPeriodTypes).map((v) => { return { id: v, label: v } })

    function saved() {
        toast.promise(
            async () => {
                await upsertPayrollItems(itemState)
                router.refresh()
            },
            {
                loading: "Saving",
                success: `Saved ${itemState.name}`,
                error: "Error Saving Item"
            }
        )
    }

    function deleted() {
        toast.promise(
            async () => {
                await deletePayrollItem(itemState.uuid)
                router.refresh()
            },
            {
                loading: "Deleting",
                success: `Deleted ${itemState.name}`,
                error: "Error Deleting Item"
            }
        )
    }


    return (
        <CollapsibleDiv title={<p className="select-none font-semibold text-lg">{item.name}</p>} className="">

            <div className="flex flex-row gap-x-4 pt-4">
                <div className="pt-5 w-full">
                    <TextInput label="Name" val={itemState.name} onChange={(val) => { setItemState({ ...itemState, name: val }) }} />
                </div>
                <SelectInput label="Type" val={itemState.type} options={typeOptions} changeCB={(val) => { setItemState({ ...itemState, type: val as PayStubItemType }) }} />
            </div>

            <div className="flex flex-row justify-between gap-4">
                <NumberInput label="Percent" val={Number(itemState.percent ?? 0) * 100} changeCB={(val) => { if (val == 0) { setItemState({ ...itemState, percent: null }) } else { setItemState({ ...itemState, percent: new Decimal(val / 100) }) } }} />
                <NumberInput label="Flat Ammount" val={Number(itemState.amount ?? 0)} changeCB={(val) => { setItemState({ ...itemState, amount: new Decimal(val) }) }} />
            </div>

            <div className="flex flex-row gap-x-4">
                <SelectInput label="Limit Period" val={itemState.absMaxPeriod} options={limitOptions} changeCB={(val) => { setItemState({ ...itemState, absMaxPeriod: val as AbsMaxPeriodTypes }) }} />
                <div className="pt-5 w-full">
                    <NumberInput label="Limit For Period" val={Number(itemState.absMax ?? 0)} changeCB={(val) => { setItemState({ ...itemState, absMax: new Decimal(Math.abs(val)) }) }} />
                </div>
            </div>

            <div className="flex flex-row justify-between">
                <div className="w-60">
                    <LargeTextInput label="Description" val={itemState.description ?? ""} onChange={(val) => { if (val.trim() == "") { setItemState({ ...itemState, description: null }) } else { setItemState({ ...itemState, description: val }) } }} />
                </div>
                <div className="flex flex-row gap-2 justify-center align-center h-full">
                    {edited && <Save size={30} onClick={saved} className="bg-gray-100 rounded-md p-1 hover:bg-gray-200" />}
                    {itemState.uuid !== "" && <Trash2 size={30} onClick={deleted} className="bg-gray-100 rounded-md p-1 hover:bg-gray-200" />}
                </div>
            </div>

        </CollapsibleDiv>
    )

}