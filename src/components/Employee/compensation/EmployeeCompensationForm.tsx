'use client'

import { Divider } from "@/components/Forms/Divider";
import { deserializeData, SerializationResult, serializeData } from "@/utils/serialization";
import EmployeeCompensationAddButton from "./EmployeeCompensationAddButton";
import { Employee, Prisma } from "@/database/generated/prisma";
import { DataGrid, GridActionsCellItem, GridColDef, GridEventListener, GridRowParams } from "@mui/x-data-grid";
import { Pen } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import EmployeeCompensationFormCard from "./EmployeeCompensationFormCard";



type CompWithRatesAndGroup = Prisma.EmployeeCompensationGetPayload<{ include: { hourlyRates: true, payrollGroup: true } }>


export default function EmployeeCompensationForm({ payload, employee }: { payload: SerializationResult<CompWithRatesAndGroup[]>, employee: Employee }) {

    const list = deserializeData(payload)
    const [sel, setSel] = useState(null as string | null)

    const selected = list.find((v) => v.uuid == sel)
    const serializedSelected = serializeData(selected as CompWithRatesAndGroup)

    const compColumn: GridColDef<CompWithRatesAndGroup>[] = [
        {
            field: 'payrollGroup.name',
            headerName: 'Group',
            type: 'string',
            width: 230,
            renderCell: (params) => (<h1>{params.row.payrollGroup.name}</h1>),
        },
        { // Add Actions Column
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            getActions: (params: GridRowParams<CompWithRatesAndGroup>) => [
                <GridActionsCellItem key={params.row.uuid + "-edit"} icon={
                    <Pen />
                } onClick={() => {
                    if (sel === params.row.uuid) { return; }
                    setSel(params.row.uuid)
                }} label="Edit" />,
            ]
        }
    ]

    const handleCompClickEvent: GridEventListener<'rowClick'> = (params: GridRowParams<CompWithRatesAndGroup>) => {
        if (sel === params.row.uuid) { return; }
        setSel(params.row.uuid)
    };



    return (
        <div className="w-full flex flex-row justify-between gap-4">
            <motion.div
                className="card w-sm h-fit"
                animate={{
                    filter: `blur(${selected ? 2 : 0}px)`,
                    pointerEvents: selected ? "none" : "auto",
                    opacity: selected ? 0.1 : 1
                }}
                transition={{ duration: .5 }}
            >
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Compensations</h5>
                <Divider />
                <h6 className="mb-5 text-2xl tracking-tight text-gray-400">{`${employee.firstName} ${employee.lastName}`}</h6>

                <DataGrid
                    rows={list}
                    columns={compColumn}
                    getRowId={(row) => row.uuid}
                    rowSelection={false}
                    rowHeight={40}

                    onRowClick={handleCompClickEvent}

                    initialState={{
                        sorting: {
                            sortModel: [{ field: "name", sort: "asc" }]
                        }
                    }}

                    disableColumnFilter
                    disableColumnSelector
                    disableDensitySelector
                />

                <div className="h-6"></div>

                <EmployeeCompensationAddButton employee={employee} />
            </motion.div>

            {selected &&
                <div className="fixed">
                    <EmployeeCompensationFormCard data={serializedSelected} closeCB={() => setSel(null)} />
                </div>
            }
        </div>
    )
}