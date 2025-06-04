'use client'


import makeInviteCode from "@/actions/user/inviteCodes/makeInviteCode"
import { RoleTypes } from "@/auth/roles/Roles"
import { useModalManager } from "@/components/Decorative/Modal/ModalContext"
import SelectInput from "@/components/Forms/SelectInput"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { getRoleDescription, selectableRoles } from "./RoleModalProps"







export default function OrgUserCreateInviteButton() {

    const { addModal } = useModalManager()

    function create() {
        addModal({
            title: "Create Invite Link",
            required: false,
            component: () => <CreateInviteForm />
        })
    }

    return (
        <button className="block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg" onClick={create}>+</button>
    )
}



function CreateInviteForm() {

    const { popModal } = useModalManager()
    const [selectedRole, setRole] = useState(RoleTypes.Viewer)

    const router = useRouter()

    async function save() {

        await makeInviteCode(selectedRole)

        popModal()
        router.refresh()
    }

    return (
        <div className="mt-5">
            <div className="flex flex-row">
                <SelectInput id={""} label={"Organization Role:"} val={selectedRole} disabled={false} options={selectableRoles} changeCB={(val) => { setRole(val as RoleTypes) }} searchable={false} />
                <p className="p-5 w-sm h-40">{getRoleDescription(selectedRole)}</p>
            </div>

            <div className="flex flex-row justify-between">
                <button onClick={popModal} className="accent-button">Cancel</button>
                <button onClick={save} className="primary-button">Save Changes</button>
            </div>
        </div>
    )
}

