'use client'

import { motion } from "framer-motion";
import React from "react";




export default function AnimateChildren({ children, x = 0, y = 0}: { children: React.ReactNode, x: number, y: number }) {
    return (<>
        {React.Children.map(children, (child, index) => (
            <motion.div
                initial={{ opacity: 0, x: x, y: y}}
                exit={{ opacity: 0, x: x, y: y }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.75 + (index * 0.25), type: 'spring' }}
                key={index}
            >
                {child}
            </motion.div>
        ))}
    </>);
};