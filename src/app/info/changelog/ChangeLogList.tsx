'use client'

import Markdown from "react-markdown";
import { useState } from "react";

import "github-markdown-css"
import SelectInput from "@/components/Forms/SelectInput";


export default function ChangeLogList({ items }: { items: string[] }) {

    const [current, setCurrent] = useState(0)
    const options = items.map((item, i) => {
        return {
            label: item.split("[")[1].split("]")[0],
            id: String(i)
        }
    })

    return (
        <div className="h-screen flex flex-row gap-8">

            <div className="mt-10 h-fit card">
                <h1 className="font-semibold text-2xl" >Changelog: </h1>
                <div className="bg-accent h-px mb-4"></div>
                <SelectInput id={""} label={""} val={String(current)} disabled={false} options={options} changeCB={(val) => { setCurrent(Number(val)) }} searchable={true} />
            </div>


            <div className="overflow-y-scroll p-8 pb-30" style={{ scrollbarWidth: "none" }}>
                <div
                    className="markdown-body card w-xl"
                    style={{ marginBottom: 20, background: "white", color: "black", scrollbarWidth: "none" }}
                >
                    <Markdown>{items[current]}</Markdown>
                </div>
            </div>

        </div>
    )
}

