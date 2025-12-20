'use client'
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";



type ClickableDivProps = React.HTMLAttributes<HTMLDivElement> & {
    onClick?: () => void,
    href?: string
}


const ClickableDiv = React.forwardRef<HTMLDivElement, ClickableDivProps>(
    ({ onClick, href, children, ...rest }, ref) => {
        const router = useRouter()

        return (
            <motion.div
                ref={ref}
                // {...rest}
                className={rest.className}
                style={{ ...rest.style }}

                whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                    if (href) {
                        router.push(href)
                    } else if (onClick) {
                        onClick()
                    }
                }}
            >
                {children}
            </motion.div>
        )
    }
)


ClickableDiv.displayName = "ClickableDiv"
export default ClickableDiv