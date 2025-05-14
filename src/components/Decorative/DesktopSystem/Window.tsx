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
    del: () => void
}
export default function Window({ children, zIndex, dragStart, startX, startY, del }: WindowProps) {

    return (
        <Rnd
            default={{
                x: startX,
                y: startY,
                width: 300,
                height: 200,
            }}
            minHeight={100}
            minWidth={100}
            onDragStart={dragStart}
            style={{ zIndex, position: 'absolute' }}
        >
            <motion.div
                className="rounded-xl w-full h-full overflow-clip border border-accent bg-white"
                onClick={dragStart}
                initial={{ opacity: 0}}
                exit={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.75, type: 'spring' }}
            >
                <div className='handle bg-primary-up flex flex-row p-1 rounded-t-xl gap-2'>
                    <div onClick={del} className='bg-red-500 w-4 h-4 rounded-2xl'></div>
                    <div className='bg-yellow-500 w-4 h-4 rounded-2xl'></div>
                    <div className='bg-green-500 w-4 h-4 rounded-2xl'></div>
                </div>
                {children}
            </motion.div>
        </Rnd>
    )
}

