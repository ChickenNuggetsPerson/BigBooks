'use client';

import React, { useState } from 'react';
import { ModalContext } from './ModalContext';
import Modal, { ModalProps } from './Modal';
import { AnimatePresence, motion } from 'framer-motion';




export default function ModalContainer({ children }: { children: React.ReactNode }) {

    const [modals, setModals] = useState([] as ModalProps[])

    function addModal(modal: ModalProps) {
        setModals([...modals, modal])
    }
    function popModal() {
        if (modals.length == 0) { return }
        if (modals[modals.length - 1].required) { return }

        const m = [...modals]
        m.splice(m.length - 1, 1)
        setModals(m)
    }

    return (
        <ModalContext addModal={addModal} popModal={popModal} >

            <AnimatePresence>
                {modals.length !== 0 &&
                    <motion.div

                        className='backdrop-blur-sm fixed w-screen h-screen top-0'
                        style={{ zIndex: 100000 }}

                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25 }}

                        onClick={popModal}
                    >
                        {modals.map((modal, i) => (
                            <div
                                key={"Modal-" + i}
                                className="fixed w-screen h-screen top-0 flex justify-center"
                                style={{ zIndex: 100000 + (i * 100) }}
                            >

                                <motion.div
                                    key={"Modals-" + i}
                                    initial={{ y: -20 }}
                                    animate={{ y: 0 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className={'flex items-center justify-center ' + (i == modals.length - 1 ? "" : "backdrop-blur-sm")}
                                >
                                    <Modal modal={modal} />
                                </motion.div>

                            </div>
                        ))}
                    </motion.div>

                }
            </AnimatePresence>

            {children}
        </ModalContext>
    );
}
