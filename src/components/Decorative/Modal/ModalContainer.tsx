'use client';

import React, { useState } from 'react';
import { ModalContext } from './ModalContext';
import Modal, { ModalProps } from './Modal';

export default function ModalContainer({ children }: { children: React.ReactNode }) {
    const [modals, setModals] = useState<ModalProps[]>([]);

    function addModal(modal: ModalProps) {
        setModals(prev => [...prev, modal]);
    }

    function popModal() {
        if (modals[modals.length - 1]?.required) return;
        forcePopModal();
    }

    function forcePopModal() {
        if (modals.length === 0) return;
        setModals(prev => prev.toSpliced(prev.length - 1, 1));
    }

    return (
        <ModalContext addModal={addModal} popModal={forcePopModal}>

            {modals.map((modal, i) => (
                <div
                    key={`Modals-${i}`}
                    className='fixed top-0 left-0 w-screen h-screen flex flex-col justify-center'
                    style={{
                        zIndex: 999 + i * 200,
                        backgroundColor: "rgba(0.1, 0.1, 0.1, 0.05)",
                        backdropFilter: "blur(10px)"
                    }}
                    onClick={popModal}
                >
                    <div onClick={(e) => e.stopPropagation()} className='mx-auto'>
                        <Modal modal={modal} />
                    </div>
                </div>
            ))}

            {children}
        </ModalContext>
    );
}
