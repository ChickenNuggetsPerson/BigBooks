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
                        initial={{ x: x, y: y }}
                        exit={{ x: x, y: y }}
                        animate={{ x: 0, y: 0 }}
                        transition={{ duration: 0.75, delay: index * 0.02, type: 'spring' }}
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
