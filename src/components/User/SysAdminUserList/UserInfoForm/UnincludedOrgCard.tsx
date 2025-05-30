'use client'


import { useModalManager } from "@/components/Decorative/Modal/ModalContext";
import { DispOrganization, DispUser } from "@/database/models/DisplayModels";
import RoleModal from "../../OrgAdmin/RoleModal";





export default function UnincludedOrgCard({ org, user }: { org: DispOrganization, user: DispUser }) {

    const { addModal } = useModalManager()

    function add() {
        addModal({
            title: "Add Permissions:",
            required: false,
            component: <RoleModal role={null} user={user} orgUUID={org.uuid} orgName={org.name} />
        })
    }

    return (
        <div className="flex flex-row justify-between border-b-1 last:border-b-0 mb-2 border-accent pl-1" onClick={() => { }}>
            <h1>{org.name}</h1>
            <button onClick={add} className="bg-primary text-white font-bold w-5 text-center rounded-sm"> +</button>
        </div>
    )
}

