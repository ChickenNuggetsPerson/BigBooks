'use client'

import ClickableDiv from "../Decorative/ClickableDiv";




export function UserRoleIcon({ perms }: { perms: string[] }) {
    return (
        // <ClickableDiv
        //     className="py-1 px-2 text-white font-bold select-none h-fit smallCard"
        //     style={{
        //         background: role.color,
        //         borderRadius: 10
        //     }}
        // >
        //     {role.type}
        // </ClickableDiv>
        <ClickableDiv
            className="py-1 px-2 text-white font-bold select-none h-fit smallCard"
            style={{
                background: "#102030",
                borderRadius: 10
            }}
        >
            {perms[0]}
        </ClickableDiv>
    )
}