'use client'

import deletePaystub from "@/actions/paystub/deletePaystub"
import getEmployeeActivePaystubs from "@/actions/paystub/getEmployeeActivePaystubs"
import getPaystub from "@/actions/paystub/getPaystub"
import genEmployeeTaxRates from "@/actions/paystub/importTaxes"
import getEmployeePayrollItems from "@/actions/paystub/payrollItems/getEmployeePayrollItems"
import { OvertimePrefix } from "@/actions/paystub/payrollItems/PayrollItemConsts"
import { updatePaystubTotals } from "@/actions/paystub/PaystubFunctions"
import submitPaystub from "@/actions/paystub/submitPaystub"
import unlockPaystub from "@/actions/paystub/unlockPaystub"
import upsertEmployeePaystub from "@/actions/paystub/upsertEmployeePaystub"
import { useCompany } from "@/app/CompanyContext"
import ClickableDiv from "@/components/Decorative/ClickableDiv"
import { useModalManager } from "@/components/Decorative/Modal/ModalContext"
import { infoUser } from "@/components/Decorative/Modals/infoUser"
import { promptUser } from "@/components/Decorative/Modals/promptUser"
import { CardProp } from "@/components/Forms/CardProp"
import DateInput from "@/components/Forms/DateInput"
import { Divider } from "@/components/Forms/Divider"
import LargeTextInput from "@/components/Forms/LargeTextInput"
import SelectInput from "@/components/Forms/SelectInput"
import { PayStubItem, PayStubItemType, Prisma } from "@/database/generated/prisma"
import { HourlyRateStr, HourStr, MoneyToStr } from "@/utils/functions/MoneyStr"
import { percentToStr } from "@/utils/functions/PercentStr"
import { deserializeData, serializeData } from "@/utils/serialization"
import { Tooltip } from "@mui/material"
import { GridColDef, DataGrid, GridRenderCellParams, GridActionsCellItem, GridRowParams } from "@mui/x-data-grid"
import { AnimatePresence, motion } from "framer-motion"
import { FilePlus, Link, LockKeyhole, NotebookPen, OctagonAlert, Plus, Save, Trash2, TriangleAlert, X } from "lucide-react"
import React from "react"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"



function getNewPaystub(
    empUUID: string,
    periodStart = new Date(),
    periodEnd = new Date(),
    payDate = new Date(),
    draftUUID: string | undefined
): Prisma.PayStubGetPayload<{ include: { items: true } }> {
    return {
        uuid: "",
        relatedPayrollDraftId: draftUUID ?? null,
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
        compensationId: null,
        hourlyRateId: null,
        payrollItemId: null,
        taxID: null,
        type: "Earning",
        description: null,
        hours: null,
        rate: null,
        percent: null,
        amount: new Prisma.Decimal(0)
    }
}


// TODO: Create a button that allows the user to submit a paystub once they are done editing it. This button should only appear when the edit form is supplied with an initial paystub id 

