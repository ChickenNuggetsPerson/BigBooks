'use client'

import { UserRoleIcon } from "../UserRoleIcon";
import getUsersOrgRole from "@/auth/roles/getUsersOrgRole";
import ClickableDiv from "@/components/Decorative/ClickableDiv";
import { useModalManager } from "@/components/Decorative/Modal/ModalContext";
import RoleModal from "./RoleModal";
import { useEffect, useState } from "react";
import { Role_Error, RoleTypes } from "@/auth/roles/Roles";
import { useCompany } from "@/app/CompanyContext";
import { DispUser } from "@/database/models/DisplayModels";




export default function OrgUserCard({ user }: { user: DispUser }) {

    const { addModal } = useModalManager()
    const { context } = useCompany()

    const [role, setRole] = useState(Role_Error)

    useEffect(() => {
        async function load() {
            const r = await getUsersOrgRole(user.uuid, context?.companyUUID ?? "")
            if (r) {
                setRole(r)
            }
        }
        load()
    }, [context?.companyUUID, user.uuid, user.memberships])

    function pressed() {
        if (role.type == RoleTypes.Error) { return }

        addModal({
            title: "Edit Permissions:",
            required: false,
            component: <RoleModal role={role} user={user} orgUUID={context?.companyUUID ?? ""} orgName={context?.companyName ?? ""} />
        })
    }

    return (
        <ClickableDiv onClick={pressed} className="card select-none">
            <div className="flex flex-row justify-start">

                <UserRoleIcon role={role} />
                <p className="text-md">{user.firstName + " " + user.lastName}</p>

            </div>

        </ClickableDiv>
    )
}   