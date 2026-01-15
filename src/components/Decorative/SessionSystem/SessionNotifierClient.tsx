'use client'

import { useEffect, useState } from "react"
import { useModalManager } from "../Modal/ModalContext"
import { infoUser } from "../Modals/infoUser"
import { useCompany } from "@/app/CompanyContext"
import NumericText from "../NumericText/NumericText"


function getCountDownText(time: Date) {
    const now = new Date()
    const dm = time.getTime() - now.getTime()
    const ds = Math.floor(dm / 1000)

    const hours = Math.floor(ds / 3600);
    const minutes = Math.floor((ds % 3600) / 60);
    const seconds = ds % 60;

    return {
        hours,
        minutes,
        seconds
    }
}

function formatNumber(n: number) {
    if (n < 10) {
        return `0${n}`
    }
    return `${n}`
}

export function SessionNotifierClient() {

    const { context } = useCompany()
    const { addModal } = useModalManager()
    const [text, setText] = useState("00:00:00")

    if (!context?.sessionExpireTime) {
        return (<SessionNotifierNoSession />)
    }

    useEffect(() => {
        const id = setInterval(() => {
            const d = getCountDownText(new Date(context?.sessionExpireTime))

            if (d.hours !== 0) {
                setText(`${formatNumber(d.hours)}:${formatNumber(d.minutes)}:${formatNumber(d.seconds)}`)
            } else {
                setText(`${formatNumber(d.minutes)}:${formatNumber(d.seconds)}`)
            }

        }, 1000);

        return () => { clearInterval(id) }
    }, [context.sessionExpireTime])

    function clicked() {
        infoUser({
            addModal,
            title: "Session Time",
            message: "This clock shows how much time is left before you are automatically logged out. Certain actions will refresh this clock."
        })
    }

    return (
        // <h1 className="text-gray-600 animate-pulse" onClick={clicked} >{text}</h1>
        <div className="text-gray-600 animate-pulse w-full" onClick={clicked}>
            <NumericText val={text} spacing={-5} />
        </div>
    )
}


export function SessionNotifierNoSession() {
    return (<h1 className="text-gray-600">Not Logged In</h1>)
}