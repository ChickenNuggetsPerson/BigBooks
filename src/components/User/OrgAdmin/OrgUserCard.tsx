'use client'

import { UserRoleIcon } from "../UserRoleIcon";
import ClickableDiv from "@/components/Decorative/ClickableDiv";
import { useModalManager } from "@/components/Decorative/Modal/ModalContext";
import RoleModal from "./RoleModal";
import { useCompany } from "@/app/CompanyContext";
import { Prisma } from "@/database/generated/prisma";
import { getRoleFromID, RoleTypes } from "@/auth/roles/Roles";




export default function OrgUserCard({ user }: { user: Prisma.UserGetPayload<{ include: { memberships: true }}> }) {

    const { addModal } = useModalManager()
    const { context } = useCompany()

    const role = getRoleFromID(user.memberships.find((r) => r.organizationId == context?.companyUUID)?.role ?? "")

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