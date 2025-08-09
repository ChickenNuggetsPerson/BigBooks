'use client'


import { Organization, User } from "@/database/generated/prisma";
import createUserPerms from "@/actions/user/permissions/createUserPerms";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useModalManager } from "@/components/Decorative/Modal/ModalContext";
import UserPermissionEditor from "../../Permissions/UserPermissionEditor";
import { Permissions } from "@/auth/permissions/PermissionsDef";
import { Pen, Plus } from "lucide-react";





export default function UserOrgListCard({ org, user, included }: { org: Organization, user: User, included: boolean }) {

    const router = useRouter()
    const { addModal } = useModalManager()

    async function clicked() {
        if (included) {
            addModal({
                component: (push, pop) => <UserPermissionEditor userUUID={user.uuid} orgUUID={org.uuid} cb={() => {
                    pop()
                    router.refresh()
                }} />
            })
        } else {
            await toast.promise(createUserPerms(user.uuid, org.uuid, [Permissions.org.view]), {
                loading: "Adding User",
                success: "User Added",
                error: (err) => `Error: ${err}`
            })
            router.refresh()
        }
    }

    return (
        <div className="flex flex-row justify-between border-b-1 last:border-b-0 mb-2 border-accent pl-1" onClick={() => { }}>
            <h1 style={{
                opacity: org.isDeleted ? .5 : 1
            }} >{org.name}</h1>
            <button onClick={clicked} className="bg-primary/70 icon text-white">
                {included ? <Pen/> : <Plus/>}
            </button>
        </div>
    )
}

