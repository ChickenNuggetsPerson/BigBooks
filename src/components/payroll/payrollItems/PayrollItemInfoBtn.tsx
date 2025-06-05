'use client'

import { useModalManager } from "@/components/Decorative/Modal/ModalContext"
import { Info } from "lucide-react"



export default function PayrollItemInfoBtn() {

    const { addModal } = useModalManager()

    function infoClicked() {
        addModal({
            title: "Paystub Default Items",
            required: false,
            component: () => <div className="w-sm">
                <li>{`Paystub default items can be auto included when filling out an employee's payroll. The "type" (Earning, Tax, or Other) determins where the item appear in the paystub.`}</li>
                <li>Paystub items can either be a flat ammount, or a percent of the gross pay.</li>
                <li>Note: To make a deduction, enter a negative percent or flat ammount.</li>
            </div>
        })
    }
    return (
        <Info onClick={infoClicked} />
    )
}