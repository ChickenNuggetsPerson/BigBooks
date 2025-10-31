import { motion } from "framer-motion"
import React, { RefObject } from "react"




type ScrollCardProps = React.HTMLAttributes<HTMLDivElement> & {
    containerRef: RefObject<Element | null> 
}

const ScrollCard = React.forwardRef<HTMLDivElement, ScrollCardProps>(
    ({ containerRef, children, ...rest }, ref) => {

        return (
            <motion.div
                ref={ref}
                // {...rest}
                className={rest.className}
                style={{ ...rest.style }}

                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}

                viewport={{ root: containerRef }}
                transition={{ duration: 1.2, bounce: 0.5, stiffness: 50, type: "spring" }}
            >
                {children}
            </motion.div>
        )
    }
)
ScrollCard.displayName = "ScrollCard"
export default ScrollCard