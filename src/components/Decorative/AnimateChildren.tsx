'use client'

import { motion } from "framer-motion";
import React from "react";



type AnimateChildrenProps = React.HTMLAttributes<HTMLDivElement> & {
    x?: number,
    y?: number
}

const AnimateChildren = React.forwardRef<HTMLDivElement, AnimateChildrenProps>(
    ({ x = 0, y = 0, children, ...rest }, ref) => {
        return (
            <div
                ref={ref}
                {...rest}
                style={{ ...rest.style }}
            >
                {React.Children.map(children, (child, index) => (
                    <motion.div
                        initial={{ opacity: 0, x: x, y: y }}
                        exit={{ opacity: 0, x: x, y: y }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.75 + (index * 0.25), type: 'spring' }}
                        key={index}
                    >
                        {child}
                    </motion.div>
                ))}
            </div>
        )
    })

AnimateChildren.displayName = "AnimateChildren"
export default AnimateChildren
