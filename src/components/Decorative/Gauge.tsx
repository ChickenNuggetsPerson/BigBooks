'use client'
import { useEffect, useState } from "react";
import NumericText from "./NumericText/NumericText";



interface GaugeProps {
    color?: string,
    percent?: number | null,
    size?: number,
    spacing?: number
}
export default function Gauge({
    color = "var(--primary_col)",
    percent = null,
    size = 60,
    spacing
}: GaugeProps) {

    const [dispPercent, setDispPercent] = useState(null as number | null)

    useEffect(() => {
        setTimeout(() => {
            setDispPercent(percent)
        }, 750);
    }, [percent])

    function convert() {
        if (dispPercent == null || Number.isNaN(dispPercent)) {
            return "0 100"
        }

        return `${dispPercent * 75} 100`
    }

    function percentText() {

        if (dispPercent == null) {
            return "   "
        }

        if (dispPercent == 0.0 || Number.isNaN(dispPercent)) {
            return " 0%"
        }

        if (dispPercent < 0.1) {
            return `0${Math.floor(dispPercent * 100)}%`
        }

        return `${Math.floor(dispPercent * 100)}%`
    }

    return (
        <div className={`relative size-fit`}>

            <svg className={`rotate-[135deg]`} style={{ width: size, height: size }} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2" strokeDasharray="75 100" strokeLinecap="round"></circle>
                <circle cx="18" cy="18" r="16" fill="none" className={`stroke-current`} strokeWidth="2"
                    strokeDasharray={convert()}
                    strokeLinecap="round"
                    style={{
                        color: color,
                        transition: 'stroke-dasharray 1s ease, color 1s ease',
                    }}
                ></circle>
            </svg>

            <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="font-bold text-dark_secondary" style={{ fontSize: size / 5 }}>
                    <NumericText val={percentText()} spacing={spacing ? spacing : -5 + size / 16} />
                </span>
            </div>
        </div>
    )
}