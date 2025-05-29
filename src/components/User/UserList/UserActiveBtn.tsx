'use client'

import setUserActiveStatus from "@/actions/user/setUserActiveStatus"







export default function UserActiveBtn({ uuid, isActive }: { uuid: string, isActive: boolean }) {
    return (<button onClick={() => (setUserActiveStatus(uuid, !isActive))} className={(isActive ? "accent-button" : "primary-button") + " max-h-10"}>{ isActive ? "Deactivate" : "Activate" }</button>)
}