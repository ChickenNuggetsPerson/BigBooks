'use client';

import React, { useState, useEffect } from 'react';
import { ModalContext } from './ModalContext';
import Modal, { ModalProps } from './Modal';
import { Backdrop } from "@mui/material";

export default function ModalContainer({ children }: { children: React.ReactNode }) {
    const [modals, setModals] = useState<ModalProps[]>([]);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

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
            {hasMounted && (
                <Backdrop
                    sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })}
                    open={modals.length !== 0}
                    onClick={popModal}
                >
                    {modals.map((modal, i) => (
                        <div key={`Modals-${i}`} onClick={(e) => e.stopPropagation()}>
                            <Modal modal={modal} />
                        </div>
                    ))}
                </Backdrop>
            )}

            {children}
        </ModalContext>
    );
}
