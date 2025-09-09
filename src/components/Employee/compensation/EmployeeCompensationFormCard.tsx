'use client'

import deleteEmployeeCompensation from "@/actions/employeeCompensation/deleteEmployeeCompensation"
import upsertEmployeeCompensation from "@/actions/employeeCompensation/upsertEmployeeCompensation"
import AnimateChildren from "@/components/Decorative/AnimateChildren"
import ClickableDiv from "@/components/Decorative/ClickableDiv"
import { useModalManager } from "@/components/Decorative/Modal/ModalContext"
import { promptUser } from "@/components/Decorative/Modals/promptUser"
import CheckboxInput from "@/components/Forms/CheckboxInput"
import { Divider } from "@/components/Forms/Divider"
import LargeTextInput from "@/components/Forms/LargeTextInput"
import NumberInput from "@/components/Forms/NumberInput"
import SelectInput from "@/components/Forms/SelectInput"
import TextInput from "@/components/Forms/TextInput"
import { HourlyRate, Prisma } from "@/database/generated/prisma"
import { Decimal } from "@/database/generated/prisma/runtime/index-browser"
import { deserializeData, SerializationResult, serializeData } from "@/utils/serialization"
import { AnimatePresence, motion } from "framer-motion"
import { Trash2, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"




export default function EmployeeCompensationFormCard({ data, closeCB }: {
    data: SerializationResult<Prisma.EmployeeCompensationGetPayload<{ include: { hourlyRates: true, payrollGroup: true } }>>,
    closeCB?: () => void
}) {

    const router = useRouter()
    const { addModal } = useModalManager()
    const [compensation, setCompensation] = useState(deserializeData(data))
    useEffect(() => {
        setCompensation(deserializeData(data))
    }, [data])

    const sal = compensation.salaryAmount as number | null



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
    async function deleted() {

        const result = await promptUser({
            addModal,
            title: "Are you Sure?",
            message: "Do you really want to delete this compensation? This cannot be undone!",
            falseButton: {
                title: "Cancel",
                type: "accent"
            },
            trueButton: {
                title: "Delete",
                type: "danger"
            }
        })
        if (!result) { return }

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
                uuid: `${Math.random()}`,
                rate: new Decimal(0),
                canOvertime: false,
                compensationId: compensation.uuid
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
        <AnimateChildren
            className="w-full flex flex-row gap-8"
            fade
            y={-20}
            dt={.2}
        >
            <div className="card w-md h-fit">

                <div className="w-full flex flex-row justify-between">
                    <div className="font-semibold" style={{ fontSize: 20 }}>
                        {compensation.payrollGroup.name}
                    </div>
                    <div className="flex gap-3">
                        <ClickableDiv onClick={deleted} className="icon bg-gray-50 w-fit" >
                            <Trash2 />
                        </ClickableDiv>
                        <ClickableDiv onClick={closeCB} className="icon bg-gray-50 w-fit" >
                            <X />
                        </ClickableDiv>
                    </div>
                </div>

                <Divider />

                <div className="h-5"></div>

                <div className="w-full">
                    <LargeTextInput label="Description" val={compensation.description ?? ""} onChange={(val) => setCompensation({ ...compensation, description: val.trim() == "" ? null : val })} />
                </div>

                <div className="flex flex-row gap-4">
                    <SelectInput label="Comp Type" options={[{ id: "0", label: "Hourly" }, { id: "1", label: "Salary" }]} val={compensation.isSalary ? "1" : "0"} changeCB={(val) => setCompensation({ ...compensation, isSalary: val == "1" })} />
                    <button className="primary-button w-full" onClick={saved}>
                        Save
                    </button>
                </div>


            </div>

            <div className="card h-fit w-md">
                {compensation.isSalary &&
                    <div className="w-full flex flex-row justify-between">
                        <div className="w-3/4">
                            <NumberInput label="Salary:" val={sal ?? 0} changeCB={(val) => setCompensation({ ...compensation, salaryAmount: val <= 0 ? null : new Decimal(val) })} />
                        </div>
                    </div>
                }

                {!compensation.isSalary &&
                    <div>

                        <AnimatePresence>
                            {compensation.hourlyRates.map((rate, i) => (
                                <motion.div
                                    key={rate.uuid}
                                    className="card mb-2"

                                    initial={{ y: -30, opacity: 0.2, height: 0 }}
                                    animate={{ y: 0, opacity: 1, height: "auto" }}
                                    exit={{ x: 20, opacity: 0, height: 0 }}
                                >
                                    <div className="flex flex-row gap-4 w-full">
                                        <div className="w-1/2">
                                            <TextInput key={rate.uuid + "-label"} label="Name" val={rate.name} onChange={(val) => updateRate({ ...rate, name: val }, i)} />
                                        </div>
                                        <CheckboxInput label="Can Overtime" val={rate.canOvertime} changeCB={(val) => updateRate({ ...rate, canOvertime: val }, i)} />
                                    </div>

                                    <div className="flex flex-row justify-between gap-4 w-full">
                                        <div className="w-1/2">
                                            <NumberInput key={rate.uuid + "-rate"} label="Rate" val={rate.rate as unknown as number} changeCB={(val) => updateRate({ ...rate, rate: new Decimal(val) }, i)} />
                                        </div>
                                        <button className="danger-button" onClick={() => deleteRate(i)} style={{ marginTop: 5, marginBottom: 5 }}>
                                            Delete Rate
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        <Divider />

                        <button className="primary-button w-full" onClick={addRate}>
                            Add Rate
                        </button>

                    </div>
                }
            </div>
        </AnimateChildren>
    )
}