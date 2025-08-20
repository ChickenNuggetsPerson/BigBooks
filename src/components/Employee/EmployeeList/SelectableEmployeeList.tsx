'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Employee, Prisma } from "@/database/generated/prisma"
import { useCompany } from "@/app/CompanyContext"
import { ColumnsPanelTrigger, DataGrid, FilterPanelTrigger, GridColDef, GridRowSelectionModel, QuickFilter, QuickFilterClear, QuickFilterControl, QuickFilterTrigger, Toolbar, ToolbarButton } from '@mui/x-data-grid';
import getEmployeeListWithComps from "@/actions/employee/getEmployeeListWithComps"
import getOrgPayrollGroups from "@/actions/payrollGroup/getOrgPayrollGroups"
import { Search, Trash2, X } from "lucide-react"
import { deserializeData } from "@/utils/serialization"
import { Divider } from "@/components/Forms/Divider"
import toast from "react-hot-toast"
import { areSetsEqual } from "@/utils/functions/Sets"
import { useRouter } from "next/navigation"
import { PayrollSteps } from "@/components/payroll/draftsystem/DraftPaths"





export default function SelectableEmployeeList({ selectCB, preSelected }: {
    selectCB: (selected: string[]) => void, preSelected: string[]
}) {

    const { context } = useCompany()
    const router = useRouter()
    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>({ type: 'include', ids: new Set() });
    const [employees, setEmployees] = useState([] as Prisma.EmployeeGetPayload<{ include: { compensations: true } }>[])

    const [selected, setSelected] = useState(new Set<string>())
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function load() {
            setLoading(true)

            let emps = deserializeData(await getEmployeeListWithComps())
            const grps = await getOrgPayrollGroups()

            emps = emps.map((employee => {
                return {
                    groups: employee.compensations.map((comp) => grps.find(v => v.uuid == comp.payrollGroupId)?.name).join(", "),
                    ...employee
                }
            }))

            setEmployees(emps)
            setLoading(false)
        }
        load()
    }, [context?.companyUUID])

    const columns: GridColDef<Employee>[] = [
        { field: 'firstName', headerName: 'First', width: 100 },
        { field: 'lastName', headerName: 'Last', width: 100 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'groups', headerName: 'Group', width: 160 },
        {
            field: 'included', headerName: 'Remove', width: 300,
            renderCell(params) {

                const included = selected.has(params.row.uuid)

                if (!included) {
                    return (<></>)
                }
                return (
                    <button onClick={() => removeEmployee(params.row)}>
                        <Trash2 className="icon" />
                    </button>
                )
            },
        },
    ]


    useEffect(() => {
        setSelected(new Set(preSelected))
    }, [preSelected])

    function add() {
        const newSelection = new Set<string>()
        selected.forEach((v1, v2) => newSelection.add(v2))

        rowSelectionModel.ids.forEach((v1, v2) => {
            if (selected.has(v2 as string)) { return }
            newSelection.add(v2 as string)
        })

        setSelected(newSelection)
        setRowSelectionModel({
            type: "include",
            ids: new Set<string>()
        })
        toast.success("Added to Selection")
    }

    function clear() {
        setSelected(new Set())
        setRowSelectionModel({
            type: "include",
            ids: new Set<string>()
        })
    }

    function saveSelection() {
        callCB(selected)
    }

    function removeEmployee(e: Employee) {
        const newSelection = new Set<string>()
        selected.forEach((v1, v2) => newSelection.add(v2))

        newSelection.delete(e.uuid)

        setSelected(newSelection)
        setRowSelectionModel({
            type: "include",
            ids: new Set<string>()
        })
    }

    function callCB(newSelection: Set<string>) {
        selectCB([...newSelection])
    }

    const canSave = !areSetsEqual(new Set(preSelected), selected)
    const canAdd = rowSelectionModel.ids.size !== 0
    const canClear = selected.size !== 0

    return (
        <div className="flex flex-row gap-5 w-lg">

            <div className="card w-3xl" style={{ paddingBottom: 90 }}>
                <div className="flex justify-end w-full gap-4 mb-4">
                    <motion.button
                        className="primary-button"
                        onClick={add}
                        disabled={!canAdd}
                        animate={{ opacity: canAdd ? 1 : .5 }}
                    >
                        Add To Selection
                    </motion.button>

                    <motion.button
                        className="secondary-button"
                        onClick={clear}
                        disabled={!canClear}
                        animate={{ opacity: canClear ? 1 : .5 }}
                    >
                        Clear Selection
                    </motion.button>
                </div>

                <DataGrid
                    checkboxSelection
                    showToolbar
                    rows={employees}
                    columns={columns}
                    getRowId={(row) => row.uuid}
                    onRowSelectionModelChange={(newRowSelectionModel) => {
                        setRowSelectionModel(newRowSelectionModel);
                    }}
                    rowSelectionModel={rowSelectionModel}
                    slots={{ toolbar: CustomToolbar }}
                    isRowSelectable={(params) => !selected.has(params.id as string)}

                    loading={loading}
                    slotProps={{
                        loadingOverlay: {
                            variant: 'linear-progress',
                            noRowsVariant: 'linear-progress',
                        },
                    }}
                />
            </div>

            <div>
                <div className="card h-fit mb-5 select-none" style={{ width: 270 }}>

                    <p className="mb-2">
                        Select employees to do payroll for.
                    </p>

                    <Divider />

                    <motion.div
                        animate={{ opacity: canSave ? 1 : .5 }}
                    >
                        <button className="primary-button flex flex-row" disabled={!canSave} onClick={saveSelection}>
                            Save Selection
                        </button>
                    </motion.div>

                </div>

                <button className="accent-button w-full" onClick={() => {
                    router.push(`/organization/payroll/${PayrollSteps[2].path}`)
                }}>
                    Next Page
                </button>
            </div>
        </div>
    )
}





