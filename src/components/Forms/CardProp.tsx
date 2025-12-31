'use client'

import toast from "react-hot-toast"
import ClickableDiv from "../Decorative/ClickableDiv"
import NumericText from "../Decorative/NumericText/NumericText"



export function CardProp({
    label,
    val = "",
    copyable = false,
    loading = false,
    numeric = false
}: {
    label: string,
    val?: string | number,
    copyable?: boolean,
    loading?: boolean,
    numeric?: boolean
}) {

    function clicked() {
        if (!copyable) { return }
        navigator.clipboard.writeText(String(val))
        toast.success(`Copied ${label.replace(":", "")}`)
    }

    return (
        <div className="flex flex-row gap-2 select-none" >
            <p>{label}</p>
            {!loading &&
                <ClickableDiv onClick={clicked}>
                    {!numeric &&
                        <p className="font-semibold font-mono" style={{ fontSize: 15, paddingTop: 2 }}>{val}</p>
                    }
                    {numeric &&
                        // <p className="" style={{ , paddingTop: 2 }}>{val}</p>
                        <div className="font-semibold font-mono" style={{ fontSize: 15 }} >
                            <NumericText val={String(val)} spacing={-7} />
                        </div>
                    }
                </ClickableDiv>
            }
            {loading &&
                <div className="bg-gray-200/50 animate-pulse rounded-lg w-20 h-$6 ml-2 mb-1"></div>
            }
        </div>
    )
}