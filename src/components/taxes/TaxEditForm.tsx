'use client'

import { AvaliableStates, FilingTypes, Prisma, Tax, TaxBracket, TaxType } from "@/database/generated/prisma"
import { Divider } from "../Forms/Divider"
import CreateTaxButton from "./CreateTaxButton"
import { GridColDef, DataGrid, GridEventListener, GridRowParams, GridActionsCellItem } from "@mui/x-data-grid"
import toast from "react-hot-toast"
import { MoveLeft, Pen, Plus, X } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import DateInput from "../Forms/DateInput"
import TextInput from "../Forms/TextInput"
import upsertTaxSnapshot from "@/actions/taxes/snapshots/upsertTaxSnapshot"
import { deserializeData, SerializationResult, serializeData } from "@/utils/serialization"
import { MoneyToStr } from "@/utils/functions/MoneyStr"
import React from "react"
import LargeTextInput from "../Forms/LargeTextInput"
import deleteTaxSnapshot from "@/actions/taxes/snapshots/deleteTaxSnapshot"
import { promptUser } from "../Decorative/Modals/promptUser"
import { useModalManager } from "../Decorative/Modal/ModalContext"
import deleteTax from "@/actions/taxes/deleteTax"
import { useRouter } from "next/navigation"
import updateTax from "@/actions/taxes/updateTax"
import setTaxArchive from "@/actions/taxes/setTaxArchive"
import { CardProp } from "../Forms/CardProp"
import CheckboxInput from "../Forms/CheckboxInput"
import { percentToStr } from "@/utils/functions/PercentStr"
import { StateOptions } from "@/utils/taxes/calcTaxRates"
import SelectInput from "../Forms/SelectInput"


export type TaxWithSnapshots = Prisma.TaxGetPayload<{
    include: {
        snapshots: {
            include: {
                brackets: true,
                _count: { select: { paystubItems: true } }
            }
        }
    }
}>

// Extracts the type of a single snapshot from the `snapshots` array
export type SnapshotWithBrackets = TaxWithSnapshots['snapshots'][number]

const taxTypeOptions = [
    { id: TaxType.ProgressiveRate, label: "Progressive Tax" },
    { id: TaxType.FlatAmmount, label: "Flat Ammount" },
    { id: TaxType.FlatRate, label: "Flat Rate" }
]

function makeNewBracket(type: FilingTypes): TaxBracket {
    return {
        uuid: crypto.randomUUID(),
        taxSnapshotId: "",
        min: new Prisma.Decimal(0),
        hasMinBound: false,
        max: new Prisma.Decimal(0),
        hasMaxBound: false,
        filingType: type,
        rate: new Prisma.Decimal(0),
        ammount: new Prisma.Decimal(0)
    }
}

