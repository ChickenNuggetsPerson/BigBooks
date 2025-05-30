'use client'
import { DispRole } from "@/auth/roles/Roles";
import ClickableDiv from "../Decorative/ClickableDiv";




export function UserRoleIcon({ role }: { role: DispRole }) {
    return (
        <ClickableDiv 
            className="p-1 px-2 rounded-md text-white font-bold mr-2 max-h-8 select-none" 
            style={{ background: role.color }}
        >
            {role.type}
        </ClickableDiv>
    )
}