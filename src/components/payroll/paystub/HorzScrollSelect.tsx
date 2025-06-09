'use client'

import ClickableDiv from "@/components/Decorative/ClickableDiv"
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"





interface HorzScrollSelectProps {
    selected: number,
    options: string[],
    disabled?: boolean,
    changeCB?: (val: number) => void
}
export default function HorzScrollSelect({
    selected,
    options,
    disabled = false,
    changeCB = () => { }
}: HorzScrollSelectProps) {

    const [sel, setSel] = useState(selected)
    const [ops, setOps] = useState(options)
    useEffect(() => { setOps(options) }, [options])
    useEffect(() => { setSel(selected) }, [selected])

    function first() {
        if (disabled) { return }
        setSel(0)
        changeCB(0)
    }
    function prev() {
        if (disabled) { return }
        if (sel <= 0) { return }
        setSel(sel - 1)
        changeCB(sel - 1)
    }
    function next() {
        if (disabled) { return }
        if (sel >= ops.length - 1) { return }
        setSel(sel + 1)
        changeCB(sel + 1)
    }
    function last() {
        if (disabled) { return }
        setSel(ops.length - 1)
        changeCB(ops.length - 1)
    }

    return (
        <div className="flex flex-row w-full justify-between gap-2 select-none">
            <ClickableDiv className="smallCard" style={{ padding: 10 }} onClick={first} > <ChevronFirst /> </ClickableDiv>
            <ClickableDiv className="smallCard" style={{ padding: 10 }} onClick={prev} > <ChevronLeft /> </ClickableDiv>

            <div className="font-semibold text-lg smallCard w-full flex flex-row justify-center my-auto h-11">
                {/* <NumericText val={`${sel + 1}/${ops.length}: ${ops[sel]}`} /> */}
                {`${sel + 1}/${ops.length}: ${ops[sel]}`}
            </div>

            <ClickableDiv className="smallCard" style={{ padding: 10 }} onClick={next} > <ChevronRight /> </ClickableDiv>
            <ClickableDiv className="smallCard" style={{ padding: 10 }} onClick={last} > <ChevronLast /> </ClickableDiv>
        </div>
    )
}