'use client'

import AnimateChildren from "@/components/Decorative/AnimateChildren";
import NumericText from "@/components/Decorative/NumericText/Counter";
import TextInput from "@/components/Forms/TextInput";
import { DispPaystub } from "@/database/models/DisplayModels";
import { NumInput } from "./PaystubForm";
import { HourlyRateStr, HourStr, PaddedMoneyStr } from "@/functions/MoneyStr";
import { percentToStr } from "@/functions/PercentStr";






export default function PaystubCard({ stub }: { stub: DispPaystub }) {


    const gross = stub.salary + stub.hourly.reduce((sum, h) => sum + h.amount, 0) + stub.commission + stub.bonus;
    const taxes = stub.mediAmt + stub.stateAmt + stub.socialAmt + stub.federalAmt;
    const otherItems = stub.otherItems.reduce((sum, i) => sum + i.amount, 0);
    const netPay = gross - taxes + otherItems;


    return (
        <div className="max-w-100">

            <h5 className="text-3xl font-bold tracking-tight text-gray-900 ">
                <NumericText val={"Ending in: " + stub.periodEnd.toLocaleDateString()} spacing={2} />
            </h5>
            <div className="h-px bg-accent mb-5"></div>


            {/* First card */}
            <div className="card mb-5">

                <AnimateChildren x={0} y={-20}>

                    {/* Salary */}
                    {stub.salary !== 0 && <>
                        <NumInput id={"salary"} label={"Salary"} val={stub.salary} disabled={true} cb={() => { }} />
                    </>}

                    {/* Hourly */}
                    {stub.salary == 0 && <>

                        <div className="">
                            {stub.hourly.map((hourly, index) => (<div key={index} className="grid grid-cols-3 w-full">

                                Finish this :3

                                <p className="font-mono">{hourly.name}</p>
                                <p className="opacity-60 font-mono">{HourlyRateStr(hourly.rate)}</p>
                                <p className="font-mono flex w-20">{HourStr(hourly.hours)}</p>

                            </div>))}
                        </div>

                    </>}

                    <div className="h-px bg-accent mb-5"></div>

                    <div className="flex flex-row justify-between">
                        <TextInput id={""} label={""} val={"Commissions:"} placeholder={""} disabled={true} />

                        <div className="max-w-40 ml-10">
                            <NumInput id={`commissions`} label={""} val={stub.commission} disabled={false} cb={() => { }} />
                        </div>
                    </div>

                    <div className="flex flex-row justify-between">
                        <TextInput id={""} label={""} val={"Bonus:"} placeholder={""} disabled={true} />

                        <div className="max-w-40 ml-10">
                            <NumInput id={`bonus`} label={""} val={stub.bonus} disabled={false} cb={() => { }} />
                        </div>
                    </div>

                    <div className="h-px bg-accent mb-5"></div>

                    <div className="flex flex-row justify-between text-md font-bold tracking-tight text-gray-900 ">
                        <p>Gross Earnings: </p>
                        <NumericText val={PaddedMoneyStr(gross, 20, true)} spacing={-5} animDelta={10} />
                    </div>
                </AnimateChildren>
            </div>

            {/* Second Card */}
            <div className="card mb-5">

                <AnimateChildren x={0} y={-20}>

                    <div className="flex flex-row gap-2">

                        <TextInput id={``} label={""} val={"Federal Tax"} placeholder={""} disabled={true} />
                        <TextInput id={``} label={""} val={percentToStr(stub.federalRate)} placeholder={""} disabled={true} />
                        <NumericText val={PaddedMoneyStr(stub.federalAmt, 15, true)} spacing={-5} />

                    </div>

                    <div className="flex flex-row gap-2">

                        <TextInput id={``} label={""} val={"State Tax"} placeholder={""} disabled={true} />
                        <TextInput id={``} label={""} val={percentToStr(stub.stateRate)} placeholder={""} disabled={true} />
                        <NumericText val={PaddedMoneyStr(stub.stateAmt, 15, true)} spacing={-5} />

                    </div>

                    <div className="flex flex-row gap-2">

                        <TextInput id={``} label={""} val={"Medicare"} placeholder={""} disabled={true} />
                        <TextInput id={``} label={""} val={percentToStr(stub.mediRate)} placeholder={""} disabled={true} />
                        <NumericText val={PaddedMoneyStr(stub.mediAmt, 15, true)} spacing={-5} />

                    </div>

                    <div className="flex flex-row gap-2">

                        <TextInput id={``} label={""} val={"Social Security"} placeholder={""} disabled={true} />
                        <TextInput id={``} label={""} val={percentToStr(stub.socialRate)} placeholder={""} disabled={true} />
                        <NumericText val={PaddedMoneyStr(stub.socialAmt, 15, true)} spacing={-5} />

                    </div>

                    <div className="h-px bg-accent mb-5"></div>

                    <div className="flex flex-row justify-between text-md font-bold tracking-tight text-gray-900 ">
                        <p>Total Taxes: </p>
                        <NumericText val={PaddedMoneyStr(taxes, 20, true)} spacing={-5} animDelta={10} />
                    </div>

                </AnimateChildren>
            </div>

            {/* Third Card */}
            <div className="card mb-5">

                <AnimateChildren x={0} y={-20}>

                    <p>Deductions + Reimbursements</p>
                    <p>TODO: Figure this out</p>

                    <div className="h-px bg-accent mb-5"></div>

                    <div className="flex flex-row justify-between text-md font-bold tracking-tight text-gray-900 ">
                        <p>Total Payroll Items: </p>
                        <NumericText val={PaddedMoneyStr(otherItems, 20, true)} spacing={-5} animDelta={10} />
                    </div>

                </AnimateChildren>
            </div>

            {/* Fourth Card */}
            <div className="card mb-5">

                <AnimateChildren x={0} y={-20}>

                    <TextInput id={"empUUID"} label={"empUUID"} val={stub.employeeUUID} placeholder={""} disabled={true} />
                    <TextInput id={"periodUUID"} label={"periodUUID"} val={stub.payperiodUUID} placeholder={""} disabled={true} />
                    <TextInput id={"stubUUID"} label={"stubUUID"} val={stub.uuid} placeholder={""} disabled={true} />

                    <div className="h-px bg-accent mb-5"></div>

                    <div className="flex flex-row justify-between text-md font-bold tracking-tight text-gray-900 ">
                        <p>Net Pay: </p>
                        <NumericText val={PaddedMoneyStr(netPay, 20, true)} spacing={-5} animDelta={10} />
                    </div>

                </AnimateChildren>
            </div>

        </div>
    )
}

