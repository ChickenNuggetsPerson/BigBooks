'use client'

import { FilingTypes, Prisma, TaxBracket, TaxType } from "@/database/generated/prisma"
import { Divider } from "../Forms/Divider"
import CreateTaxButton from "./CreateTaxButton"
import { GridColDef, DataGrid, GridEventListener, GridRowParams, GridActionsCellItem, GridRenderCellParams } from "@mui/x-data-grid"
import toast from "react-hot-toast"
import { Pen, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import DateInput from "../Forms/DateInput"
import TextInput from "../Forms/TextInput"
import upsertTaxSnapshot from "@/actions/taxes/snapshots/upsertTaxSnapshot"
import { serializeData } from "@/utils/serialization"
import { MoneyToStr } from "@/utils/functions/MoneyStr"
import SelectInput from "../Forms/SelectInput"
import React from "react"



type TaxWithSnapshots = Prisma.TaxGetPayload<{ include: { snapshots: { include: { brackets: true } } } }>
type SnapshotWithBrackets = Prisma.TaxSnapshotGetPayload<{ include: { brackets: true } }>

function makeNewBracket(): TaxBracket {
    return {
        uuid: crypto.randomUUID(),
        taxSnapshotId: "",
        min: new Prisma.Decimal(0),
        hasMinBound: false,
        max: new Prisma.Decimal(0),
        hasMaxBound: false,
        filingType: FilingTypes.Single,
        type: TaxType.FlatRate,
        rate: new Prisma.Decimal(0),
        ammount: new Prisma.Decimal(0)
    }
}

export default function TaxEditForm({
    sysTaxes = false,
    loading = false,
    taxes = []
}: {
    sysTaxes?: boolean,
    loading?: boolean,
    taxes: TaxWithSnapshots[]
}) {

    const [selectedTax, setSelectedTax] = useState(null as TaxWithSnapshots | null)
    const [selectedSnapshot, setSelectedSnapshot] = useState(null as SnapshotWithBrackets | null)
    useEffect(() => {
        if (selectedTax) {
            const index = taxes.findIndex((f) => f.uuid == selectedTax.uuid)
            if (index === -1) { return }
            setSelectedTax(taxes[index])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [taxes])

    useEffect(() => {
        if (selectedSnapshot && selectedTax) {
            const index = selectedTax.snapshots.findIndex((f) => f.uuid == selectedSnapshot.uuid)
            if (index === -1) { return }
            setSelectedSnapshot(selectedTax.snapshots[index])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTax])

    const taxesColumns: GridColDef<TaxWithSnapshots>[] = [
        {
            field: 'name',
            headerName: 'Name',
            type: 'string',
            width: 300
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
            headerName: 'Through',
            valueFormatter: (value: Date) => value.toLocaleDateString()
        },
    ]

    const bracketColumns: GridColDef<TaxBracket>[] = [
        {
            field: 'filingType',
            headerName: 'Filing Type',
            editable: true,
            type: "custom",
            width: 160,
            renderCell: (params: GridRenderCellParams<TaxBracket, FilingTypes>) => (
                <SelectInput
                    options={[
                        { id: FilingTypes.Single, label: "Single" },
                        { id: FilingTypes.Joint, label: "Joint" }
                    ]}
                    val={params.value}
                    changeCB={(val) => updateBracket({ ...params.row, filingType: val as FilingTypes })}
                />
            ),
        },
        {
            field: 'min',
            headerName: 'Min',
            editable: true,
            type: "number",
            valueFormatter: (value: number, row) => row.hasMinBound ? MoneyToStr(value) : ""
        },
        {
            field: 'max',
            headerName: 'Max',
            editable: true,
            type: "number",
            valueFormatter: (value: number, row) => row.hasMaxBound ? MoneyToStr(value) : ""
        },
        // TODO: Add the rest of the properties for brackets ( type, rate, flat ammount )
    ]

    function updateBracket(bracket: TaxBracket) {
        if (!selectedSnapshot) { throw new Error("No Snapshot Selected") }

        const brackets = [...selectedSnapshot.brackets]
        const index = brackets.findIndex(e => e.uuid == bracket.uuid)
        if (index == -1) { throw new Error("Bracket UUID does not exist") }

        if (bracket.min) {
            bracket.min = new Prisma.Decimal(bracket.min)
            bracket.hasMinBound = !bracket.min.equals(0)
        }
        if (bracket.max) {
            bracket.max = new Prisma.Decimal(bracket.max)
            bracket.hasMaxBound = !bracket.max.equals(0)
        }

        brackets[index] = bracket
        setSelectedSnapshot({
            ...selectedSnapshot,
            brackets: brackets
        })

        return bracket
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

        toast.promise(async () => {
            await upsertTaxSnapshot(serializeData({
                uuid: "",
                description: "New Snapshot",
                taxId: selectedTax.uuid,
                effectiveThrough: new Date(),
                brackets: []
            }))
        }, {
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

    return (
        <div className="w-full flex flex-row justify-between gap-4">

            {/* Left Side */}
            <div className="flex flex-col h-full gap-4">

                <div className="h-fit w-md smallCard" style={{ padding: 15 }}>
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

                </div>

                {selectedTax &&
                    <motion.div
                        key={selectedTax.uuid}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring" }}

                        className="h-fit w-md smallCard"
                        style={{ padding: 15 }}
                    >
                        <div className="flex flex-row justify-between">
                            <p className="font-semibold text-xl">{selectedTax.name}</p>
                            <button onClick={newSnapshot} className="icon bg-primary/80 text-white font-semibold select-none cursor-pointer" style={{ paddingLeft: 10, paddingRight: 10 }}>
                                New Snapshot
                            </button>
                        </div>
                        <Divider />

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

                    </motion.div>
                }
            </div>

            <div className="w-full">

                {(selectedSnapshot && selectedTax) &&
                    <motion.div
                        key={selectedSnapshot.uuid}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring" }}

                        className="h-fit w-full smallCard"
                        style={{ padding: 15 }}
                    >
                        <div className="flex flex-row justify-between gap-12 mt-2">
                            <TextInput label="Description" val={selectedSnapshot.description ?? ""} onChange={(val) => setSelectedSnapshot({ ...selectedSnapshot, description: val })} />
                            <div className="mt-2">
                                <DateInput label="Valid Through: " val={selectedSnapshot.effectiveThrough} onChange={(val) => setSelectedSnapshot({ ...selectedSnapshot, effectiveThrough: val })} />
                            </div>
                            <button className="icon h-fit mt-2" onClick={() => setSelectedSnapshot({...selectedSnapshot, brackets: [...selectedSnapshot.brackets, makeNewBracket()]})}>
                                <Plus />
                            </button>
                            <div className="w-full text-center">
                                <button onClick={saveClicked} className="primary-button w-full"> Save </button>
                            </div>
                        </div>

                        <DataGrid
                            rows={selectedSnapshot.brackets}
                            columns={bracketColumns}
                            getRowId={(row) => row.uuid}
                            rowSelection={false}
                            rowHeight={60}

                            onRowClick={handleSnapshotEvent}
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
                                    sortModel: [{ field: "effectiveThrough", sort: "desc" }]
                                }
                            }}

                            disableColumnFilter
                            disableColumnSelector
                            disableDensitySelector
                        />

                    </motion.div>
                }

            </div>

        </div>
    )
}
