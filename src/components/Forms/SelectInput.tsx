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
        <div>

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
                                                {(option.id == selected?.id ? "- " : "") + option.label}
                                            </a>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </AnimateChildren>
                    </div>

                }
            </div>


            {/* <div className="flex flex-row">
                {options.map((option, i) => (
                    <div key={i} className="w-full">
                        <input id={option.id} type="radio" value={option.id} name={id} className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-primary" defaultChecked={option.id == val} readOnly={disabled} onChange={onOptionChange}></input>
                        <label htmlFor={option.id} className=" w-full py-4 ms-2 text-sm font-medium text-text">{option.label}</label>
                    </div>
                ))}
            </div> */}

        </div>
    )
}