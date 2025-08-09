'use client'


import Gauge from "../Gauge"
import { ReactNode, useEffect, useState } from "react"



export default function Loading({
    vCenter = false,
    hCenter = false
}: {
    vCenter?: boolean,
    hCenter?: boolean
}) {

    const [percent, setPercent] = useState(0.12)

    function iterate() {
        setPercent(Math.random())
    }

    useEffect(() => {

        const id = setInterval(() => {
            iterate()
        }, 1000);

        return () => {
            clearInterval(id)
        }
    }, [])

    return (
        <TogleableClassnames className="flex m-auto justify-center" enabled={hCenter}>
            <TogleableClassnames className="h-full flex flex-col" enabled={vCenter}>
                <div className="card font-mono font-bold text-xl w-fit">
                    <div className="animate-pulse ml-2">Loading...</div>
                    <div className="mx-auto"><Gauge percent={percent} size={120}/></div>
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