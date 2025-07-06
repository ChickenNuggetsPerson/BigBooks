'use client'


import { useEffect, useState } from "react";
import getOrgList, { OrgWithRole } from "@/actions/organization/getOrgList";
import CheckboxInput from "../Forms/CheckboxInput";
import { useChangeSelectedOrg } from "./changeSelectedOrg";
import { DataGrid, GridColDef, GridEventListener, GridRenderCellParams, GridRowParams } from "@mui/x-data-grid";




export default function OrganizationList({
    showBackground = false,
    refreshCB = () => { }
}: {
    showBackground?: boolean
    refreshCB?: () => void
}) {

    const changeSelectOrg = useChangeSelectedOrg()

    const [loading, setLoading] = useState(false)
    const [orgs, setOrgs] = useState([] as OrgWithRole[])
    const [filteredList, setFilteredList] = useState([] as OrgWithRole[])
    const [showDeleted, setShowDeleted] = useState(false)

    useEffect(() => {
        setLoading(true)
        async function load() {
            const list = await getOrgList(showDeleted)
            setOrgs(list)
            setFilteredList(list)
            setLoading(false)
        }
        load()
    }, [showDeleted])

    const inputHandler = (e: { target: { value: string; }; }) => { // Filter search
        const search = e.target.value.toLowerCase();
        const f = orgs.filter((i) => {

            return i.name.toLowerCase().includes(search) || i.address.includes(search)
        })

        setFilteredList(f)
    };

    const columns: GridColDef[] = [
        {
            field: 'role',
            headerName: 'Role',
            type: "custom",
            width: 120,
            renderCell: (params: GridRenderCellParams<OrgWithRole, unknown>) => {
                const role = params.row.role
                return (
                    <div className="flex flex-col justify-center px-3 pt-2" style={{ opacity: params.row.isDeleted ? 0.5 : 1 }}>
                        <div className="w-fit h-fit px-2 py-1 select-none text-white font-bold text-center rounded-xl text-lg" style={{ backgroundColor: role.color }}>
                            {role.type}
                        </div>
                    </div>
                )
            },
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
            renderCell: (params: GridRenderCellParams<OrgWithRole, string>) => (
                <p style={{ color: params.row.isDeleted ? "red" : "black" }}>{params.row.name}</p>
            ),
        },
        {
            field: 'address',
            headerName: 'Address',
            width: 200,
            renderCell: (params: GridRenderCellParams<OrgWithRole, string>) => (
                <p style={{ color: params.row.isDeleted ? "red" : "black" }}>{params.row.address}</p>
            ),
        },
    ]

    const handleEvent: GridEventListener<'rowClick'> = (params: GridRowParams<OrgWithRole>) => {
        changeSelectOrg(params.row.uuid, params.row.name)
        refreshCB()
    };


    return (
        <div className={`flex flex-col gap-4 ${showBackground ? "smallCard" : ""}`} style={{ padding: 10 }}>
            <div className="card w-xl">
                <h5 className="mb-2 text-2xl font-normal text-gray-900">Select An Organization:</h5>
                <div className="h-px bg-accent"></div>

                <div className="flex flex-row w-full h-20 p-5">
                    <div className="relative z-0 w-full mb-5 group pr-10">
                        <input onChange={inputHandler} type="text" name={"search"} id={"search"} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={""} defaultValue={""} />
                        <label htmlFor={"search"} className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search:</label>
                    </div>

                    <div className="flex flex-col justify-center pt-4 w-80">
                        <CheckboxInput id={"showDeactivated"} label={"Show Deactivated"} val={false} disabled={false} changeCB={(val) => { setShowDeleted(val) }} />
                    </div>
                </div>

            </div>

            <div className="card w-xl">
                <DataGrid
                    rows={filteredList}
                    columns={columns}
                    getRowId={(row) => row.uuid}
                    rowSelection={false}
                    onRowClick={handleEvent}
                    loading={loading}
                    slotProps={{
                        loadingOverlay: {
                            variant: 'linear-progress',
                            noRowsVariant: 'linear-progress',
                        },
                    }}
                />
            </div>
        </div>
    )
}


