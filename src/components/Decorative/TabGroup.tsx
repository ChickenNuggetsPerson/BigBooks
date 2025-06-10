'use client'


import React, { useState } from "react";



type TabGroupProps = React.HTMLAttributes<HTMLDivElement> & {
    tabNames: string[],
    horizontal?: boolean
}

const TabGroup = React.forwardRef<HTMLDivElement, TabGroupProps>(
    ({ tabNames, horizontal = false, children, ...rest }, ref) => {

        const [selected, setSelected] = useState(0)

        return (
            <div ref={ref} style={{ ...rest.style }} {...rest}>

                <div className={`h-fit flex ${horizontal ? "flex-row" : "flex-col"}`}>
                    
                    {/* Tabs */}
                    <div className={`flex ${horizontal ? "flex-col w-fit" : "flex-row w-full"} select-none`}>
                        {tabNames.map((name, i) => (
                            <div
                                key={name}
                                className={`w-full clearSmallCard text-lg text-end ${selected == i ? "bg-primary/80 text-white font-semibold" : "bg-white font-light"}`}
                                style={{
                                    padding: 12,
                                    borderTopRightRadius: horizontal ? 0 : undefined,
                                    borderBottomLeftRadius: horizontal ? undefined : 0,
                                    borderBottomRightRadius: 0,
                                    zIndex: selected == i ? 100 : 0
                                }}
                                onClick={() => setSelected(i)}
                            >
                                {name}
                            </div>
                        ))}
                    </div>

                    <div
                        className="card w-fit"
                        style={{
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: horizontal ? undefined : 0,
                            borderBottomLeftRadius: horizontal ? 0 : undefined,
                            zIndex: 200
                        }}
                    >
                        {React.Children.toArray(children)[selected]}
                    </div>
                </div>

            </div>
        )
    })

TabGroup.displayName = "TabGroup"
export default TabGroup
