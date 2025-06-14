'use client'


import { DispRole } from "@/auth/roles/Roles";
import { useModalManager } from "@/components/Decorative/Modal/ModalContext";
import RoleModal from "../../OrgAdmin/RoleModal";
import { Organization, User } from "@/database/generated/prisma";




export default function IncludedOrgCard({ role, org, user }: { role: DispRole, org: Organization, user: User }) {

    const { addModal } = useModalManager()

    function editRole() {
        addModal({
            title: "Edit Permissions:",
            required: false,
            component: () => <RoleModal role={role} user={user} orgUUID={org.uuid} orgName={org.name}/>
        })
    }

    return (
        <div className="flex flex-row justify-between border rounded-sm border-accent pl-1" onClick={editRole}>
            <h1>{org.name}</h1>
            <p
                style={{ backgroundColor: role.color, padding: 4 }}
                className="rounded-sm"
            >
                {role.type}
            </p>
        </div>
    )
}
