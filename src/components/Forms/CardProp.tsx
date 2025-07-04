'use client'

import toast from "react-hot-toast"
import ClickableDiv from "../Decorative/ClickableDiv"



export function CardProp({
    label,
    val,
    copyable = false
}: {
    label: string,
    val: string,
    copyable?: boolean
}) {

    function clicked() {
        if (!copyable) { return }
        navigator.clipboard.writeText(val)
        toast.success(`Coppied ${label.replace(":", "")}`)
    }

    return (
        <div className="flex flex-row gap-2 select-none" >
            <p>{label}</p>
            <ClickableDiv onClick={clicked}>
                <p className="font-semibold font-mono" style={{ fontSize: 15, paddingTop: 2 }}>{val}</p>
            </ClickableDiv>
        </div>
    )
}