function CustomToolbar() {
    return (
        <Toolbar className="gap-2! p-2!">

            <ColumnsPanelTrigger
                render={<ToolbarButton render={<Button>Columns</Button>} />}
            />
            <FilterPanelTrigger
                render={<ToolbarButton render={<Button>Filter</Button>} />}
            />

            <QuickFilter
                render={(props, state) => (
                    <div {...props} className="ml-auto flex overflow-clip">
                        <QuickFilterTrigger
                            className={state.expanded ? 'rounded-r-none border-r-0' : ''}
                            render={
                                <ToolbarButton
                                    render={
                                        <Button aria-label="Search">
                                            <Search />
                                        </Button>
                                    }
                                />
                            }
                        />
                        <div
                            className={`flex overflow-clip transition-all duration-300 ease-in-out ${state.expanded ? 'w-48' : 'w-0'}`}
                        >
                            <QuickFilterControl
                                aria-label="Search"
                                placeholder="Search"
                                render={({ slotProps, ...controlProps }) => (
                                    <TextInput
                                        {...controlProps}
                                        {...slotProps?.htmlInput}
                                        size={1}
                                        className={`flex-1 rounded-l-none ${state.expanded && state.value !== '' && 'rounded-r-none'}`}
                                    />
                                )}
                            />
                            {state.expanded && state.value !== '' && (
                                <QuickFilterClear
                                    render={
                                        <Button aria-label="Clear" className="rounded-l-none">
                                            <X fontSize="small" />
                                        </Button>
                                    }
                                />
                            )}
                        </div>
                    </div>
                )}
            />
        </Toolbar>
    );
}






function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            type="button"
            {...props}
            className={`flex h-9 items-center justify-center rounded border border-neutral-200 cursor-pointer bg-neutral-50 px-2.5 text-sm font-bold text-neutral-700 whitespace-nowrap select-none hover:bg-neutral-100focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-600 active:bg-neutral-100 ${props.className}`}
        />
    );
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className={`h-9 w-full rounded border border-neutral-200 px-2.5 text-base text-neutral-900 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 ${props.className}`}
        />
    );
}
