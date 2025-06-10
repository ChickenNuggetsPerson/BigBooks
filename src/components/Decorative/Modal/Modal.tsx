'use client'

import { ReactNode } from "react";
import { useModalManager } from "./ModalContext";
import { X } from "lucide-react";


export interface ModalProps {
    title: string,
    required: boolean
    component: (push: (modal: ModalProps) => void, pop: () => void) => ReactNode
}

export default function Modal({ modal }: { modal: ModalProps }) {

    const { addModal, popModal } = useModalManager()

    return (
        <div className="card min-w-md w-fit h-fit">

            <div className="relative">
                <div className="absolute right-0">
                    <X onClick={popModal} className="cursor-pointer" />
                </div>
            </div>

            {modal.title.trim() !== "" &&
                <>
                    <h1 className="text-2xl font-bold">
                        {modal.title}
                    </h1><div className="h-px bg-accent mb-3"></div>
                </>
            }

            <div style={{
                zIndex: 1000
            }}>
                {modal.component(addModal, popModal)}
            </div>

        </div>
    )
}