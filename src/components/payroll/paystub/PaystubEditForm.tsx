'use client'

import getEmployeeLatestPaystub from "@/actions/paystub/getEmployeeLatestPaystub"
import getPaystub from "@/actions/paystub/getPaystub"
import getEmployeePaystubItems from "@/actions/paystub/payrollItems/getEmployeePaystubItems"
import { updatePaystubTotals } from "@/actions/paystub/PaystubFunctions"
import upsertEmployeePaystub from "@/actions/paystub/upsertEmployeePaystub"
import ClickableDiv from "@/components/Decorative/ClickableDiv"
import CollapsibleDiv from "@/components/Decorative/CollapsibleDiv"
import DateInput from "@/components/Forms/DateInput"
import { Divider } from "@/components/Forms/Divider"
import SelectInput from "@/components/Forms/SelectInput"
import { PayStubItem, PayStubItemType, Prisma } from "@/database/generated/prisma"
import { HourlyRateStr, HourStr, MoneyToStr } from "@/utils/functions/MoneyStr"
import { percentToStr } from "@/utils/functions/PercentStr"
import { deserializeData, serializeData } from "@/utils/serialization"
import { GridColDef, DataGrid, GridRenderCellParams, GridActionsCellItem, GridRowParams } from "@mui/x-data-grid"
import { AnimatePresence, motion } from "framer-motion"
import { Plus, Save, Trash2 } from "lucide-react"
import React from "react"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"



function getNewPaystub(
    empUUID: string,
    periodStart = new Date(),
    periodEnd = new Date(),
    payDate = new Date()
): Prisma.PayStubGetPayload<{ include: { items: true } }> {
    return {
        uuid: "",
        employeeId: empUUID,
        payDate: payDate,
        periodStart: periodStart,
        periodEnd: periodEnd,
        locked: false,
        grossEarnings: new Prisma.Decimal(0),
        totalTaxes: new Prisma.Decimal(0),
        totalExtras: new Prisma.Decimal(0),
        netPay: new Prisma.Decimal(0),
        items: []
    }
}

function getNewItem(): PayStubItem {
    return {
        name: "New Item",
        uuid: crypto.randomUUID(),
        payStubId: "",
        payrollItemId: null,
        type: "Earning",
        description: null,
        hours: null,
        rate: null,
        percent: null,
        amount: new Prisma.Decimal(0)
    }
}


