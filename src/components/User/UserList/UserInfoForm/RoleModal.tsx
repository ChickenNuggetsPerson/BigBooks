'use client'

import createUserRole from "@/actions/user/roles/createUserRole"
import deleteUserRole from "@/actions/user/roles/deleteUserRole"
import editUserRole from "@/actions/user/roles/editUserRole"
import { Role_Viewer, Role_Editor, Role_Admin, DispRole, RoleTypes } from "@/auth/roles/Roles"
import { useModalManager } from "@/components/Decorative/Modal/ModalContext"
import SelectInput from "@/components/Forms/SelectInput"
import { DispUser } from "@/database/models/DisplayModels"
import { useRouter } from "next/navigation"
import { useState } from "react"

const roles = [
    {
        label: Role_Viewer.type,
        id: Role_Viewer.type
    },
    {
        label: Role_Editor.type,
        id: Role_Editor.type
    },
    {
        label: Role_Admin.type,
        id: Role_Admin.type
    }
]

export default function RoleModal({ role, user, orgUUID, orgName }: { role: DispRole | null, user: DispUser, orgUUID: string, orgName: string }) {

    const { popModal } = useModalManager()
    const [selectedRole, setRole] = useState(role?.type ?? RoleTypes.Error)

    const isNew = role == null

    function getText(r: RoleTypes) {
        switch (r) {
            case RoleTypes.Viewer:
                return `As a viewer, ${user.firstName} can view employee data and payroll items.`
            case RoleTypes.Editor:
                return `As an editor, ${user.firstName} can edit employee data and payroll items.`
            case RoleTypes.Admin:
                return `As an admin, ${user.firstName} will have all permissions of an editor and viewer. ${user.firstName} will also be able to edit the roles of other users associated with this organization.`
            default:
                return ""
        }
    }

    const router = useRouter()

    async function save() {
        if (selectedRole == RoleTypes.Error) {
            return
        }

        if (isNew) {
            await createUserRole(user.uuid, orgUUID, selectedRole)
        } else {
            await editUserRole(user.uuid, orgUUID, selectedRole)
        }

        popModal()
        router.refresh()
    }
    async function remove() {
        await deleteUserRole(user.uuid, orgUUID)
        popModal()
        router.refresh()
    }

    return (
        <div className="min-h-40 flex flex-col justify-end">

            <div className="mb-2">
                <p>{`${user.firstName} ${user.lastName} - ${orgName}`}</p>
            </div>

            <div className="flex flex-row">
                <SelectInput id={""} label={"Organization Role:"} val={selectedRole} disabled={false} options={roles} changeCB={(val) => { setRole(val as RoleTypes) }} searchable={false} />
                <p className="p-5 w-sm h-40">{getText(selectedRole)}</p>
            </div>

            <div className="flex flex-row justify-between">
                {!isNew && <button onClick={remove} className="accent-button">Remove Role</button>}
                {isNew && <div></div>}
                <button onClick={save} className="primary-button">Save Changes</button>
            </div>

        </div>
    )
}