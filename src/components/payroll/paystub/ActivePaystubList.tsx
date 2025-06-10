'use client'

import getActivePaystubs from "@/actions/paystub/getActivePaystubs"
import { Prisma } from "@/database/generated/prisma"
import { deserializeData } from "@/utils/serialization"
import { useEffect, useState } from "react"





export default function ActivePaystubList() {

    const [paystubs, setPaystubs] = useState([] as Prisma.PayStubGetPayload<{ include: { employee: true } }>[])
    useEffect(() => {
        async function load() {
            setPaystubs(deserializeData(await getActivePaystubs()))
        }
        load()
    }, [])

    return (
        <div>

            <div className="card w-3xs h-fit">
                {paystubs.map(stub => (
                    <div key={stub.uuid}>
                        {`${stub.employee.firstName} ${stub.employee.lastName}`}
                    </div>
                ))}
            </div>

        </div>
    )
}