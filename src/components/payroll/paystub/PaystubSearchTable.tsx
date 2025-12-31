'use client'

import getPaystubs from "@/actions/paystub/getPaystubs"
import ClickableDiv from "@/components/Decorative/ClickableDiv"
import { PayStub, Prisma } from "@/database/generated/prisma"
import { MoneyToStr } from "@/utils/functions/MoneyStr"
import { deserializeData } from "@/utils/serialization"
import { DataGrid, GridColDef, GridFilterListIcon, GridFilterModel, GridRenderCellParams, useGridApiRef } from "@mui/x-data-grid"
import { GridToolbar } from "@mui/x-data-grid/internals"
import { useEffect, useState } from "react"


type PaystubsResult = Prisma.PayStubGetPayload<{
    include: {
        employee: {
            select: {
                firstName: true
                lastName: true
            }
        }
    }
}>

export default function PaystubSearchTable() {

    const apiRef = useGridApiRef()

    const [paystubs, setPaystubs] = useState<PaystubsResult[]>([])
    const [loading, setLoading] = useState(false)
    const [filterModel, setFilterModel] = useState<GridFilterModel>({
        items: []
    })

    useEffect(() => {
        load({})
    }, [])

    async function load(filters: any) {
        setLoading(true)
        const data = await getPaystubs(filters)
        setPaystubs(deserializeData(data))
        setLoading(false)
    }

    function muiFiltersToPaystubFilters(model: GridFilterModel) {
        const filters: any = {}

        for (const item of model.items) {
            if (!item.field || !item.value) continue

            filters[item.field] ??= {}

            switch (item.field) {

                // ───── DATE FIELDS ─────
                case "payDate":
                case "periodStart":
                case "periodEnd": {
                    const date = new Date(item.value)
                    if (item.operator === "after" || item.operator === ">=") {
                        filters[item.field].gte = date
                    }
                    if (item.operator === "before" || item.operator === "<=") {
                        filters[item.field].lte = date
                    }
                    break
                }

                // ───── NUMBER FIELDS ─────
                case "grossEarnings":
                case "totalTaxes":
                case "totalExtras":
                case "netPay": {
                    const num = Number(item.value)
                    if (item.operator === ">=") filters[item.field].gte = num
                    if (item.operator === "<=") filters[item.field].lte = num
                    break
                }

                // ───── BOOLEAN ─────
                case "locked":
                    filters.locked = item.value === "true"
                    break
            }
        }

        return filters
    }

    async function handleFilterChange(model: GridFilterModel) {
        setFilterModel(model)
        const prismaFilters = muiFiltersToPaystubFilters(model)
        await load(prismaFilters)
    }


    const columns: GridColDef<PaystubsResult>[] = [
        {
            field: 'name',
            headerName: 'Name',
            type: 'string',
            width: 200,
            renderCell: (params: GridRenderCellParams<PaystubsResult, string>) => (
                <p>{`${params.row.employee.firstName} ${params.row.employee.lastName}`}</p>
            ),
        },
        {
            field: 'payDate',
            headerName: 'Paydate',
            type: "date",
            filterable: true
        },
        {
            field: 'periodStart',
            headerName: 'Period Start',
            type: "date",
            filterable: true
        },
        {
            field: 'periodEnd',
            headerName: 'Period End',
            type: "date",
            filterable: true
        },
        {
            field: 'grossEarnings',
            headerName: 'Gross',
            type: "number",
            filterable: true,
            renderCell: (params: GridRenderCellParams<PaystubsResult, string>) => {

                const amt = new Prisma.Decimal(params.row.grossEarnings)
                const val = MoneyToStr(amt.toNumber())

                return (<p>{val}</p>)
            },
        },
        {
            field: 'totalTaxes',
            headerName: 'Tax',
            type: "number",
            filterable: true,
            renderCell: (params: GridRenderCellParams<PaystubsResult, string>) => {

                const amt = new Prisma.Decimal(params.row.totalTaxes)
                const val = MoneyToStr(amt.toNumber())

                return (<p>{val}</p>)
            },
        },
        {
            field: 'totalExtras',
            headerName: 'Extra',
            type: "number",
            filterable: true,
            renderCell: (params: GridRenderCellParams<PaystubsResult, string>) => {

                const amt = new Prisma.Decimal(params.row.totalExtras)
                const val = MoneyToStr(amt.toNumber())

                return (<p>{val}</p>)
            },
        },
        {
            field: 'netPay',
            headerName: 'Net Pay',
            type: "number",
            filterable: true,
            renderCell: (params: GridRenderCellParams<PaystubsResult, string>) => {

                const amt = new Prisma.Decimal(params.row.netPay)
                const val = MoneyToStr(amt.toNumber())

                return (<p>{val}</p>)
            },
        },
        // {
        //     field: 'actions',
        //     type: 'actions',
        //     headerName: 'Actions',
        //     width: 130,
        //     getActions: (params: GridRowParams<PayStubItem>) => [
        //         <GridActionsCellItem disabled={isLocked} key={params.row.uuid + "-desc"} icon={
        //             <NotebookPen opacity={params.row.description ? 1 : 0.3} />
        //         } onClick={() => {
        //             showDescriptionModal(params.row)
        //         }} label="Description" />,

        //         <GridActionsCellItem disabled={isLocked} key={params.row.uuid + "-link"} icon={
        //             <Link opacity={(params.row.payrollItemId || params.row.compensationId || params.row.hourlyRateId || params.row.taxID) ? 1 : 0.3} />
        //         } onClick={() => {
        //             if (params.row.taxID) {
        //                 toast("Cannot Edit Link: (Linked to Tax)")
        //             } else {
        //                 showLinkItemModal(params.row)
        //             }
        //         }} label="Link" />,

        //         <GridActionsCellItem disabled={isLocked} key={params.row.uuid + "-delete"} icon={
        //             <X />
        //         } onClick={() => {
        //             deleteItem(params.row)
        //         }} label="Delete" />,
        //     ]
        // }
    ]

    return (
        <div>

            <div className="flex mb-5 align-right w-full">
                <ClickableDiv
                    className="smallCard w-fit select-none"
                    onClick={() => apiRef.current?.showFilterPanel()}
                >
                    <p className="px-2">Search</p>
                </ClickableDiv>
            </div>

            <DataGrid
                apiRef={apiRef}
                rows={paystubs}
                columns={columns}
                getRowId={(row) => row.uuid}
                rowHeight={60}
                loading={loading}
                filterMode="server"
                filterModel={filterModel}
                onFilterModelChange={handleFilterChange}
                slots={{
                    toolbar: GridToolbar,
                }}
                disableRowSelectionOnClick
            />

        </div >
    )
}