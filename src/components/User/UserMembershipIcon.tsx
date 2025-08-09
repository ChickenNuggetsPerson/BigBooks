'use client'

import { Membership } from "@/database/generated/prisma";
import ClickableDiv from "../Decorative/ClickableDiv";




export function UserMembershipIcon({ membership }: { membership: Membership }) {

    if (!membership.orgAdmin) {
        return (<div></div>)
    }

    return (
        <ClickableDiv
            className="py-1 px-2 text-white font-bold select-none h-fit smallCard"
            style={{
                background: membership.orgAdmin ? "linear-gradient(90deg,rgba(99, 119, 235, 1) 0%, rgba(211, 132, 245, 1) 50%, rgba(239, 147, 124, 1) 98%)": "#102030",
                borderRadius: 10
            }}
        >
            {membership.orgAdmin && <p>Admin</p>}
        </ClickableDiv>
    )
}