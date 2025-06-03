'use client'

import { UserRoleIcon } from "../UserRoleIcon";
import ClickableDiv from "@/components/Decorative/ClickableDiv";
import { useModalManager } from "@/components/Decorative/Modal/ModalContext";
import RoleModal from "./RoleModal";
import { getIDFromRoleType, getRoleFromID, RoleTypes } from "@/auth/roles/Roles";
import { useCompany } from "@/app/CompanyContext";
import { DispUser } from "@/database/models/DisplayModels";




export default function OrgUserCard({ user }: { user: DispUser }) {

    const { addModal } = useModalManager()
    const { context } = useCompany()

    const roleType = user.memberships.find((r) => r.orgUUID == context?.companyUUID)?.type ?? RoleTypes.Error
    const role = getRoleFromID(getIDFromRoleType(roleType))

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