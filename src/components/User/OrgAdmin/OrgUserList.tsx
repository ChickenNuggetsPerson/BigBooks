'use client'

import { useCompany } from "@/app/CompanyContext";
import { Prisma } from "@/database/generated/prisma";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { DispRole, getRoleFromID, RoleTypes } from "@/auth/roles/Roles";
import ClickableDiv from "@/components/Decorative/ClickableDiv";
import { useModalManager } from "@/components/Decorative/Modal/ModalContext";
import RoleModal from "./RoleModal";
import { useEffect, useState } from "react";



type UserData = Prisma.UserGetPayload<{ include: { memberships: true } }>


export function OrgUserList({
    users
}: { users: UserData[] }) {

    const { context } = useCompany()
    const { addModal } = useModalManager()
    
    const [dispUsers, setDispUsers] = useState([] as UserData[])
    useEffect(() => {
        setDispUsers(users)
    }, [users])

    const columns: GridColDef[] = [
        {
            field: '',
            headerName: 'Name',
            width: 150,
            renderCell: (params: GridRenderCellParams<UserData, string>) => (
                <p>{`${params.row.firstName} ${params.row.lastName}`}</p>
            ),
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200
        },
        {
            field: 'role',
            headerName: 'Role',
            type: "custom",
            width: 120,
            renderCell: (params: GridRenderCellParams<UserData, unknown>) => {

                const index = params.row.memberships.findIndex((m) => m.organizationId == context?.companyUUID)
                if (index == -1) { return (<div></div>) }
                const membership = params.row.memberships[index]
                const role = getRoleFromID(membership.role)
                role.userUUID = params.row.uuid
                role.orgUUID = context?.companyUUID ?? ""

                return (
                    <ClickableDiv
                        onClick={() => {rolePressed(role)}}
                        className="h-full w-full px-2 flex flex-row justify-center"

                    >
                        <div className="flex flex-col justify-center">
                            <div className="w-fit h-fit px-2 py-1 select-none text-white font-bold text-center rounded-xl text-lg" style={{ backgroundColor: role.color }}>
                                {role.type}
                            </div>
                        </div>
                    </ClickableDiv>
                )
            },
        },

    ]

    async function rolePressed(role: DispRole) {
        if (role.type == RoleTypes.Error) { return }

        const index = dispUsers.findIndex(u => u.uuid == role.userUUID)
        if (index == -1) { return }
        const user = dispUsers[index]

        addModal({
            title: "Edit Permissions:",
            required: false,
            component: () => <RoleModal role={role} user={user} orgUUID={context?.companyUUID ?? ""} orgName={context?.companyName ?? ""} />
        })
    }

    return (
        <div className="w-full card">
            <div className="font-light text-xl">
                <p>Users Associated With</p>
                <p className="font-mono font-bold">{context?.companyName}</p>
            </div>

            <div className="bg-accent h-px mb-5"></div>

            <DataGrid
                rows={dispUsers}
                columns={columns}
                getRowId={(row) => row.uuid}
                rowSelection={false}
            />
        </div>
    )
}