export default function PaystubEditForm({
    empUUID,
    stubUUID,
    stubStart,
    stubEnd,
    stubPaydate,
    forceLock = false,
    canCreateNewStub = false,
    payrollDraftUUID
}: {
    empUUID: string,
    stubUUID?: string,
    stubStart?: Date,
    stubEnd?: Date,
    stubPaydate?: Date,
    forceLock?: boolean,
    canCreateNewStub?: boolean,
    payrollDraftUUID?: string
}) {

    const { context } = useCompany()
    const { addModal } = useModalManager()

    const [activeStubs, setActiveStubs] = useState([] as Prisma.PayStubGetPayload<{ select: { uuid: true, payDate: true, periodEnd: true, periodStart: true } }>[])
    const [paystub, setPaystub] = useState(getNewPaystub(empUUID, stubStart, stubEnd, stubPaydate, payrollDraftUUID))

    const [defaults, setDefaults] = useState({
        defaults: {
            organization: [] as PayStubItem[],
            group: [] as { groupName: string, items: PayStubItem[] }[],
            employee: [] as PayStubItem[]
        },
        comps: [] as { compName: string, isSallary: boolean, items: PayStubItem[] }[]
    })
    const [edited, setEdited] = useState(false)
    const [loading, setLoading] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { load() }, [])

    async function load(forceNew: boolean = false) {

        setLoading(true)
        setEdited(false)

        const d = deserializeData(await getEmployeePayrollItems(empUUID))
        setDefaults(d)

        // Fetch all unlocked paystubs
        const unlocked = deserializeData(await getEmployeeActivePaystubs(empUUID, payrollDraftUUID !== undefined))
        setActiveStubs(unlocked)

        // Component supplied with UUID, or internal state has a valid UUID
        if ((stubUUID || paystub.uuid !== "") && !forceNew) {
            const uuid = stubUUID ?? paystub.uuid
            await loadStubByID(uuid)
        } else {

            // If a unlocked stub exists, load it.
            // Otherwise, just set state to an empty stub.
            if (unlocked.length > 0) {
                await loadStubByID(unlocked[0].uuid)
            } else {
                createNewStub()
            }
        }

        setLoading(false)
    }

    // Loades the paystub into internal state.
    async function loadStubByID(uuid: string) {
        setLoading(true)
        const stub = deserializeData(await getPaystub(uuid)) // Fetch from server
        if (stub) {
            updateTotals(stub)
        } else {
            toast.error(`Failed Loading Paystub: ${uuid}`)
            createNewStub() // Default to empty if needed
        }
        setEdited(false)
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
            width: 130,
            getActions: (params: GridRowParams<PayStubItem>) => [
                <GridActionsCellItem disabled={isLocked} key={params.row.uuid + "-desc"} icon={
                    <NotebookPen opacity={params.row.description ? 1 : 0.3} />
                } onClick={() => {
                    showDescriptionModal(params.row)
                }} label="Description" />,

                <GridActionsCellItem disabled={isLocked} key={params.row.uuid + "-link"} icon={
                    <Link opacity={(params.row.payrollItemId || params.row.compensationId || params.row.hourlyRateId || params.row.taxID) ? 1 : 0.3} />
                } onClick={() => {
                    if (params.row.taxID) {
                        toast("Cannot Edit Link: (Linked to Tax)")
                    } else {
                        showLinkItemModal(params.row)
                    }
                }} label="Link" />,

                <GridActionsCellItem disabled={isLocked} key={params.row.uuid + "-delete"} icon={
                    <X />
                } onClick={() => {
                    deleteItem(params.row)
                }} label="Delete" />,
            ]
        }
    ]

    function showDescriptionModal(item: PayStubItem) {
        addModal({
            title: "Item Description:",
            required: false,
            component: (push, pop) => {

                function getText() {
                    const e = document.getElementById("descriptionInput") as HTMLInputElement
                    return e?.value ?? ""
                }

                return (
                    <div className="w-sm select-none">
                        <div className="h-3"></div>
                        <LargeTextInput label={`Item Description for: ${item.name}`} id="descriptionInput" val={item.description ?? ""} />
                        <div className="w-full flex flex-row justify-between">
                            <button className="accent-button w-4/9" onClick={() => {
                                pop()
                            }}>Close</button>
                            <button className="primary-button w-4/9" onClick={() => {
                                updateItem({
                                    ...item,
                                    description: getText()
                                })
                                pop()
                            }}>Save</button>
                        </div>
                    </div>
                )
            }
        })
    }

    function showLinkItemModal(item: PayStubItem) {

        enum OptionType {
            "payroll" = 0,
            "compensation" = 1,
            "rate" = 2,
            "none" = 3
        }
        const options = [
            { label: "None", id: "", type: OptionType.none }
        ] as { label: string, id: string, type: OptionType }[]

        defaults.comps.forEach(comp => {

            if (comp.isSallary) {
                comp.items.forEach(item => {
                    if (!item.compensationId) { return }
                    options.push({
                        label: "Salary: " + comp.compName,
                        id: item.compensationId,
                        type: OptionType.compensation
                    })
                })
            } else {
                comp.items.forEach(item => {
                    if (!item.hourlyRateId) { return }
                    if (item.name.startsWith(OvertimePrefix)) { return }
                    options.push({
                        label: "Rate: " + item.name,
                        id: item.hourlyRateId,
                        type: OptionType.rate
                    })
                })
            }
        })

        defaults.defaults.organization.map(d => {
            return { label: "Organization: " + d.name, id: d.payrollItemId ?? "error", type: OptionType.payroll }
        }).forEach(d => options.push(d))

        defaults.defaults.group.forEach(group => {
            group.items.map(d => {
                return { label: group.groupName + ": " + d.name, id: d.payrollItemId ?? "error", type: OptionType.payroll }
            }).forEach(d => options.push(d))
        })

        defaults.defaults.employee.map(d => {
            return { label: "Employee: " + d.name, id: d.payrollItemId ?? "error", type: OptionType.payroll }
        }).forEach(d => options.push(d))




        addModal({
            title: "Link Item",
            required: false,
            component: (push, pop) => {

                function changeCB(val: string) {
                    const selected = options.find(o => o.id === val)
                    if (!selected) return

                    updateItem({
                        ...item,
                        payrollItemId: selected.type === OptionType.payroll ? selected.id : null,
                        compensationId: selected.type === OptionType.compensation ? selected.id : null,
                        hourlyRateId: selected.type === OptionType.rate ? selected.id : null
                    })

                    toast(`${item.name} now linked to:\n ${selected.label}`)

                    pop()
                }

                // An item can't be linked to multiple groups
                let val = ""
                if (item.payrollItemId) {
                    val = item.payrollItemId
                } else if (item.compensationId) {
                    val = item.compensationId
                } else if (item.hourlyRateId) {
                    val = item.hourlyRateId
                } else {
                    val = ""
                }

                return (
                    <div className="w-sm">
                        <CardProp label="Item Name:" val={item.name} />
                        <div className="h-4"></div>
                        <p>Linked To:</p>
                        <SelectInput searchable options={options} val={val} changeCB={changeCB} />

                        {/* <button className={`accent-button w-full mt-5`} onClick={() => {
                            pop()
                        }}>Close</button> */}
                    </div>
                )
            }
        })
    }

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
        item.amount = new Prisma.Decimal(item.amount)

        if (item.description?.trim() === "") {
            item.description = null;
        }

        if (item.payrollItemId?.trim() === "") {
            item.payrollItemId = null;
        }
        if (item.compensationId?.trim() === "") {
            item.compensationId = null;
        }
        if (item.hourlyRateId?.trim() === "") {
            item.hourlyRateId = null;
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

        if (items.length === 0) {
            toast("This usually means the employee wasn't set up propperly or you do not have the permissions to view the items.", { duration: 7000 })
            toast.error("No Items to Import")
            return
        }

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
                load()
            },
            {
                loading: "Saving Paystub",
                success: "Paystub Saved",
                error: "Error Saving Paystub"
            }
        )
    }

    async function clickedDelete() {

        const result = await promptUser({
            addModal,
            title: "Delete Paystub?",
            message: "This action cannot be undone.",
            falseButton: {
                title: "Close",
                type: "accent"
            },
            trueButton: {
                title: "Delete",
                type: "danger"
            }
        })

        if (!result) { return }

        deleteStub()
    }
    function deleteStub() {

        if (paystub.uuid.trim() == "") { return }

        toast.promise(
            async () => {
                await deletePaystub(paystub.uuid)
                createNewStub()
                load(true)
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
                if (!context) { throw new Error("Invalid Context") }

                let items = deserializeData(await genEmployeeTaxRates(empUUID, context.companyUUID, paystub.payDate))

                items = items.filter(i => !shouldSkip(i))
                if (items.length == 0) { return }
                const newstub = {
                    ...paystub,
                    items: [...paystub.items, ...items]
                }
                updateTotals(newstub)
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


    async function lockedBtn() {
        if (paystub.locked) {
            const result = await promptUser({
                addModal,
                title: "This Paystub Is Locked!",
                message: "Paystubs can only be unlocked by Organization Administrators. If you believe this paystub was locked by accident, please contact an administrator for this organization.",
                falseButton: {
                    title: "Close",
                    type: "accent"
                },
                trueButton: {
                    title: "Unlock",
                    type: "danger"
                }
            })
            if (result) {
                setTimeout(() => {
                    unlockPressed()
                }, 100);
            }
        } else {
            infoUser({
                addModal,
                title: "This Paystub Is Submitted!",
                message: "This paystub was previously submitted but is not locked."
            })
        }
    }
    async function unlockPressed() {
        const result = await promptUser({
            addModal,
            title: "Are you sure?",
            message: "TODO: Add warning text here... TLDR: Don't do this unless you know what you are doing. :)",
            falseButton: {
                title: "Cancel",
                type: "accent"
            },
            trueButton: {
                title: "Continue",
                type: "danger"
            }
        })
        if (result) {
            unlockStub()
        }
    }

    function unlockStub() {

        toast.promise(
            async () => {
                await unlockPaystub(paystub.uuid)
                load()
            },
            {
                loading: "Unlocking Paystub",
                success: "Paystub Unlocked",
                error: "Error Unlocking Paystub"
            }
        )
    }

    async function lockPaystubClicked() {
        const result = await promptUser({
            addModal,
            title: "Submit Paystub?",
            message: "Do you want to lock and submit this paystub?",
            falseButton: {
                title: "Cancel",
                type: "accent"
            },
            trueButton: {
                title: "Lock and Submit",
                type: "primary"
            }
        })

        if (result) {
            lock()
        }
    }
    function lock() {
        toast.promise(
            async () => {
                await submitPaystub(paystub.uuid)
                load()
            },
            {
                loading: "Locking Paystub",
                success: "Paystub Locked",
                error: "Error Locking Paystub"
            }
        )
    }

    function createPaystubClicked() {
        addModal({
            title: "Create New Paystub?",
            required: false,
            component: (push, pop) => (<div className="w-sm">
                <p>Do you want to create a new paystub for this employee?</p>
                <Divider />
                <div className="flex flex-row justify-between">
                    <button className="accent-button" onClick={() => { pop() }}>Cancel</button>
                    <button className="primary-button" onClick={() => { pop(); createNewStub() }}>Create</button>
                </div>

            </div>)
        })
    }
    function createNewStub() {
        setPaystub(getNewPaystub(empUUID, stubStart, stubEnd, stubPaydate, payrollDraftUUID))
        setEdited(false)
    }

    const handleProcessRowUpdateError = React.useCallback((error: Error) => {
        toast.error(error.message)
    }, []);

    const hasDates = stubStart && stubEnd && stubPaydate
    const datesDiffer = (paystub.periodStart.toISOString() !== (stubStart?.toISOString() ?? "")) || (paystub.periodEnd.toISOString() !== (stubEnd?.toISOString() ?? "")) || (paystub.payDate.toISOString() !== (stubPaydate?.toISOString() ?? ""))
    const isLocked = (paystub.locked || forceLock) as boolean
    const showWarning = (paystub.locked || paystub.lockedTime || paystub.submittedTime) as boolean


    const activeStubsOptions = [
        { label: "Create New", id: "+" },
        ...activeStubs.map((s) => { return { label: s.payDate.toLocaleDateString(), id: s.uuid } })
    ]
    async function selectActiveStub(val: string) {

        if (edited) {
            const result = await promptUser({
                addModal,
                title: "Unsaved Changes!",
                message: "You have unsaved changes in this paystub. All changes will be lost if you switch to a new paystub. Do you wish to continue?",
                falseButton: {
                    title: "Cancel",
                    type: "accent"
                },
                trueButton: {
                    title: "Continue",
                    type: "danger"
                }
            })
            if (!result) { return }
        }

        if (val == "+") {
            createNewStub()
        } else {
            loadStubByID(val)
        }
    }



    return (
        <div className="flex flex-row gap-5">

            {/* Left Side */}
            <div className="w-3/4">

                {/* Options Header */}
                <div className="flex flex-row justify-between select-none mb-3 smallCard" style={{ padding: 10 }}>

                    <div className="flex flex-row gap-4" style={{ transform: `translate(0px, ${forceLock ? 4 : 8}px)` }}>
                        <DateInput label="Period Start" val={paystub.periodStart} onChange={(val) => { setPaystub({ ...paystub, periodStart: val }); setEdited(true) }} disabled={isLocked} />
                        <DateInput label="Period End" val={paystub.periodEnd} onChange={(val) => { setPaystub({ ...paystub, periodEnd: val }); setEdited(true) }} disabled={isLocked} />
                        <DateInput label="Pay Date" val={paystub.payDate} onChange={(val) => { setPaystub({ ...paystub, payDate: val }); setEdited(true) }} disabled={isLocked} />
                    </div>

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

                    {(!isLocked || showWarning) &&
                        <div className="flex flex-row gap-2 pt-1">
                            <AnimatePresence>

                                {(!edited && !paystub.locked && showWarning) &&
                                    <motion.div key={"lockbutton"}
                                        initial={{ opacity: 0, width: 0 }}
                                        exit={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                    >
                                        <ClickableDiv onClick={lockPaystubClicked}>
                                            <Tooltip title="Lock Paystub">
                                                <LockKeyhole size={38} stroke="white" className="bg-accent icon" />
                                            </Tooltip>
                                        </ClickableDiv>
                                    </motion.div>
                                }

                                {edited &&
                                    <motion.div key={"SavePaystubBtn"}
                                        initial={{ opacity: 0, width: 0 }}
                                        exit={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                    >
                                        <ClickableDiv onClick={save}>
                                            <Tooltip title="Save Paystub">
                                                <Save size={38} stroke="white" className="bg-primary/80 icon" />
                                            </Tooltip>
                                        </ClickableDiv>
                                    </motion.div>
                                }

                                {(paystub.uuid.trim() !== "" && (!paystub.submittedTime)) &&
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

                                {(!showWarning || !paystub.locked) &&
                                    <ClickableDiv onClick={addNewItem} key={"AddItemBtn"}>
                                        <Tooltip title="Add Item to Paystub">
                                            <Plus size={38} className="icon" />
                                        </Tooltip>
                                    </ClickableDiv>
                                }

                                {(canCreateNewStub && isLocked) &&
                                    <ClickableDiv onClick={createPaystubClicked}>
                                        <Tooltip title="Create New Paystub">
                                            <FilePlus size={38} stroke="white" className="icon bg-primary/80 " />
                                        </Tooltip>
                                    </ClickableDiv>
                                }

                                {showWarning &&
                                    <motion.div
                                        key={"locked"}
                                        initial={{ opacity: 0, width: 0 }}
                                        exit={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                    >
                                        <ClickableDiv onClick={lockedBtn}>
                                            <Tooltip title="Warning!">
                                                <div>
                                                    {paystub.locked &&
                                                        <TriangleAlert stroke="white" size={38} className="bg-yellow-400 icon" />
                                                    }
                                                    {!paystub.locked &&
                                                        <OctagonAlert stroke="white" size={38} className="bg-orange-400 icon" />
                                                    }
                                                </div>
                                            </Tooltip>
                                        </ClickableDiv>
                                    </motion.div>
                                }
                            </AnimatePresence>


                        </div>
                    }

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
                            variant: 'linear-progress',
                            noRowsVariant: 'linear-progress',
                        },
                    }}
                />

            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-4">

                <AnimatePresence>
                    {(!stubUUID && activeStubs.length > 0) &&
                        <motion.div
                            key={"activeStubList"}
                            initial={{ opacity: 0, height: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}

                            className="card h-fit w-3xs"
                            style={{ zIndex: 100 }}
                        >
                            <h5>{`Active Paystubs: (Paydate)`}</h5>
                            <SelectInput searchable val={paystub.uuid} options={activeStubsOptions} changeCB={selectActiveStub} />
                        </motion.div>
                    }
                </AnimatePresence>

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
                        <Tooltip title="Import All Payroll Items (Organization, Compensation, and Employee Items)">
                            <button onClick={importAll} className="primary-button w-full mb-4">Import Payroll Items</button>
                        </Tooltip>
                        <Tooltip title="Import All Taxes">
                            <button onClick={importTaxes} className="primary-button w-full">Import Taxes</button>
                        </Tooltip>

                    </div>
                }
            </div>

        </div >
    )
}