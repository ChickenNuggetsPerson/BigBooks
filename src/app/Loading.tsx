'use client'

import NumericText from "@/components/Decorative/NumericText/NumericText"
import { ReactNode, useEffect, useState } from "react"





export default function Loading({
    vCenter = false,
    hCenter = false
}: {
    vCenter?: boolean,
    hCenter?: boolean
}) {


    const [text, setText] = useState("Loading")
    useEffect(() => {
        setInterval(() => {
            setText(text + ".")
        }, 1000);
    })

    return (
        <TogleableClassnames className="flex m-auto justify-center" enabled={hCenter}>
            <TogleableClassnames className="h-full flex flex-col" enabled={vCenter}>
                <div className="font-mono font-bold text-xl">
                    <NumericText val={text} spacing={-4} expand />
                </div>
            </TogleableClassnames>
        </TogleableClassnames>
    )
}

function TogleableClassnames({ className, enabled, children }: { className: string, enabled: boolean, children: ReactNode }) {

    return (
        <>
            {enabled &&
                <div className={className}>
                    {children}
                </div>
            }

            {!enabled && <>
                {children}
            </>
            }
        </>
    )
}