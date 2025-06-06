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


export default function SelectableEmployeeList({ selectCB, preSelected }: {
    selectCB: (selected: string[]) => void, preSelected: string[]
}) {

    const { context } = useCompany()
    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>({ type: 'include', ids: new Set() });
    const [employees, setEmployees] = useState([] as Prisma.EmployeeGetPayload<{ include: { compensations: true } }>[])

    const [selected, setSelected] = useState(new Set<string>())

    useEffect(() => {
        async function load() {

            let emps = deserializeData(await getEmployeeListWithComps())
            const grps = await getOrgPayrollGroups()

            emps = emps.map((employee => {
                return {
                    groups: employee.compensations.map((comp) => grps.find(v => v.uuid == comp.payrollGroupId)?.name).join(", "),
                    ...employee
                }
            }))

            setEmployees(emps)
        }
        load()
    }, [context?.companyUUID])

    const columns: GridColDef[] = [
        { field: 'firstName', headerName: 'First', width: 100 },
        { field: 'lastName', headerName: 'Last', width: 100 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'groups', headerName: 'Group', width: 300 },
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
        selectCB([...newSelection])
        toast.success("Added to Selection")
    }

    function clear() {
        setSelected(new Set())
        setRowSelectionModel({
            type: "include",
            ids: new Set<string>()
        })
        selectCB([])
        toast.success("Cleared Selection")
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
        selectCB([...newSelection])
        toast.success(`Removed ${e.firstName}`)
    }

    const canSave = rowSelectionModel.ids.size !== 0

    return (
        <div className="flex flex-row gap-5">

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
            />

            <div>
                <div className="card h-fit mb-5" style={{ width: 270 }}>

                    <p className="mb-2">
                        Select employees to do payroll for.
                    </p>

                    <motion.div
                        animate={{ opacity: canSave ? 1 : 0.5 }}
                        key={"save button"}
                    >
                        <button className="primary-button flex flex-row" disabled={!canSave} onClick={add}>
                            Add To Selection
                        </button>
                    </motion.div>

                    <Divider />

                    <button className="secondary-button flex flex-row" onClick={clear}>
                        Clear Selection
                    </button>

                </div>

                {selected.size !== 0 &&
                    <div style={{ width: 270 }} className="card select-none">
                        <h1 className="font-semibold">Selected: </h1>
                        <Divider />
                        <div className="bg-gray-100 rounded-md p-2 overflow-y-scroll max-h-30">
                            {[...selected].map((uuid => {

                                const employee = employees.find((e) => e.uuid == uuid)
                                if (!employee) { return <div key={uuid}></div> }

                                return (
                                    <div key={uuid} className="flex flex-row w-full pb-1">
                                        <Trash2 className="mr-2" onClick={() => {removeEmployee(employee)}}/>
                                        {`${employee?.firstName} ${employee?.lastName}`}
                                    </div>
                                )
                            }))}
                        </div>
                    </div>
                }

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
            className={`flex h-9 items-center justify-center rounded border border-neutral-200 cursor-pointer dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 px-2.5 text-sm font-bold text-neutral-700 dark:text-neutral-200 whitespace-nowrap select-none hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-600 active:bg-neutral-100 dark:active:bg-neutral-700 ${props.className}`}
        />
    );
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className={`h-9 w-full rounded border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 px-2.5 text-base text-neutral-900 dark:text-neutral-200 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 ${props.className}`}
        />
    );
}
