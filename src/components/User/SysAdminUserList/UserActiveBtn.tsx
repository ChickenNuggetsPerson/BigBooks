'use client'

import setUserActiveStatus from "@/actions/user/setUserActiveStatus"







export default function UserActiveBtn({ uuid, isActive }: { uuid: string, isActive: boolean }) {
    return (<button onClick={() => (setUserActiveStatus(uuid, !isActive))} className={(isActive ? "accent-button" : "primary-button") + " h-fit"}>{ isActive ? "Deactivate" : "Activate" }</button>)
}