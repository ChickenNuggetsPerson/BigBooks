'use client'

import Gauge from "@/components/Decorative/Gauge"
import { useEffect, useState } from "react"


export default function PaystubsPage() {

    return (
        <div>
            <div className="flex flex-row justify-center w-full mb-10">
                <p className="card w-fit">Work In Progress Page</p>
            </div>
            <div className="grid grid-cols-6 gap-10">
                <Randgauge />
                <Randgauge />
                <Randgauge />
                <Randgauge />
                <Randgauge />
                <Randgauge />
                <Randgauge />
                <Randgauge />
                <Randgauge />
                <Randgauge />
                <Randgauge />
                <Randgauge />
                <Randgauge />
                <Randgauge />
                <Randgauge />
                <Randgauge />
                <Randgauge />
                <Randgauge />
            </div>

        </div>
    )
}



function Randgauge() {

    const [percent, setPercent] = useState(Math.random() as number | null)
    useEffect(() => {
        const id = setInterval(() => {
            setTimeout(() => {
                setPercent(Math.random())
                console.log("asdf")
            }, Math.random() * 1000);
        }, 3000);
        return () => clearInterval(id)
    }, [])

    function getRandomElement<T>(arr: T[]): T {
        const randomIndex = Math.floor(Math.random() * arr.length); // Causes hydration errors BTW
        return arr[randomIndex];
    }
    const colors = [
        '#FFD1DC', 
        '#FFABAB', 
        '#FFCBA4', 
        '#FFFACD', 
        '#CCFFCC', 
        '#ADD8E6', 
        '#E6E6FA'
    ]
    const color = getRandomElement(colors)


    return (
        <div className="smallCard h-fit w-fit">
            <Gauge percent={percent} spacing={0} size={120} color={color} />
        </div>
    )
}