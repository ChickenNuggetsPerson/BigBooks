'use client'

import deletePayrollItem from "@/actions/paystub/payrollItems/deletePayrollItem"
import { PayrollItemWithCount } from "@/actions/paystub/payrollItems/getPayrollItems"
import upsertPayrollItem from "@/actions/paystub/payrollItems/upsertPayrollItem"
import ClickableDiv from "@/components/Decorative/ClickableDiv"
import { useModalManager } from "@/components/Decorative/Modal/ModalContext"
import { promptUser } from "@/components/Decorative/Modals/promptUser"
import { CardProp } from "@/components/Forms/CardProp"
import { Divider } from "@/components/Forms/Divider"
import LargeTextInput from "@/components/Forms/LargeTextInput"
import NumberInput from "@/components/Forms/NumberInput"
import SelectInput from "@/components/Forms/SelectInput"
import TextInput from "@/components/Forms/TextInput"
import { AbsMaxPeriodTypes, PayStubItemType } from "@/database/generated/prisma/"
import { deserializeData, SerializationResult, serializeData } from "@/utils/serialization"
import { Decimal } from "@prisma/client/runtime/index-browser.js"
import { Pen, Save, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"




export default function PayrollItemEditButton({ serializedData }: { serializedData: SerializationResult<PayrollItemWithCount> }) {

    const { addModal } = useModalManager()

    function clicked() {
        addModal({
            component: (push, pop) => (
                <div className="flex flex-row gap-4">
                    <PayrollItemFormCard serializedData={serializedData} closeCB={pop} />
                </div>
            ),
            background: false
        })
    }

    return (
        <ClickableDiv onClick={clicked}>
            <Pen />
        </ClickableDiv>
    )
}


function PayrollItemFormCard({ serializedData, closeCB }: { serializedData: SerializationResult<PayrollItemWithCount>, closeCB: () => void }) {

    const item = deserializeData(serializedData)
    const { addModal } = useModalManager()
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
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { _count, ...newState } = itemState
                await upsertPayrollItem(serializeData(newState))
                closeCB()
                router.refresh()
            },
            {
                loading: "Saving",
                success: `Saved ${itemState.name}`,
                error: "Error Saving Item"
            }
        )
    }

    async function deleted() {

        const result = await promptUser({
            addModal,
            title: "Are you Sure?",
            message: "Deleting this item will not affect previously submitted paystubs, but you will delete progress towards period limits. This action cannot be undone!",
            falseButton: {
                title: "Cancel",
                type: "accent"
            },
            trueButton: {
                title: "Delete",
                type: "danger"
            }
        })
        if (!result) { return }

        if (item._count.PayStubItem > 0) {
            const r = await promptUser({
                addModal,
                title: "Are you REALLY sure?",
                message: `This payroll item is associated with ${item._count.PayStubItem} paystubs. Deleting this payroll item will delete the relationship between those ${item._count.PayStubItem} paystubs. This will delete the period limit tracking!`,
                falseButton: {
                    title: "Cancel",
                    type: "accent"
                },
                trueButton: {
                    title: "Yes",
                    type: "danger"
                }
            })
            if (!r) { return }
        }

        toast.promise(
            async () => {
                await deletePayrollItem(itemState.uuid)
                closeCB()
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
        <>
            <div className="smallCard">
                <div className="card">

                    <p className="select-none font-semibold text-lg">{item.name}</p>
                    <Divider />

                    <div className="flex flex-row gap-2 justify-between align-center h-full mt-2">
                        <CardProp label="Times Used:" val={String(item._count.PayStubItem)} />

                        <div className="flex gap-4">
                            {edited && <Save size={30} onClick={saved} className="icon" />}
                            {itemState.uuid !== "" && <Trash2 size={30} onClick={deleted} className="icon" />}
                        </div>
                    </div>

                    <div className="flex flex-row gap-x-4 pt-4">
                        <div className="pt-3 w-full">
                            <TextInput label="Name" val={itemState.name} onChange={(val) => { setItemState({ ...itemState, name: val }) }} />
                        </div>
                        <SelectInput label="Type" val={itemState.type} options={typeOptions} changeCB={(val) => { setItemState({ ...itemState, type: val as PayStubItemType }) }} />
                    </div>

                    <div className="flex flex-row justify-between gap-4 pt-2">
                        <NumberInput label="Percent" val={Number(itemState.percent ?? 0) * 100} changeCB={(val) => { if (val == 0) { setItemState({ ...itemState, percent: null }) } else { setItemState({ ...itemState, percent: new Decimal(val / 100) }) } }} />
                        <NumberInput label="Flat Amount" val={Number(itemState.amount ?? 0)} changeCB={(val) => { setItemState({ ...itemState, amount: new Decimal(val) }) }} />
                    </div>

                    <div className="flex flex-row justify-between">
                        <LargeTextInput label="Description" val={itemState.description ?? ""} onChange={(val) => { if (val.trim() == "") { setItemState({ ...itemState, description: null }) } else { setItemState({ ...itemState, description: val }) } }} />
                    </div>

                </div>
            </div>

            <div className="smallCard h-fit">
                <div className="card">
                    <p className="select-none font-semibold text-lg">Limits:</p>
                    <Divider />
                    <div className="flex flex-row gap-x-4 pt-5">
                        <SelectInput label="Limit Period" val={itemState.absMaxPeriod} options={limitOptions} changeCB={(val) => { setItemState({ ...itemState, absMaxPeriod: val as AbsMaxPeriodTypes }) }} />
                        <div className="pt-5 w-full">
                            <NumberInput label="Limit For Period" val={Number(itemState.absMax ?? 0)} changeCB={(val) => { setItemState({ ...itemState, absMax: new Decimal(Math.abs(val)) }) }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}