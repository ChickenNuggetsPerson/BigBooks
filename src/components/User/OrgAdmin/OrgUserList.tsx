'use client'

import { useCompany } from "@/app/CompanyContext";
import { Membership, Prisma } from "@/database/generated/prisma";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import ClickableDiv from "@/components/Decorative/ClickableDiv";
import { useModalManager } from "@/components/Decorative/Modal/ModalContext";
import { useEffect, useState } from "react";
import UserPermissionEditor from "../Permissions/UserPermissionEditor";
import { useRouter } from "next/navigation";



type UserData = Prisma.UserGetPayload<{ include: { memberships: true } }>


export function OrgUserList({
    users
}: { users: UserData[] }) {

    const router = useRouter()
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
            width: 200,
            renderCell: (params: GridRenderCellParams<UserData, string>) => (
                <p>{`${params.row.memberships[0].orgAdmin ? "(Org Admin) ": ""}${params.row.firstName} ${params.row.lastName}`}</p>
            ),
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 180
        },
        {
            field: 'role',
            headerName: 'Edit',
            type: "custom",
            width: 190,
            renderCell: (params: GridRenderCellParams<UserData, unknown>) => {

                const membership = params.row.memberships[0]
                if (!membership) { return (<div></div>)}

                return (
                    <ClickableDiv
                        onClick={() => { membershipPressed(membership) }}
                        className="h-full w-full px-2 flex flex-row justify-center"

                    >
                        <div className="flex flex-col justify-center">
                            <div className="w-fit h-fit px-2 py-1 select-none text-white font-bold text-center rounded-xl text-lg bg-primary/60">
                                Edit Permissions
                            </div>
                        </div>
                    </ClickableDiv>
                )
            },
        },

    ]

    async function membershipPressed(membership: Membership) {

        addModal({
            component: (push, pop) => <UserPermissionEditor
                userUUID={membership.userId}
                orgUUID={membership.organizationId}
                isOrgAdmin
                cb={() => {
                    pop()
                    router.refresh()
                }}
            />
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