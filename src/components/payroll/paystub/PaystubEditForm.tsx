'use client'

import deletePaystub from "@/actions/paystub/deletePaystub"
import getEmployeeLatestPaystub from "@/actions/paystub/getEmployeeLatestPaystub"
import getPaystub from "@/actions/paystub/getPaystub"
import getEmployeePaystubItems from "@/actions/paystub/payrollItems/getEmployeePaystubItems"
import { updatePaystubTotals } from "@/actions/paystub/PaystubFunctions"
import upsertEmployeePaystub from "@/actions/paystub/upsertEmployeePaystub"
import ClickableDiv from "@/components/Decorative/ClickableDiv"
import CollapsibleDiv from "@/components/Decorative/CollapsibleDiv"
import { useModalManager } from "@/components/Decorative/Modal/ModalContext"
import DateInput from "@/components/Forms/DateInput"
import { Divider } from "@/components/Forms/Divider"
import SelectInput from "@/components/Forms/SelectInput"
import { PayStubItem, PayStubItemType, Prisma } from "@/database/generated/prisma"
import { HourlyRateStr, HourStr, MoneyToStr } from "@/utils/functions/MoneyStr"
import { percentToStr } from "@/utils/functions/PercentStr"
import { deserializeData, serializeData } from "@/utils/serialization"
import { Tooltip } from "@mui/material"
import { GridColDef, DataGrid, GridRenderCellParams, GridActionsCellItem, GridRowParams } from "@mui/x-data-grid"
import { AnimatePresence, motion } from "framer-motion"
import { Plus, Save, Trash2, TriangleAlert, X } from "lucide-react"
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
        items: [],
        lockedTime: null,
        submittedTime: null
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
    stubPaydate,
    forceLock = false
}: {
    empUUID: string,
    stubUUID?: string,
    stubStart?: Date,
    stubEnd?: Date,
    stubPaydate?: Date,
    forceLock?: boolean
}) {

    const { addModal } = useModalManager()
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
    const [loading, setLoading] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { load() }, [])

    async function load() {

        setEdited(false)
        setLoading(true)

        const d = deserializeData(await getEmployeePaystubItems(empUUID))
        setDefaults(d)

        if (stubUUID) {
            const stub = deserializeData(await getPaystub(stubUUID))
            if (stub) {
                setPaystub(stub)
            } else {
                setPaystub(getNewPaystub(empUUID, stubStart, stubEnd, stubPaydate))
            }
            setLoading(false)
            return
        }

        const latest = deserializeData(await getEmployeeLatestPaystub(empUUID))
        if (!latest) {
            setPaystub(getNewPaystub(empUUID, stubStart, stubEnd, stubPaydate))
            setLoading(false)
            return
        }
        setPaystub(latest)
        setLoading(false)
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
                    disabled={isLocked}
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
            renderCell: (params: GridRenderCellParams<PayStubItem, string>) => {

                const amt = new Prisma.Decimal(params.row.amount)
                const val = MoneyToStr(amt.toNumber())

                if (
                    amt.greaterThanOrEqualTo(0) 
                    && params.row.type === PayStubItemType.Tax
                ) {
                    return (
                        <Tooltip title="Generally, tax ammounts shouldn't be positive.">
                            <p className={"text-orange-500 font-black"}>
                                {val}
                            </p>
                        </Tooltip>
                    )
                }

                if (
                    amt.equals(0) 
                    && params.row.type === PayStubItemType.Earning
                ) {
                    return (
                        <Tooltip title="Generally, earning ammounts shouldn't be zero.">
                            <p className={"text-orange-500 font-black"}>
                                {val}
                            </p>
                        </Tooltip>
                    )
                }

                return (<p>{val}</p>)
            },
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            getActions: (params: GridRowParams<PayStubItem>) => [
                <GridActionsCellItem disabled={isLocked} key={params.row.uuid + "-item"} icon={<X />} onClick={() => deleteItem(params.row)} label="Delete" />
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

        if (isLocked) { return }
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

        if (isLocked) { return items[index] }

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
                await load()
            },
            {
                loading: "Saving Paystub",
                success: "Paystub Saved",
                error: "Error Saving Paystub"
            }
        )
    }

    function clickedDelete() {
        addModal({
            title: `Delete Paystub?`,
            required: false,
            component: (push, pop) => (
                <div className="max-w-md">

                    {/* <p>Are you sure you want to delete this paystub?</p> */}

                    <div className="flex flex-row justify-between mt-5">
                        <button className="primary-button" onClick={pop}>No, Cancel</button>
                        <button className="danger-button" onClick={() => {
                            pop()
                            deleteStub()
                        }}>Yes, Delete</button>
                    </div>
                </div>
            )
        })
    }
    function deleteStub() {

        if (paystub.uuid.trim() == "") { return }

        toast.promise(
            async () => {
                await deletePaystub(paystub.uuid)
                await load()
            },
            {
                loading: "Deleting Paystub",
                success: "Paystub Deleted",
                error: "Error Deleting Paystub"
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


    function lockedBtn() {
        addModal({
            title: "This Paystub Is Locked!",
            required: false,
            component: () => (<div className="w-sm">
                <p>Paystubs can only be unlocked by System Administrators. If you believe this paystub was locked by accident, please contact a BigBooks Administrator.</p>
            </div>)
        })
    }

    const handleProcessRowUpdateError = React.useCallback((error: Error) => {
        toast.error(error.message)
    }, []);

    const hasDates = stubStart && stubEnd && stubPaydate
    const datesDiffer = (paystub.periodStart.toISOString() !== (stubStart?.toISOString() ?? "")) || (paystub.periodEnd.toISOString() !== (stubEnd?.toISOString() ?? "")) || (paystub.payDate.toISOString() !== (stubPaydate?.toISOString() ?? ""))
    const isLocked = (paystub.locked || paystub.lockedTime || paystub.submittedTime || forceLock) as boolean

    return (
        <div className="flex flex-row gap-5">

            <div className="w-3/4">
                <div className="flex flex-row justify-between select-none mb-3 smallCard" style={{ padding: 10 }}>

                    {!isLocked &&
                        <ClickableDiv onClick={importTaxes}>
                            <p className="primary-button">
                                Import Taxes
                            </p>
                        </ClickableDiv>
                    }
                    {isLocked &&
                        <div></div>
                    }

                    <AnimatePresence>
                        {hasDates && datesDiffer && !isLocked &&
                            <motion.div
                                key={"restoreDates"}
                                initial={{ opacity: 0, width: 0 }}
                                exit={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                            >
                                <ClickableDiv onClick={restoreDates}>
                                    <p className="accent-button overflow-clip text-nowrap">
                                        Restore Dates
                                    </p>
                                </ClickableDiv>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <div className="flex flex-row gap-8" style={{ transform: `translate(0px, ${forceLock ? 4 : 8}px)` }}>
                        <DateInput label="Period Start" val={paystub.periodStart} onChange={(val) => { setPaystub({ ...paystub, periodStart: val }); setEdited(true) }} disabled={isLocked} />
                        <DateInput label="Period End" val={paystub.periodEnd} onChange={(val) => { setPaystub({ ...paystub, periodEnd: val }); setEdited(true) }} disabled={isLocked} />
                        <DateInput label="Pay Date" val={paystub.payDate} onChange={(val) => { setPaystub({ ...paystub, payDate: val }); setEdited(true) }} disabled={isLocked} />
                    </div>

                    {!isLocked &&
                        <div className="flex flex-row gap-4 pt-1">

                            <motion.div animate={{ opacity: edited ? 1 : 0 }} >
                                <ClickableDiv onClick={save}>
                                    <Tooltip title="Save Paystub">
                                        <Save size={40} stroke="white" className="bg-primary/80 icon" />
                                    </Tooltip>
                                </ClickableDiv>
                            </motion.div>

                            <AnimatePresence>
                                {paystub.uuid.trim() !== "" &&
                                    <motion.div
                                        key={"deletebutton"}
                                        initial={{ opacity: 0, width: 0 }}
                                        exit={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                    >
                                        <ClickableDiv onClick={clickedDelete}>
                                            <Tooltip title="Delete Paystub">
                                                <Trash2 size={38} className="icon" />
                                            </Tooltip>
                                        </ClickableDiv>
                                    </motion.div>
                                }
                            </AnimatePresence>


                            <ClickableDiv onClick={addNewItem}>
                                <Tooltip title="Add Item to Paystub">
                                    <Plus size={38} className="icon" />
                                </Tooltip>
                            </ClickableDiv>
                        </div>
                    }

                    <AnimatePresence>
                        {isLocked && !forceLock &&
                            <motion.div
                                key={"locked"}
                                initial={{ opacity: 0, width: 0 }}
                                exit={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                            >
                                <ClickableDiv onClick={lockedBtn}>
                                    <p className="bg-orange-400 rounded-md p-2 hover:bg-orange-300 text-white font-bold overflow-clip text-nowrap">
                                        <TriangleAlert stroke="white" />
                                    </p>
                                </ClickableDiv>
                            </motion.div>
                        }
                    </AnimatePresence>

                    {forceLock &&
                        <div></div>
                    }
                </div>
                <DataGrid
                    rows={paystub.items}
                    columns={columns}
                    getRowId={(row) => row.uuid}
                    processRowUpdate={(updatedRow) => updateItem(updatedRow)}
                    onProcessRowUpdateError={handleProcessRowUpdateError}
                    rowHeight={60}
                    loading={loading}
                    slotProps={{
                        loadingOverlay: {
                            variant: 'skeleton',
                        },
                    }}
                />

            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-4">
                <div className="card h-fit w-3xs">
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

                {!isLocked &&
                    <div className="card h-fit w-3xs select-none">

                        <Tooltip title="Import All Payroll Items">
                            <button onClick={importAll} className="primary-button w-full">Import All Items</button>
                        </Tooltip>
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

                                {defaults.defaults.organization.map(comp => (
                                    <DefaultItemCard key={comp.uuid} item={comp} add={addItem} />
                                ))}

                                {defaults.defaults.group.map(group => {
                                    if (group.items.length == 0) { return <></> }
                                    return (
                                        <div key={group.groupName}>
                                            {group.items.map(item => (
                                                <DefaultItemCard key={item.uuid} item={item} add={addItem} />
                                            ))}
                                        </div>
                                    )
                                })}

                                {defaults.defaults.employee.map(comp => (
                                    <DefaultItemCard key={comp.uuid} item={comp} add={addItem} />
                                ))}

                            </div>

                        </CollapsibleDiv>
                    </div>
                }
            </div>

        </div >
    )
}




function DefaultItemCard({ item, add }: { item: PayStubItem, add: (item: PayStubItem) => void }) {

    let str = ""

    if (item.rate) {
        str += HourlyRateStr(item.rate.toNumber())
    }
    if (item.percent) {
        str += percentToStr(item.percent.toNumber())
    }
    if (!item.amount.equals(0)) {
        str += MoneyToStr(item.amount.toNumber())
    }

    return (
        <ClickableDiv onClick={() => add(item)} >
            <Tooltip title={str} className="w-full flex flex-row justify-between bg-gray-100 hover:bg-gray-200 rounded-sm px-2 mb-2">
                <button>{`${item.name}`}</button>
            </Tooltip>
        </ClickableDiv>
    )
}