'use client'

import { useEffect, useState } from "react"
import DateInput from "../Forms/DateInput"
import { PayrollGroup } from "@/database/generated/prisma"
import getOrgPayrollGroups from "@/actions/payrollGroup/getOrgPayrollGroups"
import SelectInput from "../Forms/SelectInput"
import { Divider } from "../Forms/Divider"
import { nextOccurence } from "@/utils/functions/Date"
import toast from "react-hot-toast"




type Period = {
    start: Date,
    end: Date,
    pay: Date
}

export default function PayrollInportGroupForm({ initialPeriod, changeCB }: { initialPeriod: Period, changeCB: (data: Period) => void }) {

    const [groups, setGroups] = useState([] as PayrollGroup[])
    useEffect(() => {
        async function load() {
            setGroups(await getOrgPayrollGroups())
        }
        load()
    }, [])

    const [selectedGroup, setSelectedGroup] = useState("")
    const options = groups.map(group => { return { id: group.uuid, label: group.name } })


    const [state, setState] = useState(initialPeriod)
    useEffect(() => {
        setState(initialPeriod)
    }, [initialPeriod])

    function importGroup(val: string) {
        setSelectedGroup(val)

        const group = groups.find(v => v.uuid == val)
        if (!group) { return }

        const nextEnd = nextOccurence(group.periodRefDate, group.payFrequency)
        const nextStart = new Date(nextEnd)
        nextStart.setDate(nextEnd.getDate() - group.payFrequency)

        nextEnd.setDate(nextEnd.getDate() - 1)

        const pay = nextOccurence(group.payRefDate, group.payFrequency)
        pay.setDate(pay.getDate() - 1)

        setState({
            start: nextStart,
            end: nextEnd,
            pay: pay
        })
    }

    function save() {
        changeCB(state)
        toast.success("Saved Period Info")
    }

    return (
        <div className="flex flex-row gap-10">

            <div className="card h-fit w-xs">
                <p>Import Dates From:</p>
                <Divider />
                <div className="h-2"></div>
                <SelectInput label="Group" val={selectedGroup} options={options} changeCB={importGroup} />

            </div>

            <div className="card h-fit">

                <p className="font-semibold">Payroll Dates:</p>

                <Divider />
                <div className="h-2"></div>

                <div className="flex flex-row gap-8">
                    <DateInput label="Period Start:" val={state.start} onChange={(val) => { setState({ ...state, start: val }) }} />

                    <DateInput label="Period End:" val={state.end} onChange={(val) => { setState({ ...state, end: val }) }} />

                    <DateInput label="Pay Date:" val={state.pay} onChange={(val) => { setState({ ...state, pay: val }) }} />
                </div>

                <button className="primary-button mt-4" onClick={save}>Save Dates</button>
            </div>

        </div>
    )
}