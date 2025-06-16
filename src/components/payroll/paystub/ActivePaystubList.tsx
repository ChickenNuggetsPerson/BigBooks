'use client'

import getActivePaystubs from "@/actions/paystub/getActivePaystubs"
import { Divider } from "@/components/Forms/Divider"
import { Prisma } from "@/database/generated/prisma"
import { deserializeData } from "@/utils/serialization"
import { useEffect, useState } from "react"
import { PaystubCard } from "./PaystubCard"
import toast from "react-hot-toast"
import submitPaystub from "@/actions/paystub/submitPaystub"





export default function ActivePaystubList({ editStub = () => { } }: { editStub?: (empUUID: string) => void }) {

    const [paystubs, setPaystubs] = useState([] as Prisma.PayStubGetPayload<{ select: { employee: true, uuid: true } }>[])
    const [index, setIndex] = useState(undefined as number | undefined)
    useEffect(() => {
        async function load() {
            setPaystubs(deserializeData(await getActivePaystubs()))
        }
        load()
    }, [])

    function saveStub() {
        if (index === undefined) { return }
        if (index < 0 || index >= paystubs.length) { return }
        const uuid = paystubs[index].uuid

        toast.promise(
            async () => {
                await submitPaystub(uuid)
                setTimeout(() => {
                    location.reload() 
                }, 2000);
            },
            {
                loading: "Submitting Paystub",
                success: "Paystub Submitted",
                error: "Error Submitting Paystub"
            }
        )
    }

    function editStubBtn() {
        if (index === undefined) { return }
        if (index < 0 || index >= paystubs.length) { return }
        const uuid = paystubs[index].employee.uuid
        editStub(uuid)
    }

    return (
        <div className="flex flex-row gap-5 select-none">

            <div className="card w-3xs h-fit">
                <p className="font-semibold">Active Paystubs:</p>
                <Divider />

                {paystubs.map((stub, i) => (
                    <div key={stub.uuid} className="icon bg-primary/70 text-white font-bold mb-2" onClick={() => setIndex(i)}>
                        {`${stub.employee.firstName} ${stub.employee.lastName}`}
                    </div>
                ))}
            </div>

            <div>

                {(index !== undefined) && (index < paystubs.length) &&
                    <div className="smallCard mb-5 flex flex-row w-full justify-between">
                        <p className="font-semibold text-lg my-auto ml-3">Review Paystub:</p>

                        <div className="flex flex-row gap-4">
                            <button style={{ borderRadius: 12 }} className="accent-button" onClick={editStubBtn} >Make Changes</button>
                            <button style={{ borderRadius: 12 }} className="primary-button" onClick={saveStub} >Save and Lock</button>
                        </div>
                    </div>
                }

                {(index !== undefined) && (index < paystubs.length) &&
                    <PaystubCard stubUUID={paystubs[index].uuid} />
                }
            </div>

        </div>
    )
}