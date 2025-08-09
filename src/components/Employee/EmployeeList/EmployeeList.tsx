'use client'

import getEmployeeList from "@/actions/employee/getEmployeeList";
import { useCompany } from "@/app/CompanyContext";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimateChildren from "../../Decorative/AnimateChildren";
import { ColumnFilter, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortDirection, useReactTable } from "@tanstack/react-table";

import TextInput from "@/components/Forms/TextInput";
import SelectInput from "@/components/Forms/SelectInput";
import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import NumericText from "@/components/Decorative/NumericText/NumericText";
import { limitString } from "@/utils/functions/StringFunctions";
import { Employee } from "@/database/generated/prisma";
import { useUrlState } from "state-in-url";



interface EmployeeListProps {

    clickCB?: (emp: Employee) => void
    searchable?: boolean
    pageination?: boolean
    pageCount?: number
}
export default function EmployeeList({
    clickCB = () => { },
    searchable = false,
    pageination = false,
    pageCount = 10
}: EmployeeListProps) {

    const { context } = useCompany()

    const [list, setList] = useState([] as Employee[])

    const { urlState, setUrl } = useUrlState({
        search: "",
        filter: "firstName",
        showDeact: 2
    });

    const [columnFilters, setColumnFilters] = useState([] as ColumnFilter[])

    const [loading, setLoading] = useState(false)


    const colums = [
        {
            accessorKey: "firstName",
            header: "First",
        },
        {
            accessorKey: "lastName",
            header: "Last",
        },
        {
            accessorKey: "email",
            header: "Email",
        }
    ]

    colums.push({
        accessorKey: "phoneNumber",
        header: "Phone Number",
    })

    const table = useReactTable({
        data: list,
        columns: colums,
        state: {
            columnFilters
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: pageination ? getPaginationRowModel() : undefined,
        columnResizeMode: "onChange"
    })

    useEffect(() => { // Fetch data

        setLoading(true)
        async function load() {
            // 1 For All, 2 For Visable, 3 for Deactivated
            const l = await getEmployeeList(context?.companyUUID ?? "", urlState.showDeact)
            setList(l)
            setLoading(false)
        }

        load()
    }, [context, urlState.showDeact])

    useEffect(() => {
        setColumnFilters([{ id: urlState.filter, value: urlState.search }])
    }, [urlState.filter, urlState.search])

    useEffect(() => {
        table.getColumn("lastName")?.toggleSorting(false)
        table.setPageSize(pageCount)
    }, [pageCount, table])

    return (
        <AnimateChildren y={-20} className={`card flex flex-col w-full`}>

            {searchable &&
                <div className={`flex flex-row justify-between gap-10`}>

                    <div className={`w-full ${!pageination ? "translate-y-4" : ""}`}>
                        <TextInput label="Search" val={urlState.search} onChange={(val) => { setUrl({ search: val }) }} />
                    </div>

                    <SelectInput
                        label="Search By"
                        val={urlState.filter}
                        options={colums.filter((col) => col.accessorKey !== "selected").map((col) => ({
                            label: col.header,
                            id: col.accessorKey
                        }))}
                        changeCB={(val) => { setUrl({ filter: val }) }}
                    />

                    <SelectInput
                        label="Show"
                        val={String(urlState.showDeact)}
                        options={[{ id: "1", label: "All" }, { id: "2", label: "Active" }, { id: "3", label: "Deactivated" }]}
                        changeCB={(val) => setUrl({ showDeact: Number(val) })}
                    />

                </div>
            }

            {pageination &&
                <div className="flex flex-row justify-start max-w-md pb-1 select-none">
                    <ChevronLeft strokeWidth={1.5} onClick={() => { if (table.getCanPreviousPage()) { table.previousPage() } }} className="mr-1" />
                    <ChevronRight strokeWidth={1.5} onClick={() => { if (table.getCanNextPage()) { table.nextPage() } }} className="mr-5" />

                    <NumericText val={`Page ${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()}`} spacing={-7} animDelta={0} />
                </div>
            }

            <table className="w-full table-fixed">
                <thead>
                    {table.getHeaderGroups().map((group) => (
                        <tr key={group.id}>
                            {group.headers.map((header) => (
                                <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                                    <div className="flex flex-row justify-center select-none">

                                        {header.column.columnDef.header?.toString()}

                                        <div className="scale-70">
                                            {{
                                                asc: <ArrowUp />,
                                                desc: <ArrowDown />,
                                            }[header.column.getIsSorted() as SortDirection]}
                                        </div>

                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    <AnimatePresence>
                        {table.getRowModel().rows.map((row, i) => (
                            <motion.tr
                                key={row.id}

                                initial={{ opacity: 1, height: 0, fontSize: 0, borderWidth: "0px" }}
                                animate={{ opacity: 1, height: 40, fontSize: "15px", borderWidth: "1px" }}
                                exit={{ opacity: 1, height: 0, fontSize: 0, border: 0, borderColor: "white" }}

                                transition={{ duration: 0.3, type: 'linear', delay: (i * 0.05) }}

                                className="cursor-pointer select-none overflow-y-clip bg-card border border-gray-100 shadow-sm hover:bg-gray-100"
                                onClick={() => clickCB(row.original)}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td className="text-center" key={cell.id}>

                                        <p>{limitString(cell.getValue() as string ?? "", 25)}</p>

                                    </td>
                                ))}

                            </motion.tr>
                        ))}
                    </AnimatePresence>
                </tbody>


            </table>

            {loading &&
                <div className="my-2 w-full flex justify-center">
                    <p className="font-mono animate-pulse">Loading...</p>
                </div>
            }

        </AnimateChildren>
    )
}


