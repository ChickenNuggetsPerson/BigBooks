'use client'


import { getEmptyDispPayPeriod } from "@/database/models/DisplayModels";
import { useEffect, useState } from "react";
import PayPeriodGuage from "./PayPeriodGuage";
import { useCompany } from "@/app/CompanyContext";
import getCurrentPayperiod from "@/actions/payperiod/getPayperiodByDate";
import PayPeriodList from "./PayPeriodList";
import getPayperiodByUUID from "@/actions/payperiod/getPayperiodByUUID";
import ProgressPanel from "./ProgressPannel";
import EmployeeList from "@/components/Employee/EmployeeList";
import setPayperiodIncludes from "@/actions/payperiod/setPayperiodIncludes";



const PageSteps = ["Select", "Pay Stubs", "Export"]

export default function PayPeriodOverview() {

    const { context } = useCompany()
    const [period, setPeriod] = useState(getEmptyDispPayPeriod())
    const [step, setStep] = useState(0)

    useEffect(() => { // Initial Load -> Also creates current payperiod if needed
        async function load() {
            const current = await getCurrentPayperiod(context?.companyUUID ?? "", new Date(), true)
            if (current) {
                setPeriod(current)
                setStep(0)
            }
        }

        load()
    }, [context?.companyUUID])

    async function changePeriod(uuid: string) { // Changes the period variable 
        const p = await getPayperiodByUUID(uuid)
        if (p) {
            setPeriod(p)
            setStep(0)
        } else {
            alert("Error Setting Payperiod...")
        }
    }


    async function updateIncluded(includes: string[]) {

        await setPayperiodIncludes(period.uuid, includes) // Send new inlcludes to the server

        const current = await getCurrentPayperiod(context?.companyUUID ?? "", new Date(), true)
        if (current) { setPeriod(current) } // Update state
    }


    return (
        <div className="flex overflow-hidden" style={{ maxHeight: "calc(100dvh - 5rem)" }}>


            {/* Main Content */}
            <div className="flex-1 pr-8 overflow-y-scroll overflow-x-hidden" style={{ scrollbarWidth: "none" }}>
                <ProgressPanel steps={PageSteps} currentStep={step} changeCB={(index) => { setStep(index) }} />

                <EmployeeList employeePage={false} selectCB={(selected) => { updateIncluded(selected); } } preSelected={period.includedEmployees} />

            </div>



            {/* Side Bar */}
            <div className="w-65 overflow-y-auto overflow-x-hidden">
                <div className="flex flex-col justify-start">
                    <div className="card w-60">
                        {period.orgID != "" &&
                            <PayPeriodList period={period} changeCB={(val) => { changePeriod(val) }} />
                        }

                        <div className="h-px bg-accent my-2"></div>

                        <div className="flex flex-row justify-start">
                            <h1 className="mr-2 font-semibold">Included: </h1>
                            <h1 className="font-mono">{period.includedEmployees.length}</h1>
                        </div>

                        <div className="flex flex-row justify-start">
                            <h1 className="mr-2 font-semibold">Completed: </h1>
                            <h1 className="font-mono">{period.payStubs.length}</h1>
                        </div>
                    </div>

                    <div className="mt-5">
                        <PayPeriodGuage p={period} />
                    </div>
                </div>
            </div>
        </div>
    )
}