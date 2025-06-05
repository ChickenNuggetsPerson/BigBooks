'use client'

import { Divider } from "@/components/Forms/Divider"
import { PayStubItem, PayStubItemType } from "@/database/generated/prisma"
import { useEffect, useState } from "react"
import getPaystubItems from "@/actions/paystub/items/getPaystubItems"
import { useCompany } from "@/app/CompanyContext"
import SelectInput from "@/components/Forms/SelectInput"
import { Info, Save, Trash2, X } from "lucide-react"
import TextInput from "@/components/Forms/TextInput"
import LargeTextInput from "@/components/Forms/LargeTextInput"

import { SuperJSON } from "superjson"
import toast from "react-hot-toast"
import upsertPaystubItem from "@/actions/paystub/items/upsertPaystubItem"
import CollapsibleDiv from "@/components/Decorative/CollapsibleDiv"
import { Decimal } from "@/database/generated/prisma/runtime/index-browser"
import deletePaystubItem from "@/actions/paystub/items/deletePaystubItem"
import NumberInput from "@/components/Forms/NumberInput"
import { useModalManager } from "@/components/Decorative/Modal/ModalContext"




export default function PaystubDefaultsForm({
    organization = false,
    group = false,
    employee = false,
    employeeUUID = "",
    groupUUID = "",
}: {
    organization?: boolean,
    group?: boolean,
    employee?: boolean,
    employeeUUID?: string,
    groupUUID?: string
}) {

    const { addModal } = useModalManager()
    const [defaultItems, setDefaultItems] = useState([] as PayStubItem[])
    const [newItem, setNewItem] = useState(false)
    const { context } = useCompany()

    async function loadData() {
        let items = [] as PayStubItem[]

        if (organization) {
            items = await getPaystubItems({ organizationId: context?.companyUUID })
        }
        if (employee) {
            items = await getPaystubItems({ employeeId: employeeUUID })
        }
        if (group) {
            items = await getPaystubItems({ payrollGroupId: groupUUID })
        }
        setDefaultItems(items)
        setNewItem(false)
    }

    useEffect(() => {
        loadData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context?.companyUUID, employeeUUID, groupUUID, organization, employee, group])

    function refresh() {
        loadData()
    }

    function newButtonPressed() {
        const newItem = {
            type: PayStubItemType.Other,
            name: "New Default",
            uuid: "",
            isDefault: true,
            payStubId: null,
            description: null,
            
            hours: null, // Not needed here
            rate: null,  // Not needed here either

            percent: null,
            amount: new Decimal("0.0"),

            organizationId: (organization) ? (context?.companyUUID ?? null) : null,
            payrollGroupId: (group) ? groupUUID : null,
            employeeId:     (employee) ? employeeUUID : null,
        }

        setDefaultItems([newItem, ...defaultItems])
        setNewItem(true)
    }

    if (employee && employeeUUID === "") { return (<div>Error...</div>) }
    if (group && groupUUID === "") { return (<div>Error...</div>) }

    function infoClicked() {
        addModal({
            title: "Paystub Default Items",
            required: false,
            component: () => <div className="w-sm">
                <li>{`Paystub default items can be auto included when filling out an employee's payroll. The "type" (Earning, Tax, or Other) determins where the item appear in the paystub.`}</li>
                <li>Paystub items can either be a flat ammount, or a percent of the gross pay.</li>
                <li>Note: To make a deduction, enter a negative percent or flat ammount.</li>
            </div>
        })
    }

    return (
        <div className="h-fit w-sm">
            <div className="card mb-5">
                <div className="flex flex-row justify-between">
                    <h5 className="text-xl font-semibold text-gray-700">{`Default Paystub Items`}</h5>
                    <Info onClick={infoClicked}/>
                </div>
                <Divider />
                <button onClick={newButtonPressed} disabled={newItem} type="submit" className="bg-primary rounded-md text-white w-full text-xl font-bold p-1">New Item</button>
            </div>

            {defaultItems.map((item) => (
                <div key={item.uuid} className="card mb-5">
                    <PaystubDefaultItem item={SuperJSON.stringify(item)} refresh={refresh} />
                </div>
            ))}
        </div>
    )
}



function PaystubDefaultItem({
    item,
    refresh = () => { }
}: {
    item: string,
    refresh?: () => void
}) {

    const origonal = SuperJSON.parse<PayStubItem>(item)

    const [itemState, setItemState] = useState(origonal)
    const [edited, setEdited] = useState(false)


    useEffect(() => {
        setEdited(JSON.stringify(itemState) !== JSON.stringify(origonal))
    }, [itemState, origonal])

    const options = Object.values(PayStubItemType).map((v) => { return { id: v, label: v } })

    function saved() {
        toast.promise(
            async () => {
                await upsertPaystubItem(itemState)
                refresh()
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
                await deletePaystubItem(itemState.uuid)
                refresh()
            },
            {
                loading: "Deleting",
                success: `Deleted ${itemState.name}`,
                error: "Error Deleting Item"
            }
        )
    }

    function cancel() {
        refresh()
    }

    return (
        <CollapsibleDiv title={origonal.name} className="">

            <div className="flex flex-row gap-x-4 mt-2">
                <SelectInput label="Type" val={itemState.type} options={options} changeCB={(val) => { setItemState({ ...itemState, type: val as PayStubItemType }) }} />
                <div className="pt-5 w-full">
                    <TextInput label="Name" val={itemState.name} onChange={(val) => { setItemState({ ...itemState, name: val }) }} />
                </div>
            </div>

            <div className="flex flex-row justify-between">
                <div className="w-60">
                    <LargeTextInput label="Description" val={itemState.description ?? ""} onChange={(val) => { if (val.trim() == "") { setItemState({ ...itemState, description: null }) } else { setItemState({ ...itemState, description: val }) } }} />
                </div>
                <div className="flex flex-col gap-2 justify-center align-center h-full">
                    {edited && <Save size={30} onClick={saved} className="bg-gray-100 rounded-md p-1 hover:bg-gray-200" />}
                    {itemState.uuid !== "" && <Trash2 size={30} onClick={deleted} className="bg-gray-100 rounded-md p-1 hover:bg-gray-200" />}
                    {itemState.uuid === "" && <X size={30} onClick={cancel} className="bg-gray-100 rounded-md p-1 hover:bg-gray-200" />}
                </div>
            </div>

            <div className="flex flex-row justify-between gap-4">
                <NumberInput label="Percent" val={Number(itemState.percent ?? 0) * 100}      changeCB={(val) => { if (val == 0) { setItemState({ ...itemState, percent: null }) } else { setItemState({ ...itemState, percent: new Decimal(val / 100) }) } }} />
                <NumberInput label="Flat Ammount" val={Number(itemState.amount ?? 0)}  changeCB={(val) => { setItemState({ ...itemState, amount: new Decimal(val) }) }} />
            </div>

        </CollapsibleDiv>
    )
}