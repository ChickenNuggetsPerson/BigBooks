'use client'

import { useEffect, useState } from "react";
import AnimateChildren from "../AnimateChildren";


function getOption(options : { label: string, id: string }[], id: string) {
    const option = options.find((e) => { return e.id === id })
    if (option) {
        return option
    } else {
        return { label : "", id : "" }
    }
}

interface SelectInputProps {
    id: string,
    label: string,
    val: string,
    disabled: boolean,
    options: { label: string, id: string }[],
    changeCB: (val: string) => void
}
export default function SelectInput({ id, label, val, disabled, options, changeCB }: SelectInputProps) {

    const [expanded, setExpanded] = useState(false)
    const [selected, setSelected] = useState(getOption(options, ""))

    useEffect(() => {
        setSelected(getOption(options, val))
    }, [options, val])

    function hoverStart() {
        if (!disabled) { setExpanded(true) }
    }
    function hoverEnd() {
        if (!disabled) { setExpanded(false) }
    }

    function onPress(val: string) {
        setSelected(getOption(options, val))
        hoverEnd()
        changeCB(val)
    }

    return (
        <div className="mb-5">

            <input type="hidden" name={id} id={id} value={selected?.id} readOnly={true} ></input>

            <h1 className="text-sm">{label}</h1>

            <div onMouseOver={hoverStart} onMouseOut={hoverEnd} style={{ maxWidth: "150px", margin: "0px" }} >
                <h2 className="p-3 bg-card border border-gray-200 rounded-lg shadow-sm">{selected?.label}</h2>

                {expanded &&
                    <div style={{ position: "absolute", zIndex: 20000 }} >
                        <AnimateChildren x={0} y={-10}>
                            <div className={"bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 "}>
                                <ul className="py-2 text-sm text-gray-700 ">

                                    {options.map((option, i) => (
                                        <li key={i} onClick={() => { onPress(option.id) }}>
                                            <a className="block px-4 py-2 hover:bg-gray-100" >
                                                {(option.id == selected?.id ? "> " : "") + option.label}
                                            </a>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </AnimateChildren>
                    </div>

                }
            </div>
        </div>
    )
}