'use client';

import React, { useState } from 'react';
import { ModalContext } from './ModalContext';
import Modal, { ModalProps } from './Modal';
import { Backdrop } from "@mui/material"


export default function ModalContainer({ children }: { children: React.ReactNode }) {

    const [modals, setModals] = useState([] as ModalProps[])

    function addModal(modal: ModalProps) {
        setModals([...modals, modal])
    }
    function popModal() {
        if (modals[modals.length - 1].required) { return }
        forcePopModal()
    }

    function forcePopModal() {
        if (modals.length == 0) { return }

        const m = [...modals].toSpliced(modals.length - 1, 1)
        setModals(m)
    }

    return (
        <ModalContext addModal={addModal} popModal={forcePopModal} >

            <Backdrop sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })} open={modals.length !== 0} onClick={popModal}>
                {modals.map((modal, i) => (
                    <div key={`Modals-${i}`} onClick={(e) => { e.stopPropagation() }}>
                        <Modal modal={modal}/>
                    </div>
                ))}
            </Backdrop>

            {children}
        </ModalContext>
    );
}
