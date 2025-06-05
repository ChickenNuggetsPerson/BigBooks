'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";



type CollapsibleDivProps = React.HTMLAttributes<HTMLDivElement> & {
    title?: React.ReactNode
}


const CollapsibleDiv = React.forwardRef<HTMLDivElement, CollapsibleDivProps>(
    ({ title, children, ...rest }, ref) => {

        const [expanded, setExpanded] = useState(false)

        return (
            <motion.div
                ref={ref}
                // {...rest}
                className={rest.className}
                style={{ ...rest.style }}
            >
                <div className="relative">
                    <div className="absolute right-0">
                        <motion.div
                            animate={{ rotate: expanded ? 0 : 90 }}
                            className="bg-gray-100 rounded-md p-1 hover:bg-gray-200"
                            onClick={() => setExpanded(!expanded)}
                        >
                            <ChevronDown />
                        </motion.div>
                    </div>
                </div>

                <div className="mb-1 text-2xl font-semibold text-gray-700 select-none">
                    {title}
                </div>

                <motion.div
                    animate={{ opacity: expanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="bg-accent h-px"></div>
                </motion.div>

                <motion.div
                    initial={{
                        height: 0
                    }}
                    animate={{
                        height: expanded ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="overflow-clip"
                >
                    {children}
                </motion.div>

            </motion.div>
        )
    }
)


CollapsibleDiv.displayName = "CollapsibleDiv"
export default CollapsibleDiv