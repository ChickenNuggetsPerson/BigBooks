'use client'


import getEmployeeProps from "@/actions/employee/getEmployeeProps";
import getOrgDetails from "@/actions/organization/getOrgDetails";
import getPaystub from "@/actions/paystub/getPaystub";
import AnimateChildren from "@/components/AnimateChildren";
import NumericText from "@/components/Decorative/NumericText/NumericText";
import { Divider } from "@/components/Forms/Divider";
import NumberInput from "@/components/Forms/NumberInput";
import TextInput from "@/components/Forms/TextInput";
import { getEmptyDispEmployee, getEmptyDispOrganization, getEmptyDispPaystub } from "@/database/models/DisplayModels";
import { getEmptyPaystubHourly } from "@/database/models/SchemaJSON";
import { updateTaxes } from "@/database/Taxes/TaxTypes";
import { MoneyToStr, PaddedMoneyStr } from "@/functions/MoneyStr";
import { percentToStr } from "@/functions/PercentStr";
import { useEffect, useState } from "react";






interface PaystubFormProps { empUUID: string, periodUUID: string }
export default function PaystubForm({ empUUID, periodUUID }: PaystubFormProps) {

    const [loaded, setLoaded] = useState(false)
    const [organization, setOrganization] = useState(getEmptyDispOrganization())
    const [employee, setEmployee] = useState(getEmptyDispEmployee())
    const [paystub, setPaystub] = useState(getEmptyDispPaystub())

    useEffect(() => {
        async function load() {

            const e = await getEmployeeProps(empUUID, true)
            if (e) {
                setEmployee(e)
            } else {
                return // Employee not found
            }

            const o = await getOrgDetails(e.orgUUID)
            if (o) {
                setOrganization(o)
            }

            const p = await getPaystub(empUUID, periodUUID)
            if (p) {
                setPaystub(p)
            } else {
                setPaystub(updateTaxes(e, o)) // Generate default items
            }

            setLoaded(true)

        }
        load()
    }, [empUUID, periodUUID])



    function updateHourly(name: string, hours: number) {
        const newStub = { ...paystub }
        const index = newStub.hourly.findIndex((h) => { return h.name == name })
        if (index != -1) {
            newStub.hourly[index].hours = hours
            newStub.hourly[index].amount = newStub.hourly[index].rate * hours
        }

        setPaystub(newStub)
    }

    function updateCommissionAndBonus(c: number, b: number) {
        const newStub = { ...paystub }
        newStub.commission = c
        newStub.bonus = b
        setPaystub(newStub)
    }



    const [grossEarnings, setGrossEarnings] = useState(0)
    const [totalTaxes, setTotalTaxes] = useState(0)
    const [otherItems, setOtherItems] = useState(0)
    const [netPay, setNetPay] = useState(0)

    useEffect(() => { // update display totals

        let gross = paystub.salary
        paystub.hourly.forEach((hourly) => {
            gross += hourly.amount
        })
        gross += paystub.commission + paystub.bonus
        setGrossEarnings(gross)

        const taxes = paystub.mediAmt + paystub.stateAmt + paystub.socialAmt + paystub.federalAmt
        setTotalTaxes(taxes)
    }, [paystub])

    useEffect(() => {
        const newStub = { ...paystub } // Update tax amts
        newStub.federalAmt = newStub.federalRate * grossEarnings
        newStub.stateAmt = newStub.stateRate * grossEarnings
        newStub.mediAmt = newStub.mediRate * grossEarnings
        newStub.socialAmt = newStub.socialAmt * grossEarnings
        setPaystub(newStub)
    }, [grossEarnings])


    return (
        <>

            {loaded && <form className="max-w-md mx-auto " >
                <h5 className="text-3xl font-bold tracking-tight text-gray-900 ">
                    <NumericText val={employee.firstName + " " + employee.lastName} spacing={2} />
                </h5>
                <div className="h-px bg-accent mb-5"></div>


                {/* First card */}
                <div className="card mb-5">

                    <AnimateChildren x={0} y={-20}>

                        {/* Salary */}
                        {employee.isSalary && <>
                            <NumInput id={"salary"} label={"Salary"} val={paystub.salary} disabled={true} cb={(val) => { }} />
                        </>}

                        {/* Hourly */}
                        {!employee.isSalary && <>

                            <div className="">
                                {paystub.hourly.map((hourly, index) => (<div key={index} className="flex flex-row">

                                    <TextInput id={`rate-${index}-name`} label={"Rate:"} val={hourly.name} placeholder={""} disabled={true} />
                                    <NumInput id={`rate-${index}-rate`} label={"$ / hr"} val={hourly.rate} disabled={true} cb={() => { }} />
                                    <NumInput id={`rate-${index}-hours`} label={"Hours"} val={hourly.hours} disabled={false} cb={(val) => { updateHourly(hourly.name, val) }} />

                                </div>))}
                            </div>

                        </>}

                        <div className="h-px bg-accent mb-5"></div>

                        <div className="flex flex-row justify-between">
                            <TextInput id={""} label={""} val={"Commissions:"} placeholder={""} disabled={true} />

                            <div className="max-w-40 ml-10">
                                <NumInput id={`commissions`} label={""} val={paystub.commission} disabled={false} cb={(val) => { updateCommissionAndBonus(val, paystub.bonus) }} />
                            </div>
                        </div>

                        <div className="flex flex-row justify-between">
                            <TextInput id={""} label={""} val={"Bonus:"} placeholder={""} disabled={true} />

                            <div className="max-w-40 ml-10">
                                <NumInput id={`bonus`} label={""} val={paystub.bonus} disabled={false} cb={(val) => { updateCommissionAndBonus(paystub.commission, val) }} />
                            </div>
                        </div>

                        <div className="h-px bg-accent mb-5"></div>

                        <div className="flex flex-row justify-between text-md font-bold tracking-tight text-gray-900 ">
                            <p>Gross Earnings: </p>
                            <NumericText val={PaddedMoneyStr(grossEarnings, 20, true)} spacing={-5} animDelta={10} />
                        </div>
                    </AnimateChildren>
                </div>

                {/* Second Card */}
                <div className="card mb-5">

                    <AnimateChildren x={0} y={-20}>

                        <div className="flex flex-row gap-2">

                            <TextInput id={``} label={""} val={"Federal Tax"} placeholder={""} disabled={true} />
                            <TextInput id={``} label={""} val={percentToStr(paystub.federalRate)} placeholder={""} disabled={true} />
                            <NumericText val={PaddedMoneyStr(paystub.federalAmt, 15, true)} spacing={-5} />

                        </div>

                        <div className="flex flex-row gap-2">

                            <TextInput id={``} label={""} val={"State Tax"} placeholder={""} disabled={true} />
                            <TextInput id={``} label={""} val={percentToStr(paystub.stateRate)} placeholder={""} disabled={true} />
                            <NumericText val={PaddedMoneyStr(paystub.stateAmt, 15, true)} spacing={-5} />

                        </div>

                        <div className="flex flex-row gap-2">

                            <TextInput id={``} label={""} val={"Medicare"} placeholder={""} disabled={true} />
                            <TextInput id={``} label={""} val={percentToStr(paystub.mediRate)} placeholder={""} disabled={true} />
                            <NumericText val={PaddedMoneyStr(paystub.mediAmt, 15, true)} spacing={-5} />

                        </div>

                        <div className="flex flex-row gap-2">

                            <TextInput id={``} label={""} val={"Social Security"} placeholder={""} disabled={true} />
                            <TextInput id={``} label={""} val={percentToStr(paystub.socialRate)} placeholder={""} disabled={true} />
                            <NumericText val={PaddedMoneyStr(paystub.socialAmt, 15, true)} spacing={-5} />

                        </div>

                        <div className="h-px bg-accent mb-5"></div>

                        <div className="flex flex-row justify-between text-md font-bold tracking-tight text-gray-900 ">
                            <p>Total Taxes: </p>
                            <NumericText val={PaddedMoneyStr(totalTaxes, 20, true)} spacing={-5} animDelta={10} />
                        </div>

                    </AnimateChildren>
                </div>

            </form>}

        </>
    )
}






interface NumInputProps {
    id: string
    label: string
    val: number
    disabled: boolean
    cb: (val: number) => void
}
function NumInput({ id, label, val, disabled, cb }: NumInputProps) {

    const inputHandler = (e: { target: { value: string; }; }) => { // Filter search
        cb(Number(e.target.value))
    };

    return (
        <div className={"relative z-0 w-full mb-5 group " + (disabled ? "opacity-50" : "")}>
            <input onChange={inputHandler} type="number" name={id} id={id} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={val} step="any" readOnly={disabled} />
            <label htmlFor={id} className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
        </div>
    )
}