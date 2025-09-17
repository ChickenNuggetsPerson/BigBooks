'use client'


import React, { useEffect, useRef, useState } from "react";
import { useUrlState } from 'state-in-url';
import AnimateChildren from "./AnimateChildren";
import { motion } from "framer-motion";


type TabGroupProps = React.HTMLAttributes<HTMLDivElement> & {
    tabNames: string[],
    verticalTabs?: boolean
}

function longestStrLength(strs: string[]): number {
    let max = 0
    strs.forEach(str => {
        if (str.length > max) { max = str.length }
    })
    return max
}

const TabGroup = React.forwardRef<HTMLDivElement, TabGroupProps>(
    ({ tabNames, verticalTabs = false, children, ...rest }, ref) => {

        const { urlState, setUrl } = useUrlState({ selected: 0 });
        const tabsRef = useRef(null as null | HTMLDivElement)
        const insideRef = useRef(null as null | HTMLDivElement)
        const [height, setHeight] = useState<number | undefined>(undefined);
        const [oversized, setOversized] = useState(false)

        const maxLength = longestStrLength(tabNames)

        useEffect(() => {
            if (!insideRef.current || !tabsRef.current) return;

            const updateSize = () => {
                if (insideRef.current && tabsRef.current) {
                    const inside = insideRef.current.clientHeight + 50;
                    const tabBar = tabsRef.current.clientHeight;
                    setOversized(inside > tabBar);
                    setHeight(Math.max(inside, tabBar));
                }
            };

            updateSize(); // initial measurement

            const observer = new ResizeObserver(() => updateSize());
            observer.observe(insideRef.current);

            return () => {
                observer.disconnect();
            };
        }, [urlState.selected, children]);


        return (
            <div ref={ref} style={{ ...rest.style }} {...rest}>

                <div className={`h-fit flex ${verticalTabs ? "flex-row" : "flex-col"}`}>

                    {/* Tabs */}
                    <div className={`flex ${verticalTabs ? "flex-col w-fit h-fit" : "flex-row w-full"} select-none`} ref={tabsRef}>
                        {tabNames.map((name, i) => (
                            <div
                                key={name}
                                className={`w-full clearSmallCard text-lg text-end ${urlState.selected == i ? "bg-primary/80 text-white font-semibold" : "bg-white font-light"}`}
                                style={{
                                    padding: 12,
                                    borderTopRightRadius: verticalTabs ? 0 : undefined,
                                    borderBottomLeftRadius: verticalTabs ? undefined : 0,
                                    borderBottomRightRadius: 0,
                                    zIndex: urlState.selected == i ? 100 : 0,
                                    width: maxLength * 14
                                }}
                                onClick={() => setUrl({ selected: i })}
                            >
                                {name}
                            </div>
                        ))}
                    </div>

                    <motion.div
                        className="card w-fit"
                        style={{
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: verticalTabs ? undefined : 0,
                            zIndex: 200
                        }}

                        animate={{
                            height: height,
                            borderBottomLeftRadius: verticalTabs ? (oversized ? undefined : 0) : undefined,
                        }}

                        transition={{ duration: .3 }}
                    >
                        <div ref={insideRef}>
                            <AnimateChildren y={-5} fade>
                                {React.Children.toArray(children)[urlState.selected]}
                            </AnimateChildren>
                        </div>
                    </motion.div>
                </div>

            </div>
        )
    })

TabGroup.displayName = "TabGroup"
export default TabGroup
