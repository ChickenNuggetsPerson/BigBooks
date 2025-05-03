'use client'

import AnimateChildren from "@/components/AnimateChildren";
import { getEmptyDispPayPeriod, periodToStr } from "@/database/models/DisplayModels";
import { useEffect, useState } from "react";
import PayPeriodGuage from "./PayPeriodGuage";
import { useCompany } from "@/app/CompanyContext";
import getCurrentPayperiod from "@/actions/payperiod/getPayperiodByDate";

export default function PayPeriodOverview() {

    const {context} = useCompany()
    const [period, setPeriod] = useState(getEmptyDispPayPeriod())

    useEffect(() => {
        async function load() {
            
            const current = await getCurrentPayperiod(context?.companyUUID ?? "", new Date(), true)
            if (current) {
                setPeriod(current)
            }
        }

        load()
    }, [context?.companyUUID])

    return (
        <AnimateChildren x={-50} y={0}>

            <div className="card max-w-100 mb-5">
                <h1 className="font-semibold">Pay Period:</h1>
                <div className="h-px bg-accent mb-2"></div>
                <h2 className="font-mono">
                    {periodToStr(period)}
                </h2>
            </div>

            <PayPeriodGuage p={period} />

        </AnimateChildren>
    )
}