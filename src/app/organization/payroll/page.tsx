'use client'

import { useCompany } from "@/app/CompanyContext";
import ProgressBar from "@/components/Decorative/ProgressBar/ProgressBar";
import SelectableEmployeeList from "@/components/Employee/EmployeeList/SelectableEmployeeList";
import PayrollInportGroupForm from "@/components/payroll/PayrollInportGroupForm";
import ActivePaystubList from "@/components/payroll/paystub/ActivePaystubList";
import HorzScrollSelect from "@/components/payroll/paystub/HorzScrollSelect";
import PaystubEditForm from "@/components/payroll/paystub/PaystubEditForm";
import { useEffect, useState } from "react";
import SuperJSON from "superjson";




type PayrollState = {
    lastSaved: Date,
    orgUUID: string,
    page: number,
    selectedEmployees: { id: string, label: string }[],
    selectIndex: number,
    period: {
        start: Date,
        end: Date,
        pay: Date
    }
}

const DefaultState: PayrollState = {
    lastSaved: new Date(),
    orgUUID: "",
    page: 0,
    selectedEmployees: [],
    selectIndex: 0,
    period: {
        start: new Date(),
        end: new Date(),
        pay: new Date()
    }
}

export default function Payroll() {

    const { context } = useCompany()

    const [payrollState, setPayrollState] = useState<PayrollState | null>(null)
    useEffect(() => {
        if (typeof window === "undefined") return
        if (!context?.companyUUID) return

        const str = localStorage.getItem("PayrollState")
        if (str) { // TODO: Make sure the session is of the correct type
            const data = SuperJSON.parse<PayrollState>(str)
            if (data.orgUUID === context.companyUUID) {

                const deltaDays = Math.floor((new Date().getTime() - data.lastSaved.getTime()) / 86400000)
                if (deltaDays >= 1) { // Session older than 1 day 
                    const answer = confirm(`Your last payroll session was ${deltaDays} day${deltaDays == 1 ? "" : "s"} ago. Would you like to continue your session?`)
                    if (answer) {
                        setPayrollState(data)
                        return
                    }
                } else {
                    setPayrollState(data) // Session less than 1 day old
                    return
                }

            }
        }
        setPayrollState({ ...DefaultState, orgUUID: context.companyUUID })
    }, [context?.companyUUID])

    useEffect(() => {
        if (typeof window !== "undefined" && payrollState) {
            localStorage.setItem("PayrollState", SuperJSON.stringify({ ...payrollState, lastSaved: new Date() }))
        }
    }, [payrollState])

    if (!payrollState) return null

    function editStub(empUUID: string) {
        if (!payrollState) { return }
        const index = payrollState.selectedEmployees.findIndex(i => i.id == empUUID)
        if (index == -1) { return }
        
        setPayrollState({
            ...payrollState,
            page: 2,
            selectIndex: index
        })
    }

    return (
        <div>
            <ProgressBar steps={["Configure", "Select Employees", "Enter Payroll", "Review"]} currentStep={payrollState.page} changeCB={(index) => setPayrollState({ ...payrollState, page: index })} />

            <div className="h-4"></div>

            {payrollState.page == 0 &&
                <PayrollInportGroupForm initialPeriod={payrollState.period} changeCB={(data) => { setPayrollState({ ...payrollState, period: data, page: 1 }) }} />
            }

            {payrollState.page == 1 &&
                <SelectableEmployeeList selectCB={(selected) => { setPayrollState({ ...payrollState, selectedEmployees: selected }) }} preSelected={payrollState.selectedEmployees} />
            }

            {payrollState.page == 2 && payrollState.selectedEmployees.length > 0 &&
                <>
                    <HorzScrollSelect selected={payrollState.selectIndex} options={payrollState.selectedEmployees.map(e => e.label)} changeCB={(val) => setPayrollState({ ...payrollState, selectIndex: val })} />
                    <div className="h-5"></div>
                    <PaystubEditForm 
                        key={payrollState.selectedEmployees[payrollState.selectIndex].id}
                        empUUID={payrollState.selectedEmployees[payrollState.selectIndex].id} 
                        stubStart={payrollState.period.start}
                        stubEnd={payrollState.period.end}
                        stubPaydate={payrollState.period.pay}
                    />
                </>
            }

            {payrollState.page == 3 &&
                <>
                    <ActivePaystubList editStub={editStub}/>
                </>
            }
        </div>
    );
}