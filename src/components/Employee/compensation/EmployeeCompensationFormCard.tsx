'use client'

import deleteEmployeeCompensation from "@/actions/employeeCompensation/deleteEmployeeCompensation"
import upsertEmployeeCompensation from "@/actions/employeeCompensation/upsertEmployeeCompensation"
import CollapsibleDiv from "@/components/Decorative/CollapsibleDiv"
import CheckboxInput from "@/components/Forms/CheckboxInput"
import LargeTextInput from "@/components/Forms/LargeTextInput"
import NumberInput from "@/components/Forms/NumberInput"
import SelectInput from "@/components/Forms/SelectInput"
import TextInput from "@/components/Forms/TextInput"
import { HourlyRate, Prisma } from "@/database/generated/prisma"
import { Decimal } from "@/database/generated/prisma/runtime/index-browser"
import { serializeData } from "@/utils/serialization"
import { Plus, Save, Trash2, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"




export default function EmployeeCompensationFormCard({ comp }: {
    comp: Prisma.EmployeeCompensationGetPayload<{ include: { hourlyRates: true, payrollGroup: true } }>
}) {

    const router = useRouter()
    const [compensation, setCompensation] = useState(comp)

    const sal = compensation.salaryAmount as number | null
    
    const [edited, setEdited] = useState(false)
    useEffect(() => {
        setEdited(comp !== compensation)
    }, [comp, compensation])


    function saved() {
        toast.promise(
            async () => {
                await upsertEmployeeCompensation(serializeData(compensation))
                router.refresh()
            },
            {
                loading: "Saving Compensation",
                success: "Compensation Saved",
                error: "Error Saving Compensation"
            }
        )
    }
    function deleted() {
        toast.promise(
            async () => {
                await deleteEmployeeCompensation(compensation.uuid)
                router.refresh()
            },
            {
                loading: "Deleting Compensation",
                success: "Compensation Deleted",
                error: "Error Deleting Compensation"
            }
        )
    }


    function addRate() {
        setCompensation({
            ...compensation,
            hourlyRates: [{
                name: "New Rate",
                uuid: "",
                rate: new Decimal(0),
                canOvertime: false,
                compensationId: comp.uuid
            },
            ...compensation.hourlyRates]
        })
    }
    function deleteRate(index: number) {
        setCompensation({
            ...compensation,
            hourlyRates: compensation.hourlyRates.filter((v, i) => i !== index)
        })
    }
    function updateRate(rate: HourlyRate, i: number) {
        const newRates = [...compensation.hourlyRates]
        newRates[i] = rate
        setCompensation({
            ...compensation,
            hourlyRates: newRates
        })
    }

    return (
        <CollapsibleDiv className="card w-md" title={
            <div className="font-semibold flex flex-row" style={{ fontSize: 20 }}>
                {comp.payrollGroup.name}
            </div>
        }>

            <div className="h-5"></div>

            <div className="flex flex-row gap-4">
                <SelectInput label="Comp Type" options={[{ id: "0", label: "Hourly" }, { id: "1", label: "Salary" }]} val={compensation.isSalary ? "1" : "0"} changeCB={(val) => setCompensation({ ...compensation, isSalary: val == "1" })} />
                <div className="w-full">
                    <LargeTextInput label="Description" val={compensation.description ?? ""} onChange={(val) => setCompensation({ ...compensation, description: val.trim() == "" ? null : val })} />
                </div>
            </div>

            {compensation.isSalary &&
                <div className="w-full flex flex-row justify-between">
                    <div className="w-3/4">
                        <NumberInput label="Salary:" val={sal ?? 0} changeCB={(val) => setCompensation({ ...compensation, salaryAmount: val <= 0 ? null : new Decimal(val) })} />
                    </div>
                    <div className="flex flex-row gap-2 justify-center align-center h-full pt-3">
                        {edited && <Save size={30} onClick={saved} className="bg-gray-100 rounded-md p-1 hover:bg-gray-200" />}
                        <Trash2 size={30} onClick={deleted} className="bg-gray-100 rounded-md p-1 hover:bg-gray-200" />
                    </div>
                </div>
            }

            {!compensation.isSalary &&
                <div>

                    <div className="flex flex-row bg-gray-100 rounded-md p-1 hover:bg-gray-200 h-fit w-fit select-none mb-2" onClick={addRate}>
                        <Plus size={30} />
                        <div style={{ paddingTop: 3 }}>Add Rate</div>
                    </div>

                    {compensation.hourlyRates.map((rate, i) => (
                        <div key={comp.uuid + " - " + i} className="p-5 bg-gray-50 rounded-md mb-2">
                            <div className="flex flex-row gap-4 w-full">
                                <div className="w-1/2">
                                    <TextInput label="Name" val={rate.name} onChange={(val) => updateRate({ ...rate, name: val }, i)} />
                                </div>
                                <CheckboxInput label="Can Overtime" val={rate.canOvertime} changeCB={(val) => updateRate({ ...rate, canOvertime: val }, i)} />
                            </div>

                            <div className="flex flex-row justify-between gap-4 w-full">
                                <div className="w-1/2">
                                    <NumberInput label="Rate" val={rate.rate as unknown as number} changeCB={(val) => updateRate({ ...rate, rate: new Decimal(val) }, i)} />
                                </div>
                                <div className="flex flex-row bg-gray-100 rounded-md p-1 hover:bg-gray-200 h-fit select-none" onClick={() => deleteRate(i)}>
                                    <div style={{ paddingTop: 3 }}>Delete Rate</div>
                                    <X size={30} />
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="flex flex-row gap-2 justify-end align-center h-full pt-3">
                        {edited && <Save size={30} onClick={saved} className="bg-gray-100 rounded-md p-1 hover:bg-gray-200" />}
                        <Trash2 size={30} onClick={deleted} className="bg-gray-100 rounded-md p-1 hover:bg-gray-200" />
                    </div>

                </div>
            }

        </CollapsibleDiv>
    )
}