'use client'

import NumericText from "@/components/Decorative/NumericText/NumericText"
import { DispPayPeriod } from "@/database/models/DisplayModels"
import { useEffect, useState } from "react"



interface PayPeriodGuageProps {
    p: DispPayPeriod
}
export default function PayPeriodGuage({ p }: PayPeriodGuageProps) {

    const [percent, setPercent] = useState(null as unknown as (number))

    useEffect(() => {
        setTimeout(() => {

            let max = p.includedEmployees.length
            if (max < p.payStubs.length) {
                max = p.payStubs.length
            }

            const paystubCompletion = (p.payStubs.length / max) * 80
            const inclusionCompletion = (p.includedEmployees.length != 0) ? 20 : 0

            const per = (paystubCompletion + inclusionCompletion) / 100

            setPercent(per)
        }, 750);
    }, [p])
    
    function convert(per: number) {
        if (per == null || Number.isNaN(per)) {
            return "0 100"
        }

        return `${per * 75} 100`
    }

    function percentText(per: number) {
        if (per == null) {
            return "   "
        }

        if (per == 0.0 || Number.isNaN(per)) {
            return " 0%"
        }

        if (per < 0.1) {
            return `0${Math.floor(per * 100)}%`    
        }

        return `${Math.floor(per * 100)}%`
    }

    return (
        <div className="relative size-60 card">
            <svg className="rotate-[135deg] size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2" strokeDasharray="75 100" strokeLinecap="round"></circle>
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-primary" strokeWidth="2" 
                    strokeDasharray={convert(percent)} 
                    strokeLinecap="round"
                    style={{
                        transition: 'stroke-dasharray 1s ease',
                    }}
                ></circle>
            </svg>
            
            <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-4xl font-bold text-dark_secondary">
                    <NumericText val={percentText(percent)} spacing={8} />
                </span>
                <span className="text-dark_secondary block">Complete</span>
            </div>
        </div>
    )
}