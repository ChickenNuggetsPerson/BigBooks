'use client'

import { motion } from "framer-motion"
import OrganizationList from "./OrganizationList"


interface OrganizationSelectFormProps {
    dismiss: () => void
}
export default function OrganizationSelectForm({ dismiss }: OrganizationSelectFormProps) {

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            key={"Select"}
            style={{ position: "fixed", top: 0, left: 0, height: "100vh", zIndex: 1000, backdropFilter: "blur(5px)" }} className="w-full items-center p-8 pb-20 gap-16"
        >
            <div id="blur" onClick={dismiss} style={{ width: "100vw", height: "100vh" }} ></div>

            <div style={{ position: "fixed", top: 0, left: 0, height: "100vh", zIndex: 2000 }} >
                <div style={{ position: "fixed", top: 0, left: 0, height: "100vh", zIndex: 2000 }} className="max-w-2xl mx-auto block p-6 bg-background border border-gray-200 rounded-lg shadow-sm dark:bg-dark_background dark:border-zinc-700 " >

                    
                    <div className="flex justify-between">
                        <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Choose Organization</h5>

                        <h5 onClick={dismiss}>← Close </h5>
                    </div>

                    <OrganizationList />

                </div>
            </div>
        </motion.div>
    )
}