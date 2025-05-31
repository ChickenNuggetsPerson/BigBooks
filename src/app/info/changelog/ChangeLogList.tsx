'use client'

import Markdown from "react-markdown";
import { useState } from "react";
import { motion } from "framer-motion";

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
        <div>
            <h1 className="font-semibold text-2xl mb-4 flex flex-row justify-center" >Changelog: </h1>

            <div className="bg-accent h-px mb-8"></div>

            <div className="flex flex-row gap-4">

            <SelectInput id={""} label={""} val={String(current)} disabled={false} options={options} changeCB={(val) => { setCurrent(Number(val)) }} searchable={false} />

            <motion.div
                className="markdown-body card overflow-y-clip w-lg"
                style={{ marginBottom: 20 }}
            >
                <Markdown>{items[current]}</Markdown>
            </motion.div>

        </div>
        </div>
    )
}

