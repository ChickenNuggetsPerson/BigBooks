'use client'

import ProgressBar from "@/components/Decorative/ProgressBar/ProgressPannel";
import { useState } from "react";





export default function Payroll() {

    const [viewState, setViewState] = useState(0)


    return (
        <div>
            <ProgressBar steps={["Configure", "Select Employees", "Enter Payroll", "Review"]} currentStep={viewState} changeCB={(index) => setViewState(index)} />


        </div>
    );
}