export default function PaystubEditForm({
    empUUID,
    stubUUID,
    stubStart,
    stubEnd,
    stubPaydate
}: {
    empUUID: string,
    stubUUID?: string,
    stubStart?: Date,
    stubEnd?: Date,
    stubPaydate?: Date
}) {

    const [paystub, setPaystub] = useState(getNewPaystub(empUUID, stubStart, stubEnd, stubPaydate))
    const [defaults, setDefaults] = useState({
        defaults: {
            organization: [] as PayStubItem[],
            group: [] as { groupName: string, items: PayStubItem[] }[],
            employee: [] as PayStubItem[]
        },
        comps: [] as { compName: string, items: PayStubItem[] }[]
    })
    const [edited, setEdited] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { load() }, [])

    async function load() {

        const d = deserializeData(await getEmployeePaystubItems(empUUID))
        setDefaults(d)

        if (stubUUID) {
            const stub = deserializeData(await getPaystub(stubUUID))
            if (stub) { setPaystub(stub) }
            return
        }

        const latest = deserializeData(await getEmployeeLatestPaystub(empUUID))
        if (!latest) { return }
        if (latest.locked) { return }
        setPaystub(latest)

    }

    const selectOptions = [
        { id: PayStubItemType.Earning, label: "Earning" },
        { id: PayStubItemType.Tax, label: "Tax" },
        { id: PayStubItemType.Other, label: "Other" }
    ]

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            editable: true,
            type: 'string',
            width: 150,
            renderCell: (params: GridRenderCellParams<PayStubItem, string>) => (
                <p
                    className={params.row.name == "New Item" ? "text-orange-500 font-black" : ""}
                >{params.row.name}</p>
            ),
        },
        {
            field: 'type',
            headerName: 'Type',
            editable: true,
            type: "custom",
            width: 160,
            renderCell: (params: GridRenderCellParams<PayStubItem, PayStubItemType>) => (
                <SelectInput
                    options={selectOptions}
                    val={params.value}
                    changeCB={(val) => updateItem({ ...params.row, type: val as PayStubItemType })}
                />
            ),
        },
        {
            field: 'description',
            headerName: 'Description',
            editable: true,
            type: "string"
        },
        {
            field: 'hours',
            headerName: 'Hours',
            editable: true,
            type: "number",
            valueFormatter: (value) => value ? HourStr(value) : null,
        },
        {
            field: 'rate',
            headerName: 'Rate',
            editable: true,
            type: "number",
            valueFormatter: (value) => value ? HourlyRateStr(value) : null
        },
        {
            field: 'percent',
            headerName: 'Percent',
            editable: true,
            type: "number",
            valueFormatter: (value) => value ? percentToStr(value) : null
        },
        {
            field: 'amount',
            headerName: 'Amount',
            editable: true,
            type: "number",
            valueFormatter: (value) => value ? MoneyToStr(value) : null,
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            getActions: (params: GridRowParams<PayStubItem>) => [
                <GridActionsCellItem key={params.row.uuid + "-item"} icon={<Trash2 />} onClick={() => deleteItem(params.row)} label="Delete" />
            ]
        }
    ]

    function deleteItem(item: PayStubItem) {
        const items = [...paystub.items].filter(i => i.uuid !== item.uuid)
        updateTotals({
            ...paystub,
            items: items
        })
        toast.success(`Deleted ${item.name}`)
    }
    function addNewItem() {
        addItem(getNewItem())
    }
    function shouldSkip(item: PayStubItem) {
        return (
            paystub.items.findIndex(i => i.payrollItemId == item.payrollItemId) !== -1
            && item.payrollItemId
        )
            || paystub.items.findIndex(i => i.name == item.name) !== -1
    }
    function addItem(item: PayStubItem) {

        if (shouldSkip(item)) { return }

        updateTotals({
            ...paystub,
            items: [...paystub.items, item]
        })
        toast.success(`Added ${item.name}`)
    }
    function updateItem(item: PayStubItem) {
        const items = [...paystub.items]
        const index = items.findIndex(e => e.uuid == item.uuid)
        if (index == -1) { return }

        if (item.hours) {
            item.hours = new Prisma.Decimal(item.hours)
            if (item.hours.equals(0)) { item.hours = null }
        }
        if (item.rate) {
            item.rate = new Prisma.Decimal(item.rate)
            if (item.rate.equals(0)) { item.rate = null }
        }
        if (item.percent) {
            item.percent = new Prisma.Decimal(item.percent)
            if (item.percent.equals(0)) { item.percent = null }
        }

        if (item.description) {
            if (item.description.trim() == "") { item.description = null }
        }

        items[index] = item

        updateTotals({
            ...paystub,
            items: items
        })

        return item
    }

    function updateTotals(stub: Prisma.PayStubGetPayload<{ include: { items: true } }>) {

        stub = updatePaystubTotals(stub)

        const groups = Object.groupBy(stub.items, item => item.type)
        stub.items = [...(groups.Earning ?? []), ...(groups.Tax ?? []), ...(groups.Other ?? [])]

        setPaystub(stub)
        setEdited(true)
    }

    function importAll() {
        let items = [] as PayStubItem[]
        defaults.comps.forEach(c => { c.items.forEach(i => items.push(i)) })

        defaults.defaults.employee.forEach(item => items.push(item))
        defaults.defaults.group.forEach(g => { g.items.forEach(item => items.push(item)) })
        defaults.defaults.organization.forEach(item => items.push(item))

        items = items.filter(i => !shouldSkip(i))

        if (items.length == 0) {
            toast.success("All Items Already Imported")
            return
        }

        const newstub = {
            ...paystub,
            items: [...paystub.items, ...items]
        }
        updateTotals(newstub)
        toast.success(`Imported All Payroll Items`)
    }

    function save() {
        toast.promise(
            async () => {
                await upsertEmployeePaystub(serializeData(paystub))
                setEdited(false)
            },
            {
                loading: "Saving Paystub",
                success: "Paystub Saved",
                error: "Error Saving Paystub"
            }
        )
    }

    function importTaxes() {
        toast.promise(
            async () => {

                async function sleep() {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve(null)
                        }, 1000);
                    })
                }
                await sleep()
                setTimeout(() => {
                    toast("Feature not added yet...")
                }, 1000);
                throw new Error("")
            },
            {
                loading: "Importing Tax Items",
                success: "Tax Items Imported",
                error: "Error Importing Tax Items"
            }
        )
    }

    function restoreDates() {
        if (hasDates && datesDiffer) {
            setPaystub({
                ...paystub,
                periodStart: stubStart,
                periodEnd: stubEnd,
                payDate: stubPaydate
            })
            setEdited(true)
            toast.success("Dates Restored to Config")
        }
    }

    const handleProcessRowUpdateError = React.useCallback((error: Error) => {
        toast.error(error.message)
    }, []);

    const hasDates = stubStart && stubEnd && stubPaydate
    const datesDiffer = (paystub.periodStart.toISOString() !== (stubStart?.toISOString() ?? "")) || (paystub.periodEnd.toISOString() !== (stubEnd?.toISOString() ?? "")) || (paystub.payDate.toISOString() !== (stubPaydate?.toISOString() ?? ""))

    return (
        <div className="flex flex-row gap-5">

            <div className="w-3/4">
                <div className="flex flex-row justify-between select-none mb-3">

                    <ClickableDiv onClick={importTaxes}>
                        <p className="bg-primary rounded-md p-2 hover:bg-primary-up text-white font-bold">
                            Import Taxes
                        </p>
                    </ClickableDiv>

                    <AnimatePresence>
                        {hasDates && datesDiffer &&
                            <motion.div
                                key={"restoreDates"}
                                initial={{ opacity: 0, width: 0 }}
                                exit={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                            >
                                <ClickableDiv onClick={restoreDates}>
                                    <p className="bg-accent rounded-md p-2 hover:bg-accent-up text-white font-bold overflow-clip text-nowrap">
                                        Restore Dates
                                    </p>
                                </ClickableDiv>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <div className="flex flex-row gap-8">
                        <DateInput label="Period Start" val={paystub.periodStart} onChange={(val) => { setPaystub({ ...paystub, periodStart: val }); setEdited(true) }} />
                        <DateInput label="Period End" val={paystub.periodEnd} onChange={(val) => { setPaystub({ ...paystub, periodEnd: val }); setEdited(true) }} />
                        <DateInput label="Pay Date" val={paystub.payDate} onChange={(val) => { setPaystub({ ...paystub, payDate: val }); setEdited(true) }} />
                    </div>

                    <div className="flex flex-row gap-4">

                        <motion.div
                            animate={{ opacity: edited ? 1 : 0 }}
                        >
                            <ClickableDiv onClick={save}>
                                <Save size={40} stroke="white" className="bg-primary rounded-md p-2 hover:bg-primary-up" />
                            </ClickableDiv>
                        </motion.div>

                        <ClickableDiv onClick={addNewItem}>
                            <Plus size={40} className="bg-gray-100 rounded-md p-2 hover:bg-gray-200" />
                        </ClickableDiv>
                    </div>
                </div>
                <DataGrid
                    rows={paystub.items}
                    columns={columns}
                    getRowId={(row) => row.uuid}
                    processRowUpdate={(updatedRow) => updateItem(updatedRow)}
                    onProcessRowUpdateError={handleProcessRowUpdateError}
                    rowHeight={60}
                />

            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-4">
                <div className="card h-fit">
                    <div className="flex flex-row w-full justify-between">
                        <p>Gross:</p>
                        <p className="font-semibold">{MoneyToStr(paystub.grossEarnings.toNumber())}</p>
                    </div>
                    <div className="flex flex-row w-full justify-between">
                        <p>Taxes:</p>
                        <p className="font-semibold">{MoneyToStr(paystub.totalTaxes.toNumber())}</p>
                    </div>
                    <div className="flex flex-row w-full justify-between">
                        <p>Extra:</p>
                        <p className="font-semibold">{MoneyToStr(paystub.totalExtras.toNumber())}</p>
                    </div>
                    <Divider />
                    <div className="flex flex-row w-full justify-between">
                        <p>Net Pay:</p>
                        <p className="font-semibold">{MoneyToStr(paystub.netPay.toNumber())}</p>
                    </div>
                </div>

                <div className="card h-fit w-3xs select-none">

                    <button onClick={importAll} className="bg-primary p-2 w-full rounded-lg text-white font-bold">Import All Items</button>
                    <Divider />
                    <CollapsibleDiv title="Compensations" arrowSize={14}>
                        {defaults.comps.map(comp => (
                            <div key={comp.compName} className="pl-2">
                                {comp.items.map(item => (
                                    <DefaultItemCard key={item.uuid} item={item} add={addItem} />
                                ))}
                            </div>
                        ))}
                    </CollapsibleDiv>
                    <CollapsibleDiv title="Payroll Items" arrowSize={14}>
                        <div className="pl-2">


                            {defaults.defaults.organization.length !== 0 &&
                                <CollapsibleDiv title="Organization" arrowSize={10}>
                                    {defaults.defaults.organization.map(comp => (
                                        <DefaultItemCard key={comp.uuid} item={comp} add={addItem} />
                                    ))}
                                </CollapsibleDiv>
                            }

                            {defaults.defaults.group.length !== 0 &&
                                <CollapsibleDiv title="Group" arrowSize={10}>
                                    {defaults.defaults.group.map(group => {
                                        if (group.items.length == 0) { return <></> }
                                        return (
                                            <div key={group.groupName}>
                                                <div>{group.groupName}</div>
                                                {group.items.map(item => (
                                                    <DefaultItemCard key={item.uuid} item={item} add={addItem} />
                                                ))}
                                            </div>
                                        )
                                    })}
                                </CollapsibleDiv>
                            }

                            {defaults.defaults.employee.length !== 0 &&
                                <CollapsibleDiv title="Employee" arrowSize={10}>
                                    {defaults.defaults.employee.map(comp => (
                                        <DefaultItemCard key={comp.uuid} item={comp} add={addItem} />
                                    ))}
                                </CollapsibleDiv>
                            }

                        </div>

                    </CollapsibleDiv>
                </div>
            </div>

        </div>
    )
}




function DefaultItemCard({ item, add }: { item: PayStubItem, add: (item: PayStubItem) => void }) {

    return (
        <ClickableDiv onClick={() => add(item)} className="w-full flex flex-row justify-between bg-gray-100 hover:bg-gray-200 rounded-sm px-2 mb-2">
            <button>{`${item.name}`}</button>
        </ClickableDiv>
    )
}