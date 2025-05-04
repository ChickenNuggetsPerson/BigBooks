'use client'


import getAllPayperiods from "@/actions/payperiod/getAllPayperiods"
import { useCompany } from "@/app/CompanyContext"
import SelectInput from "@/components/Forms/SelectInput"
import { DispPayPeriod, periodToStr } from "@/database/models/DisplayModels"
import { useEffect, useState } from "react"


interface PayPeriodListProps {
    period: DispPayPeriod,
    changeCB: (val: string) => void
}
export default function PayPeriodList({ period, changeCB }: PayPeriodListProps) {


    const { context } = useCompany()
    const [all, setAll] = useState([] as { label: string, id: string }[])

    useEffect(() => {
        async function load() {

            const periods = await getAllPayperiods(context?.companyUUID ?? "")
            const options = periods.map((o) => { return { label: periodToStr(o), id: o.uuid } })
            setAll(options)
        }
        load()
    }, [context?.companyUUID])

    return (
        <div className="mr-10">

            {all.length != 0 &&
                <SelectInput id={""} label={"Select Payperiod:"} val={period.uuid} disabled={false} options={all} changeCB={(val) => { changeCB(val) }} searchable={true} />
            }

        </div>
    )
}