'use client'

import getEmployeeProps from "@/actions/employee/getEmployeeProps"
import getPaystub from "@/actions/paystub/getPaystub"
import { Divider } from "@/components/Forms/Divider"
import { PayStubItem, PayStubItemType, Prisma } from "@/database/generated/prisma"
import { HourlyRateStr, HourStr, MoneyToStr } from "@/utils/functions/MoneyStr"
import { percentToStr } from "@/utils/functions/PercentStr"
import { deserializeData, SerializationResult } from "@/utils/serialization"
import { useEffect, useState } from "react"





type Payload = Prisma.PayStubGetPayload<{ include: { employee: true, items: true } }>

export function PaystubCard({
    stubUUID = "",
    stub
}: {
    stubUUID?: string,
    stub?: SerializationResult<Payload>
}) {

    const [paystub, setPaystub] = useState(null as Payload | null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function load() {

            if (stub) {
                setPaystub(deserializeData(stub))
                return
            }

            setLoading(true)
            const st = deserializeData(await getPaystub(stubUUID))
            if (!st) {
                setLoading(false)
                return
            }

            const emp = await getEmployeeProps(st.employeeId, true)
            if (!emp) {
                setLoading(false)
                return
            }

            setPaystub({
                ...st,
                employee: emp
            })
            setLoading(false)
        }
        load()
    }, [stub, stubUUID])


    if (loading) {
        return (
            <div className="card w-fit h-fit">
                Loading...
            </div>
        )
    }

    if (!paystub) {
        return (
            <div className="card w-fit h-fit">
                Invalid Paystub
            </div>
        )
    }

    const earnings = paystub.items.filter(item => item.type == PayStubItemType.Earning)
    const tax = paystub.items.filter(item => item.type == PayStubItemType.Tax)
    const other = paystub.items.filter(item => item.type == PayStubItemType.Other)

    return (
        <div className="w-full flex flex-row gap-8 pb-50 justify-center">

            <div className="flex flex-col gap-4">
                <div className="card w-3xs">
                    <p className="font-semibold text-lg">{`${paystub.employee.firstName} ${paystub.employee.lastName}`}</p>
                    <Divider />
                    <p>{`Period Start: ${paystub.periodStart.toLocaleDateString()}`}</p>
                    <p>{`Period End: ${paystub.periodEnd.toLocaleDateString()}`}</p>
                    <p>{`Pay Date: ${paystub.payDate.toLocaleDateString()}`}</p>
                </div>

                <div className="card h-fit w-3xs">
                    <div className="flex flex-row w-full justify-between">
                        <p>Gross:</p>
                        <p className="font-semibold">{MoneyToStr(paystub.grossEarnings.toNumber())}</p>
                    </div>
                    <div className="flex flex-row w-full justify-between">
                        <p>Taxes:</p>
                        <p className="font-semibold">{MoneyToStr(paystub.totalTaxes.toNumber())}</p>
                    </div>
                    <div className="flex flex-row w-full justify-between">
                        <p>Extra:</p>
                        <p className="font-semibold">{MoneyToStr(paystub.totalExtras.toNumber())}</p>
                    </div>
                    <Divider />
                    <div className="flex flex-row w-full justify-between">
                        <p>Net Pay:</p>
                        <p className="font-semibold">{MoneyToStr(paystub.netPay.toNumber())}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <PaystubItemGroupView name={"Earnings"} items={earnings} total={paystub.grossEarnings.toNumber()} />
                <PaystubItemGroupView name={"Taxes"} items={tax} total={paystub.totalTaxes.toNumber()} />
                <PaystubItemGroupView name={"Other Items"} items={other} total={paystub.totalExtras.toNumber()} />

                <div className="grid grid-cols-4 gap-4 card">
                    <p className="font-semibold text-2xl">Net Pay:</p>
                    <p></p>
                    <p></p>
                    <p>{MoneyToStr(paystub.netPay.toNumber())}</p>
                </div>
            </div>
        </div>
    )
}


function PaystubItemGroupView({ name, items, total }: { name: string, items: PayStubItem[], total: number }) {

    if (items.length == 0) {
        return (<></>)
    }

    return (
        <div className="card">
            <p className="font-semibold text-2xl">{name}</p>
            <Divider />

            <div className="grid grid-cols-4 gap-1">
                {items.map(item => (
                    <PaystubItemView key={item.uuid} item={item} />
                ))}

                <div className="col-span-3"></div>
                <p>{MoneyToStr(total)}</p>
            </div>
        </div>
    )
}


function PaystubItemView({ item }: { item: PayStubItem }) {

    function Desc() {
        if (item.description) { // TODO: Figure out how to show the description nicely
            return (
                <>
                    <div className="h-px bg-primary w-5/7 col-span-4"></div>
                </>
            )
        }
        return (
            <div className="h-px bg-primary w-5/7 col-span-4"></div>
        )
    }

    if (item.hours && item.rate) {
        return (
            <>
                <p>{item.name}</p>
                <p>{HourStr(item.hours.toNumber())}</p>
                <p>{HourlyRateStr(item.rate.toNumber())}</p>
                <p>{MoneyToStr(item.amount.toNumber())}</p>

                <Desc />
            </>
        )
    }

    if (item.percent) {
        return (
            <>
                <p className="col-span-2">{item.name}</p>
                <p>{percentToStr(item.percent.toNumber())}</p>
                <p>{MoneyToStr(item.amount.toNumber())}</p>

                <Desc />
            </>
        )
    }

    return (
        <>
            <p className="col-span-3">{item.name}</p>
            <p>{MoneyToStr(item.amount.toNumber())}</p>

            <Desc />
        </>
    )
}