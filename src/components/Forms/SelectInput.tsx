'use client'

import { useEffect, useState } from "react";
import AnimateChildren from "../Decorative/AnimateChildren";
import { motion } from "framer-motion";







function getOption(options: { label: string, id: string }[], id: string) {
    const option = options.find((e) => { return e.id === id })
    if (option) {
        return option
    } else {
        return { label: "", id: "" }
    }
}

interface SelectInputProps {
    id?: string,
    label?: string,
    val?: string,
    disabled?: boolean,
    options?: { label: string, id: string }[],
    changeCB?: (val: string) => void,
    searchable?: boolean
}
export default function SelectInput({
    id = "",
    label = "",
    val = "", 
    disabled = false, 
    options = [],
    changeCB = () => {},
    searchable = false
}: SelectInputProps) {

    const [searchText, setSearchText] = useState("")
    const [expanded, setExpanded] = useState(false)
    const [selected, setSelected] = useState(getOption(options, ""))
    const [filteredList, setFilteredList] = useState(options)

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

    const inputHandler = (e: { target: { value: string; }; }) => { // Filter search
        setSearchText(e.target.value)
        const o = options.filter((f) => { return f.label.toLowerCase().includes(e.target.value.toLowerCase()) })
        setFilteredList(o)
    };

    return (
        <div className="mb-5">

            <input type="hidden" name={id} id={id} value={selected?.id} readOnly={true} ></input>

            {selected.id !== "" &&
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-sm text-gray-500 select-none">{label}</h1>
                </motion.div>
            }

            <div onMouseOver={hoverStart} onMouseOut={hoverEnd} style={{ maxWidth: "150px", margin: "0px" }} >
                <h2 className="p-3 bg-card border border-gray-200 rounded-lg shadow-sm" style={{ width: searchable ? 200 : 130, minHeight: "50px" }}>{selected.id == "" ? label : selected.label}</h2>

                {expanded &&
                    <div style={{ position: "absolute", zIndex: 20000, transform: searchable ? "translateX(-20px)" : "translateX(0px)" }} >
                        <AnimateChildren y={-10}>
                            <div className={"bg-white divide-y divide-gray-100 rounded-lg shadow-lg border border-gray-300 " + (searchable ? "w-70 overflow-y-scroll overflow-x-hidden h-50" : "w-40")}>
                                <ul className="py-2 text-sm text-gray-700 ">

                                    {searchable &&
                                        <li>
                                            <div className={"relative z-0 group p-1 mx-5 mt-5" + (disabled ? "opacity-50" : "")}>
                                                <input type="text" onChange={inputHandler} className="w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={searchText} />
                                                <label htmlFor={id} className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search:</label>
                                            </div>
                                        </li>
                                    }

                                    {filteredList.map((option, i) => (
                                        <li key={i} onClick={() => { onPress(option.id) }}>
                                            <a className="block px-4 py-2 hover:bg-gray-100 w-full" >
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