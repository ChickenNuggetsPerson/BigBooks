'use client'

import { ReactNode } from "react"
import { useModalManager } from "./ModalContext"



interface OpenModalBtnProps {
    modal: ReactNode,
    title: string, 
    text: string,
    className: string
}

export default function OpenModalBtn({ modal, title, text, className } : OpenModalBtnProps) {

    const { addModal } = useModalManager()

    return (
        <button onClick={() => { addModal({component: modal, title: title, required: false}) }} className={className}>
            {text}
        </button>
    )
}
