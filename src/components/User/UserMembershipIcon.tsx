'use client'

import { Membership } from "@/database/generated/prisma";
import ClickableDiv from "../Decorative/ClickableDiv";




export function UserMembershipIcon({ membership }: { membership: Membership }) {

    if (!membership.orgAdmin) {
        return (<div></div>)
    }

    return (
        <ClickableDiv
            className="py-1 text-white font-bold select-none h-fit smallCard"
            style={{
                background: membership.orgAdmin 
                ? "linear-gradient(90deg,rgba(162, 98, 204, 1) 1%, rgba(227, 91, 91, 1) 48%, rgba(255, 194, 110, 1) 100%)"
                : "#102030",
                borderRadius: 10,
                paddingRight: 10,
                paddingLeft: 10,
                border: "none"
            }}
        >
            {membership.orgAdmin && <p>Admin</p>}
        </ClickableDiv>
    )
}