'use client'

import ProgressBar from "@/components/Decorative/ProgressBar/ProgressBar";
import { useRouter } from "next/navigation";
import { PayrollPathName, PayrollSteps } from "./DraftPaths";






export default function DraftPageSelector({ path }: { path: PayrollPathName }) {

    const router = useRouter()
    const index = PayrollSteps.findIndex(v => v.path == path)

    function changeCB(index: number) {
        const newPath = PayrollSteps[index].path
        router.push(`/organization/payroll/${newPath}`)
    } 

    return (
        <>
            <ProgressBar steps={PayrollSteps.map(s => s.label)} currentStep={index} changeCB={changeCB} />
            <div className="h-4"></div>
        </>
    )
}