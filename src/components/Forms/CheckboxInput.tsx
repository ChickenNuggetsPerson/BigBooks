'use client'

import { useState } from "react"





interface CheckboxInputProps {
    id: string
    label: string
    val: boolean
    disabled: boolean
    changeCB: (val: boolean) => void
}

export default function CheckboxInput({ id, label, val, disabled, changeCB }: CheckboxInputProps) {

    const [selected, setSelected] = useState(val)

    function clicked() {
        setSelected(!selected)
        changeCB(!selected)
    }

    return (
        <div className={"mb-5 " + (disabled ? "opacity-50" : "")}>

            <input type="hidden" name={id} id={id} value={JSON.stringify(selected)} readOnly={true} ></input>

            <div className="flex flex-row prevent-select" onClick={() => {clicked()}}>
                <div className={"w-6 h-6 border border-primary rounded " + (selected ? "bg-primary" : "")} ></div>
                <label htmlFor={id+"-"} className="text-md ml-2">{label}</label>
            </div>

        </div>
    )
}