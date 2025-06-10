'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Rnd } from 'react-rnd';
import React from 'react';


interface WindowProps {
    children: ReactNode, 
    zIndex: number, 
    startX: number,
    startY: number
    dragStart: () => void,
}
export default function Window({ children, zIndex, dragStart, startX, startY }: WindowProps) {

    return (
        <Rnd
            default={{
                x: startX,
                y: startY,
                width: "",
                height: "",
            }}
            allowAnyClick
            onDragStart={dragStart}
            enableResizing={false}
            style={{ zIndex, position: 'absolute' }}
            bounds={"parent"}
            dragHandleClassName='handle'
        >
            <motion.div
                className="smallCard"
                onClick={dragStart}
                initial={{ opacity: 0}}
                exit={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.75, type: 'spring' }}
            >
                <div className='handle bg-primary-up/40 flex flex-row p-1 rounded-t-xl gap-2 h-6 cursor-pointer'>

                </div>
                {children}
            </motion.div>
        </Rnd>
    )
}

