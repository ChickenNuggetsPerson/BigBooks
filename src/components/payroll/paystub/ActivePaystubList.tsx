'use client'

import getActivePaystubs from "@/actions/paystub/getActivePaystubs"
import { Divider } from "@/components/Forms/Divider"
import { Prisma } from "@/database/generated/prisma"
import { deserializeData } from "@/utils/serialization"
import { useEffect, useState } from "react"
import { PaystubCard } from "./PaystubCard"





export default function ActivePaystubList() {

    const [paystubs, setPaystubs] = useState([] as Prisma.PayStubGetPayload<{ select: { employee: true, uuid: true } }>[])
    const [index, setIndex] = useState(null as number | null)
    useEffect(() => {
        async function load() {
            setPaystubs(deserializeData(await getActivePaystubs()))
        }
        load()
    }, [])

    return (
        <div className="flex flex-row gap-5 select-none">

            <div className="card w-2xs h-fit">
                <p className="font-semibold">Saved Paystubs:</p>
                <Divider />

                {paystubs.map((stub, i) => (
                    <div key={stub.uuid} className="icon bg-primary/70 text-white font-bold mb-2" onClick={() => setIndex(i)}>
                        {`${stub.employee.firstName} ${stub.employee.lastName}`}
                    </div>
                ))}
            </div>

            {(index !== null) && (index < paystubs.length) &&
                <PaystubCard stubUUID={paystubs[index].uuid} />
            }

        </div>
    )
}