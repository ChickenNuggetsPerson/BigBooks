'use client'

import getEmployeeProps from "@/actions/employee/getEmployeeProps"
import getPaystub from "@/actions/paystub/getPaystub"
import Loading from "@/components/Decorative/Loading/Loading"
import EditableDiv from "@/components/Decorative/EditableDiv"
import { Divider } from "@/components/Forms/Divider"
import { PayStubItem, PayStubItemType, Prisma } from "@/database/generated/prisma"
import { HourlyRateStr, HourStr, MoneyToStr } from "@/utils/functions/MoneyStr"
import { percentToStr } from "@/utils/functions/PercentStr"
import { deserializeData, SerializationResult } from "@/utils/serialization"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import React from "react"
import ScrollCard from "@/components/Decorative/ScrollCard"
import { useModalManager } from "@/components/Decorative/Modal/ModalContext"
import ClickableDiv from "@/components/Decorative/ClickableDiv"
import { CardProp } from "@/components/Forms/CardProp"





type Payload = Prisma.PayStubGetPayload<{ include: { employee: true, items: true } }>

export function PaystubCard({
    stubUUID = "",
    stub,
    editable = false,
    downloadable = false
}: {
    stubUUID?: string,
    stub?: SerializationResult<Payload>,
    editable?: boolean,
    downloadable?: boolean
}) {

    const scrollRef = useRef(null)
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

            const emp = await getEmployeeProps(st.employeeId)
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
        return (<Loading vCenter hCenter />)
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
        <div className="w-full flex flex-row gap-8 justify-center">

            <div className="flex flex-col gap-4">
                <EditableDiv className="card w-3xs" url={`/organization/paystubs/stub/${paystub.uuid}/edit`} enabled={editable}>
                    <p className="font-semibold text-lg">{`${paystub.employee.firstName} ${paystub.employee.lastName}`}</p>
                    <Divider />
                    <p>{`Period Start: ${paystub.periodStart.toLocaleDateString()}`}</p>
                    <p>{`Period End: ${paystub.periodEnd.toLocaleDateString()}`}</p>
                    <p>{`Pay Date: ${paystub.payDate.toLocaleDateString()}`}</p>
                </EditableDiv>

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

                {downloadable &&
                    <Link href={`/organization/paystubs/stub/${paystub.uuid}/download`} target="_blank" className="primary-button w-full text-center">
                        Download Paystub
                    </Link>
                }
            </div>

            <div className="card overflow-clip" style={{ padding: 0 }}>
                <div
                    className="flex flex-col gap-4 h-[75dvh] overflow-y-scroll shadow-inner"
                    style={{ padding: 6, scrollbarWidth: "none" }}
                    ref={scrollRef}
                >

                    <ScrollCard containerRef={scrollRef}>
                        <PaystubItemGroupView name={"Earnings"} items={earnings} total={paystub.grossEarnings.toNumber()} />
                    </ScrollCard>

                    <ScrollCard containerRef={scrollRef}>
                        <PaystubItemGroupView name={"Taxes"} items={tax} total={paystub.totalTaxes.toNumber()} />
                    </ScrollCard>

                    <ScrollCard containerRef={scrollRef}>
                        <PaystubItemGroupView name={"Other Items"} items={other} total={paystub.totalExtras.toNumber()} />
                    </ScrollCard>

                    <ScrollCard containerRef={scrollRef}>
                        <div className="grid grid-cols-4 gap-4 card">
                            <p className="font-semibold text-2xl">Net Pay:</p>
                            <p></p>
                            <p></p>
                            <p>{MoneyToStr(paystub.netPay.toNumber())}</p>
                        </div>
                    </ScrollCard>
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

                <div className="col-span-2"></div>
                <p>Total:</p>
                <p>{MoneyToStr(total)}</p>
            </div>
        </div>
    )
}


function PaystubItemView({ item }: { item: PayStubItem }) {

    const { addModal } = useModalManager();
    function itemClicked() {
        addModal({
            background: false,
            component: (push, pop) => <PaystubItemModal item={item} />
        })
    }

    function Sep() {
        return (
            <div className="h-px bg-primary w-5/7 col-span-4"></div>
        )
    }

    if (item.hours && item.rate) {
        return (
            <>
                <ClickableDiv className="select-none" onClick={itemClicked}>
                    <p>{item.name}</p>
                </ClickableDiv>
                <p className="ml-auto mr-4">{HourStr(item.hours.toNumber())}</p>
                <p>{HourlyRateStr(item.rate.toNumber())}</p>
                <p>{MoneyToStr(item.amount.toNumber())}</p>

                <Sep />
            </>
        )
    }

    if (item.percent) {
        return (
            <>
                <ClickableDiv className="col-span-2 select-none" onClick={itemClicked}>
                    <p>{item.name}</p>
                </ClickableDiv>
                <p>{percentToStr(item.percent.toNumber())}</p>
                <p>{MoneyToStr(item.amount.toNumber())}</p>

                <Sep />
            </>
        )
    }

    return (
        <>
            <ClickableDiv className="col-span-3 select-none" onClick={itemClicked}>
                <p>{item.name}</p>
            </ClickableDiv>
            <p>{MoneyToStr(item.amount.toNumber())}</p>

            <Sep />
        </>
    )
}




// type PayStubItem = {
//     payrollItemId: string | null;
//     compensationId: string | null;
//     hourlyRateId: string | null;
//     taxID: string | null;
// }

function PaystubItemModal({ item }: { item: PayStubItem }) {

    return (
        <div className="smallCard">
            <div className="smallCard min-w-sm" style={{ padding: "1rem" }}>

                <h1 className="font-semibold text-xl">{item.name}</h1>
                <Divider />
                <CardProp label="Type:" val={item.type} />
                <CardProp label="Amount:" val={MoneyToStr(item.amount.toNumber())} />

                {(item.hours || item.percent || item.rate) && (
                    <>
                        <Divider />
                        {item.hours && (
                            <CardProp label="Hours:" val={HourStr(item.hours.toNumber())} />
                        )}
                        {item.rate && (
                            <CardProp label="Rate:" val={HourlyRateStr(item.rate.toNumber())} />
                        )}
                        {item.percent && (
                            <CardProp label="Percent:" val={percentToStr(item.percent.toNumber())} />
                        )}
                    </>
                )}

                {item.description && (
                    <>
                        <Divider />
                        <p className="pb-1">Description:</p>
                        <div className="bg-gray-200 rounded-2xl p-3 max-h-40 overflow-scroll">
                            <p>{item.description}</p>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}