export default function TaxEditForm({
    sysTaxes = false,
    loading = false,
    taxesData = serializeData([])
}: {
    sysTaxes?: boolean,
    loading?: boolean,
    taxesData?: SerializationResult<TaxWithSnapshots[]>
}) {

    const taxes = deserializeData(taxesData)

    const router = useRouter()
    const { addModal } = useModalManager()
    const [selectedTax, setSelectedTax] = useState(null as TaxWithSnapshots | null)
    const [selectedSnapshot, setSelectedSnapshot] = useState(null as SnapshotWithBrackets | null)

    useEffect(() => {
        let isMounted = true;

        if (selectedTax) {
            const updatedTax = taxes.find((f) => f.uuid === selectedTax.uuid);
            if (isMounted) {
                setSelectedTax(updatedTax ?? null);
            }
        }

        return () => { isMounted = false };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [taxesData]);

    useEffect(() => {
        let isMounted = true;

        if (selectedTax && selectedSnapshot) {
            const updatedSnapshot = selectedTax.snapshots.find((s) => s.uuid === selectedSnapshot.uuid);
            if (isMounted) {
                setSelectedSnapshot(updatedSnapshot ?? null);
            }
        }

        return () => { isMounted = false };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTax]);


    const taxesColumns: GridColDef<TaxWithSnapshots>[] = [
        {
            field: 'name',
            headerName: 'Name',
            type: 'string',
            width: 220
        },
        {
            field: 'state',
            headerName: 'State',
            type: 'string',
            width: 80
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Edit',
            width: 75,
            getActions: (params: GridRowParams<TaxWithSnapshots>) => [
                <GridActionsCellItem key={params.row.uuid + "-edit"} icon={
                    <Pen />
                } onClick={() => {
                    editClicked(params.row)
                }} label="Edit" />,
            ]
        }
    ]

    const snapshotColumns: GridColDef<SnapshotWithBrackets>[] = [
        {
            field: 'description',
            headerName: 'Description',
            type: 'string',
            width: 250
        },
        {
            field: 'effectiveThrough',
            headerName: 'Effective Through',
            width: 180,
            valueFormatter: (value: Date) => value.toLocaleDateString()
        },
    ]

    const bracketColumns: GridColDef<TaxBracket>[] = [

        {
            field: 'min',
            headerName: 'Min',
            editable: true,
            type: "number",
            width: 150,
            valueFormatter: (value: number, row) => row.hasMinBound ? MoneyToStr(value) : ""
        },
        {
            field: 'max',
            headerName: 'Max',
            editable: true,
            type: "number",
            width: 150,
            valueFormatter: (value: number, row) => row.hasMaxBound ? MoneyToStr(value) : ""
        }
    ]

    if (selectedSnapshot?.taxType == TaxType.FlatAmmount) {
        bracketColumns.push({
            field: 'ammount',
            headerName: 'Flat Ammount',
            editable: true,
            type: "number",
            width: 120,
            valueFormatter: (value: number) => MoneyToStr(value)
        })
    } else {
        bracketColumns.push({
            field: 'rate',
            headerName: 'Rate',
            editable: true,
            type: "number",
            width: 120,
            valueFormatter: (value: number) => percentToStr(value)
        })
    }


    bracketColumns.push({ // Add Actions Column
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        getActions: (params: GridRowParams<TaxBracket>) => [
            <GridActionsCellItem key={params.row.uuid + "-delete"} icon={
                <X />
            } onClick={() => {
                deleteBracket(params.row)
            }} label="Delete" />,
        ]
    })

    function updateBracket(bracket: TaxBracket) {
        if (!selectedSnapshot) { throw new Error("No Snapshot Selected") }

        const brackets = [...selectedSnapshot.brackets]
        const index = brackets.findIndex(e => e.uuid == bracket.uuid)
        if (index == -1) { throw new Error("Bracket UUID does not exist") }

        bracket.min = new Prisma.Decimal(bracket.min ?? 0)
        bracket.hasMinBound = !bracket.min.equals(0)

        bracket.max = new Prisma.Decimal(bracket.max ?? 0)
        bracket.hasMaxBound = !bracket.max.equals(0)

        bracket.rate = new Prisma.Decimal(bracket.rate ?? 0)
        bracket.ammount = new Prisma.Decimal(bracket.ammount ?? 0)

        brackets[index] = bracket
        setSelectedSnapshot({
            ...selectedSnapshot,
            brackets: brackets
        })

        return bracket
    }

    function deleteBracket(bracket: TaxBracket) {
        if (!selectedSnapshot) { return }
        const brackets = selectedSnapshot.brackets.filter(b => b.uuid !== bracket.uuid)
        setSelectedSnapshot({ ...selectedSnapshot, brackets: brackets })
    }

    function editClicked(row: TaxWithSnapshots) {
        setSelectedTax(row)
    }

    const handleTaxListEvent: GridEventListener<'rowClick'> = (params: GridRowParams<TaxWithSnapshots>) => {
        if (selectedTax?.uuid == params.row.uuid) { return }
        setSelectedTax(params.row)
        setSelectedSnapshot(null)
    };

    const handleSnapshotEvent: GridEventListener<'rowClick'> = (params: GridRowParams<SnapshotWithBrackets>) => {
        if (selectedSnapshot?.uuid == params.row.uuid) { return }
        setSelectedSnapshot(params.row)
    };

    const handleProcessRowUpdateError = React.useCallback((error: Error) => {
        toast.error(error.message)
    }, []);

    function newSnapshot() {
        if (!selectedTax) { return }

        toast.promise(upsertTaxSnapshot(serializeData({
            uuid: "",
            description: "New Snapshot",
            taxId: selectedTax.uuid,
            effectiveThrough: new Date(),
            supportsJoint: false,
            brackets: [],
            taxType: TaxType.ProgressiveRate
        })), {
            loading: "Creating Tax Snapshot",
            success: "Tax Snapshot Created",
            error: "Error Creating Tax Snapshot"
        })
    }

    function saveClicked() {
        if (!selectedTax) { return }
        if (!selectedSnapshot) { return }

        toast.promise(async () => {
            await upsertTaxSnapshot(serializeData(selectedSnapshot))
        }, {
            loading: "Saving Tax Snapshot",
            success: "Tax Snapshot Saved",
            error: "Error Saving Tax Snapshot"
        })
    }

    function editTaxClicked() {
        if (!selectedTax) { return }

        addModal({
            title: `Edit ${selectedTax.name}`,
            component: (push, pop) => (<EditTaxModal initalTax={selectedTax} pop={pop} saveTax={(t: Tax) => {
                toast.promise(async () => {
                    await updateTax(t)
                    router.refresh()
                }, {
                    loading: "Saving Tax",
                    success: "Tax Details Saved",
                    error: "Error Saving Tax Details"
                })
            }} canDelete={canDeleteTax} />)
        })
    }

    async function clickedDeleteSnapshot() {
        if (!selectedSnapshot) { return }
        const result = await promptUser({
            addModal,
            title: "Delete Snapshot?",
            message: "This Tax Snapshot has no linked paystub items, so you are able to delete it.",
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
        toast.promise(deleteTaxSnapshot(selectedSnapshot.uuid), {
            loading: "Deleting Tax Snapshot",
            success: "Tax Snapshot Deleted",
            error: "Error Deleting Tax Snapshot"
        })
    }

    let canDeleteTax = false
    if (selectedTax) {
        canDeleteTax = selectedTax.snapshots.map(s => s._count.paystubItems).reduce((p, c) => p + c, 0) == 0
    }

    return (
        <div className="w-full flex flex-row justify-between gap-4">

            {/* Left Side */}
            <div className="flex flex-col h-full gap-4">

                <motion.div
                    className="h-fit w-md smallCard"
                    style={{ padding: 15 }}
                    animate={{
                        filter: `blur(${selectedTax ? 2 : 0}px)`,
                        pointerEvents: selectedTax ? "none" : "auto",
                        opacity: selectedTax ? 0.5 : 1
                    }}
                    transition={{ duration: .5 }}
                >
                    <div className="flex flex-row justify-between">
                        <p className="font-semibold text-xl">{sysTaxes ? "System" : "Organization"} Taxes:</p>
                        {!loading && <CreateTaxButton isSysTaxes={sysTaxes} />}
                    </div>
                    <Divider />

                    <DataGrid
                        rows={taxes}
                        columns={taxesColumns}
                        getRowId={(row) => row.uuid}
                        rowSelection={false}
                        rowHeight={40}

                        onRowClick={handleTaxListEvent}

                        loading={loading}
                        slotProps={{
                            loadingOverlay: {
                                variant: 'linear-progress',
                                noRowsVariant: 'linear-progress',
                            }
                        }}
                        initialState={{
                            sorting: {
                                sortModel: [{ field: "name", sort: "asc" }]
                            }
                        }}

                        disableColumnFilter
                        disableColumnSelector
                        disableDensitySelector
                    />

                </motion.div>

                {/* Tax View Card */}
                {selectedTax &&
                    <motion.div
                        key={selectedTax.uuid}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, translateX: selectedSnapshot ? 0 : 100 }}
                        transition={{ type: "spring" }}

                        className="h-fit w-md smallCard absolute top-30"
                        style={{ padding: 5 }}
                    >
                        <div className="smallCard" style={{ padding: 15 }}>

                            <div className="flex flex-row gap-4">
                                <button onClick={() => {
                                    setSelectedSnapshot(null)
                                    setSelectedTax(null)
                                }}>
                                    <MoveLeft />
                                </button>
                                <p className="font-semibold text-xl">{selectedTax.name}</p>
                            </div>
                            <Divider />
                            <div className="w-full bg-gray-300/20 p-2 rounded-xl font-mono">
                                <p>{"State: " + selectedTax.state}</p>
                                <p>{selectedTax.description}</p>
                            </div>
                            <Divider />

                            <div className="w-full flex flex-row justify-between mb-2">

                                <button onClick={editTaxClicked} className="accent-button cursor-pointer w-4/9" style={{ paddingLeft: 10, paddingRight: 10 }}>
                                    Edit Tax
                                </button>
                                <button onClick={newSnapshot} className="primary-button cursor-pointer w-4/9" style={{ paddingLeft: 10, paddingRight: 10 }}>
                                    New Snapshot
                                </button>
                            </div>


                            <DataGrid
                                rows={selectedTax.snapshots}
                                columns={snapshotColumns}
                                getRowId={(row) => row.uuid}
                                rowSelection={false}
                                rowHeight={40}

                                onRowClick={handleSnapshotEvent}

                                loading={loading}
                                slotProps={{
                                    loadingOverlay: {
                                        variant: 'linear-progress',
                                        noRowsVariant: 'linear-progress',
                                    }
                                }}
                                initialState={{
                                    sorting: {
                                        sortModel: [{ field: "effectiveThrough", sort: "desc" }]
                                    }
                                }}

                                disableColumnFilter
                                disableColumnSelector
                                disableDensitySelector
                            />

                        </div>

                    </motion.div>
                }
            </div>

            {/* Right Side */}
            <div className="w-full">

                {(selectedSnapshot && selectedTax) &&
                    <motion.div
                        key={selectedSnapshot.uuid}
                        initial={{ opacity: 0, translateX: 50 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        transition={{ type: "spring" }}

                        className="h-fit w-xl smallCard mb-50 mx-auto"
                        style={{ padding: 5 }}
                    >
                        <div className="smallCard" style={{ padding: 15 }}>
                            <div className="flex flex-row justify-between gap-10 mt-2">
                                <TextInput label="Description" val={selectedSnapshot.description ?? ""} onChange={(val) => setSelectedSnapshot({ ...selectedSnapshot, description: val })} />

                                {selectedSnapshot._count.paystubItems == 0 &&
                                    <div className="w-full text-center">
                                        <button onClick={clickedDeleteSnapshot} className="danger-button w-full"> Delete </button>
                                    </div>
                                }
                                <div className="w-full text-center">
                                    <button onClick={saveClicked} className="primary-button w-full"> Save </button>
                                </div>
                            </div>


                            <div className="flex flex-row gap-4 mb-4">
                                <div className="w-1/3">
                                    <SelectInput label="Tax Type:" val={selectedSnapshot.taxType} options={taxTypeOptions} changeCB={(val) => setSelectedSnapshot({ ...selectedSnapshot, taxType: val as TaxType })} />
                                </div>
                                <DateInput label="Valid Through: " val={selectedSnapshot.effectiveThrough} onChange={(val) => setSelectedSnapshot({ ...selectedSnapshot, effectiveThrough: val })} />
                                <div className="w-full">
                                    <CheckboxInput label="Supports Joint" val={selectedSnapshot.supportsJoint} changeCB={(val) => setSelectedSnapshot({ ...selectedSnapshot, supportsJoint: val })} />
                                </div>
                            </div>

                            <Divider />

                            <div className="flex flex-row gap-4 mb-2">
                                <p className="font-semibold text-xl mt-1">{selectedSnapshot.supportsJoint ? "Single Brackets:" : "Brackets:"}</p>
                                <button className="icon h-fit" onClick={() => setSelectedSnapshot({ ...selectedSnapshot, brackets: [...selectedSnapshot.brackets, makeNewBracket(FilingTypes.Single)] })}>
                                    <Plus />
                                </button>
                            </div>

                            <DataGrid
                                rows={selectedSnapshot.brackets.filter(b => b.filingType == FilingTypes.Single)}
                                columns={bracketColumns}
                                getRowId={(row) => row.uuid}
                                rowSelection={false}
                                rowHeight={30}

                                processRowUpdate={(updatedRow) => updateBracket(updatedRow)}
                                onProcessRowUpdateError={handleProcessRowUpdateError}

                                loading={loading}
                                slotProps={{
                                    loadingOverlay: {
                                        variant: 'linear-progress',
                                        noRowsVariant: 'linear-progress',
                                    }
                                }}
                                initialState={{
                                    sorting: {
                                        sortModel: [{ field: "min", sort: "asc" }]
                                    }
                                }}

                                disableColumnFilter
                                disableColumnSelector
                                disableDensitySelector
                            />

                            {selectedSnapshot.supportsJoint &&
                                <motion.div
                                    key={selectedSnapshot.uuid + "-joint"}
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring" }}
                                >
                                    <Divider />
                                    <div className="flex flex-row w-full gap-4 mb-2">
                                        <p className="font-semibold text-xl mt-1">Joint Brackets: </p>
                                        <button className="icon h-fit" onClick={() => setSelectedSnapshot({ ...selectedSnapshot, brackets: [...selectedSnapshot.brackets, makeNewBracket(FilingTypes.Joint)] })}>
                                            <Plus />
                                        </button>
                                    </div>
                                    <DataGrid
                                        rows={selectedSnapshot.brackets.filter(b => b.filingType == FilingTypes.Joint)}
                                        columns={bracketColumns}
                                        getRowId={(row) => row.uuid}
                                        rowSelection={false}
                                        rowHeight={30}

                                        processRowUpdate={(updatedRow) => updateBracket(updatedRow)}
                                        onProcessRowUpdateError={handleProcessRowUpdateError}

                                        loading={loading}
                                        slotProps={{
                                            loadingOverlay: {
                                                variant: 'linear-progress',
                                                noRowsVariant: 'linear-progress',
                                            }
                                        }}
                                        initialState={{
                                            sorting: {
                                                sortModel: [{ field: "min", sort: "asc" }]
                                            }
                                        }}

                                        disableColumnFilter
                                        disableColumnSelector
                                        disableDensitySelector
                                    />
                                </motion.div>
                            }
                        </div>
                    </motion.div>
                }

            </div>

        </div>
    )
}



function EditTaxModal({
    initalTax,
    pop,
    saveTax,
    canDelete
}: {
    initalTax: Tax
    pop: () => void,
    saveTax: (t: Tax) => void,
    canDelete: boolean
}) {

    const { addModal } = useModalManager()
    const router = useRouter()
    const [taxState, setTaxState] = useState(initalTax)

    async function clickedDeleteTax() {
        if (!canDelete) { return }

        const result = await promptUser({
            addModal,
            title: "Delete Tax?",
            message: "This tax has no linked paystub items, so you are allowed to delete it.",
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

        toast.promise(async () => {
            await deleteTax(taxState.uuid)
            router.refresh()
        }, {
            loading: "Deleting Tax",
            success: `${taxState.name} Deleted`,
            error: "Error Deleting Tax"
        })

        pop()
    }

    async function clickedArchive() {
        const result = await promptUser({
            addModal,
            title: "Are you sure?",
            message: `Are you sure that you want to ${taxState.archived ? "unarchive" : "archive"} this tax?`,
            falseButton: {
                title: "Cancel",
                type: "accent"
            },
            trueButton: {
                title: taxState.archived ? "Unarchive" : "Archive",
                type: "danger"
            }
        })
        if (!result) { return }

        toast.promise(async () => {
            await setTaxArchive(taxState.uuid, !taxState.archived)
            router.refresh()
        }, {
            loading: "Updating Tax",
            success: `${taxState.name} ${taxState.archived ? "Unarchived" : "Archived"}`,
            error: "Error Updating Tax"
        })

        pop()
    }

    let taxStatus = ""
    if (canDelete) {
        taxStatus = "Can Delete"
    } else {
        if (taxState.archived) {
            taxStatus = "Can Be Archived"
        } else {
            taxStatus = "Can Be Unrchived"
        }
    }

    return (
        <div className="w-sm pt-2">

            <div className="w-full flex flex-row justify-between gap-8">
                <TextInput label="Name:" val={taxState.name} onChange={(val) => setTaxState({ ...taxState, name: val })} />
                <SelectInput label={"State of Residence"} val={taxState.state} options={StateOptions} changeCB={(val) => setTaxState({ ...taxState, state: val as AvaliableStates })} searchable />
            </div>
            <LargeTextInput label="Description:" val={taxState.description ?? ""} onChange={(val) => setTaxState({ ...taxState, description: val })} />

            <div className="w-full flex flex-row justify-between mb-4">

                <div className="mt-2">
                    <CardProp label={"Status:"} val={taxStatus} />
                </div>

                {canDelete &&
                    <button type="submit" className={`danger-button w-4/9 opacity-70`} onClick={clickedDeleteTax}>Delete</button>
                }
                {!canDelete &&
                    <>
                        {taxState.archived &&
                            <button type="submit" className={`primary-button w-4/9 opacity-70`} onClick={clickedArchive}>Unarchive</button>
                        }
                        {!taxState.archived &&
                            <button type="submit" className={`danger-button w-4/9 opacity-70`} onClick={clickedArchive}>Archive</button>
                        }
                    </>
                }
            </div>

            <div className="w-full flex flex-row justify-between">
                <button type="submit" className={`accent-button w-4/9`} onClick={() => {
                    pop()
                }}>Cancel</button>
                <button type="submit" className={`primary-button w-4/9`} onClick={() => {
                    pop()
                    saveTax(taxState)
                }}>Save</button>
            </div>
        </div>
    )
}