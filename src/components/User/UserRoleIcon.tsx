'use client'
import { DispRole } from "@/auth/roles/Roles";
import ClickableDiv from "../Decorative/ClickableDiv";




export function UserRoleIcon({ role }: { role: DispRole }) {
    return (
        <ClickableDiv
            className="py-1 px-2 text-white font-bold select-none h-fit smallCard"
            style={{
                background: role.color,
                borderRadius: 10
            }}
        >
            {role.type}
        </ClickableDiv>
    )
}