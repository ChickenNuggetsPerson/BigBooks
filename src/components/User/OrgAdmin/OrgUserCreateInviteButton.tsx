'use client'


import makeInviteCode from "@/actions/user/inviteCodes/makeInviteCode"
import { useModalManager } from "@/components/Decorative/Modal/ModalContext"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
import UserPermissionsTree from "../Permissions/UserPermissionsTree"







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
    const [permissions, setPermissions] = useState([] as string[])

    const router = useRouter()

    function save() {
        toast.promise(
            async () => {
                await makeInviteCode(permissions)
                router.refresh()
            },
            {
                loading: "Creating Invite",
                success: "Invite Code Created",
                error: "Error in creating invite code"
            }
        )

        popModal()
    }

    return (
        <div className="mt-5">
            <UserPermissionsTree activePerms={permissions} changeCB={(perms) => setPermissions(perms)}/>

            <div className="flex gap-4 mt-8">
                <button onClick={popModal} className="accent-button w-full">Cancel</button>
                <button onClick={save} className="primary-button w-full">Create Invite</button>
            </div>
        </div>
    )
}

