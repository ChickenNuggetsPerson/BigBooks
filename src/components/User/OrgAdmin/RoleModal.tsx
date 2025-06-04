'use client'

import createUserRole from "@/actions/user/roles/createUserRole"
import deleteUserRole from "@/actions/user/roles/deleteUserRole"
import editUserRole from "@/actions/user/roles/editUserRole"
import { DispRole, RoleTypes } from "@/auth/roles/Roles"
import { useModalManager } from "@/components/Decorative/Modal/ModalContext"
import SelectInput from "@/components/Forms/SelectInput"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { getRoleDescription, selectableRoles } from "./RoleModalProps"
import { User } from "@/database/generated/prisma"
import toast from "react-hot-toast"



export default function RoleModal({ role, user, orgUUID, orgName }: { role: DispRole | null, user: User, orgUUID: string, orgName: string }) {

    const { popModal } = useModalManager()
    const [selectedRole, setRole] = useState(role?.type ?? RoleTypes.Error)

    const isNew = role == null


    const router = useRouter()

    function save() {
        toast.promise(
            async () => {
                if (selectedRole == RoleTypes.Error) { return }
                if (isNew) {
                    await createUserRole(user.uuid, orgUUID, selectedRole)
                } else {
                    await editUserRole(user.uuid, orgUUID, selectedRole)
                }
                router.refresh()
            },
            {
                loading: "Updating",
                success: "Updated Permissions",
                error: "Error Updating Permissions"
            }
        )
        popModal()
    }
    function remove() {
        toast.promise(
            async () => {
                await deleteUserRole(user.uuid, orgUUID)
                router.refresh()
            },
            {
                loading: "Removing",
                success: `Removed ${user.firstName} from ${orgName}`,
                error: "Error encountered in removing user"
            }
        )
        popModal()
    }

    return (
        <div className="min-h-40 flex flex-col justify-end">

            <div className="mb-2">
                <p>{`${user.firstName} ${user.lastName} - ${orgName}`}</p>
            </div>

            <div className="flex flex-row">
                <SelectInput id={""} label={"Organization Role:"} val={selectedRole} disabled={false} options={selectableRoles} changeCB={(val) => { setRole(val as RoleTypes) }} searchable={false} />
                <p className="p-5 w-sm h-40">{getRoleDescription(selectedRole)}</p>
            </div>

            <div className="flex flex-row justify-between">
                {!isNew && <button onClick={remove} className="accent-button">Remove From Organization</button>}
                {isNew && <div></div>}
                <button onClick={save} className="primary-button">Save Changes</button>
            </div>

        </div>
    )
}