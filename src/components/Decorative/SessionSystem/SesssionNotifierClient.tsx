'use client'

import { useEffect, useState } from "react"
import ClickableDiv from "../ClickableDiv"
import { useModalManager } from "../Modal/ModalContext"
import { infoUser } from "../Modals/infoUser"


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

export function SesssionNotifierClient({ expireTime }: { expireTime: Date }) {

    const { addModal } = useModalManager()
    const [text, setText] = useState("")

    useEffect(() => {
        const id = setInterval(() => {
            const d = getCountDownText(new Date(expireTime))

            if (d.hours !== 0) {
                setText(`${formatNumber(d.hours)}:${formatNumber(d.minutes)}:${formatNumber(d.seconds)}`)
            } else {
                setText(`${formatNumber(d.minutes)}:${formatNumber(d.seconds)}`)
            }

        }, 1000);

        return () => { clearInterval(id) }
    }, [expireTime])

    function clicked() {
        infoUser({
            addModal,
            title: "Session Time",
            message: "This clock shows how much time is left before you are logged out. Certain actions will refresh this clock."
        })
    }

    return (
        <ClickableDiv
            onClick={clicked}
            className="smallCard font-mono text-md overflow-clip h-fit"
            style={{ paddingInline: 10 }}
        >
            <h1 className="text-gray-600" >{text}</h1>
        </ClickableDiv>
    )
}


export function SessionNotifierNoSession() {
    return (<div className="smallCard" style={{ paddingInline: 10 }}>Not Logged In</div>)
}