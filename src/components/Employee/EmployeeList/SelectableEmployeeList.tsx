'use client'

import { useEffect, useState } from "react"
import EmployeeList from "./EmployeeList"
import { AnimatePresence, motion } from "framer-motion"




export default function SelectableEmployeeList({ selectCB, preSelected }: {
    selectCB: (selected: string[]) => void, preSelected: string[]
}) {

    const [selected, setSelected] = useState([] as string[])
    useEffect(() => {
        setSelected(preSelected)
    }, [preSelected])

    function rowClick(uuid: string) {
        if (selected.includes(uuid)) {
            setSelected(selected.filter((s) => s !== uuid))
        } else {
            setSelected([...selected, uuid])
        }
    }

    const canSave = JSON.stringify(selected.sort()) !== JSON.stringify(preSelected.sort())

    return (
        <div>
            <AnimatePresence>
                {canSave &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="relative"
                        key={"save button"}
                    >
                        <div className="absolute -right-2 -top-2">
                            <button className="primary-button flex flex-row" onClick={() => selectCB(selected)}>
                                Save Selection
                            </button>
                        </div>
                    </motion.div>
                }
                <EmployeeList pageination pageCount={8} searchable selectable clickCB={(emp) => rowClick(emp.uuid)} selected={selected} />
            </AnimatePresence>
        </div>
    )
}