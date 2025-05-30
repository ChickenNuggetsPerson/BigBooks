'use client'
import React, { useState } from "react";
import AnimateChildren from "./AnimateChildren";
import Link from "next/link";
import { Pencil } from "lucide-react";



type EditableDivProps = React.HTMLAttributes<HTMLDivElement> & {
    url: string
}


const EditableDiv = React.forwardRef<HTMLDivElement, EditableDivProps>(
    ({ url, children, ...rest }, ref) => {


        const [hover, setHover] = useState(false)
        function onHover() { setHover(true) }
        function onAway() { setHover(false) }


        return (
            <div
                ref={ref}
                {...rest}
                style={{ ...rest.style }}
                onMouseOver={onHover} onMouseLeave={onAway}
            >
                <div className="relative">
                    {hover && <AnimateChildren x={0} y={0}>

                        <div className="absolute right-0">
                            <Link href={url}>
                                <Pencil size={20} />
                            </Link>
                        </div>

                    </AnimateChildren>}
                </div>

                {children}
            </div>
        )
    }
)


EditableDiv.displayName = "EditableDiv"
export default EditableDiv