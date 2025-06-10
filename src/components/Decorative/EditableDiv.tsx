'use client'
import React, { useState } from "react";
import AnimateChildren from "./AnimateChildren";
import Link from "next/link";
import { Pencil } from "lucide-react";



type EditableDivProps = React.HTMLAttributes<HTMLDivElement> & {
    url: string,
    enabled?: boolean
}


const EditableDiv = React.forwardRef<HTMLDivElement, EditableDivProps>(
    ({ url, enabled = true, children, ...rest }, ref) => {


        const [hover, setHover] = useState(false)
        function onHover() { 
            if (!enabled) { return }
            setHover(true) 
        }
        function onAway() { 
            if (!enabled) { return }
            setHover(false) 
        }


        return (
            <div
                ref={ref}
                {...rest}
                style={{ ...rest.style }}
                onMouseOver={onHover} onMouseLeave={onAway}
            >
                <div className="relative">
                    {hover && <AnimateChildren>

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