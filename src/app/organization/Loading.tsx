'use client'

import NumericText from "@/components/Decorative/NumericText/NumericText"
import { useEffect, useState } from "react"





export default function Loading() {


    const [text, setText] = useState("Loading")
    useEffect(() => {
        setInterval(() => {
            setText(text + ".")
        }, 1000);
    })

    return (
        <div className="flex" style={{ height: "80dvh" }}>
            <div className="m-auto flex font-mono font-bold text-xl">

                <NumericText val={text} spacing={-4} expand={true}/>

            </div>
        </div>
    )
}