'use client'

import deletePayrollGroup from "@/actions/payrollGroup/deletePayrollGroup";
import upsertPayrollGroup from "@/actions/payrollGroup/upsertPayrollGroup";
import { useModalManager } from "@/components/Decorative/Modal/ModalContext";
import NumericText from "@/components/Decorative/NumericText/NumericText";
import DateInput from "@/components/Forms/DateInput";
import { Divider } from "@/components/Forms/Divider";
import LargeTextInput from "@/components/Forms/LargeTextInput";
import NumberInput from "@/components/Forms/NumberInput";
import TextInput from "@/components/Forms/TextInput";
import { PayrollGroup } from "@/database/generated/prisma";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CardProp } from "@/components/Employee/EmployeeCard";
import { nextOccurence } from "@/utils/functions/Date";
import Link from "next/link";





export default function PayrollGroupAminList({ groups }: { groups: PayrollGroup[] }) {

    const [selected, setSelected] = useState(undefined as PayrollGroup | undefined)

    function clickedNew() {
        setSelected({
            name: "New Group",
            description: "",
            payFrequency: 14,
            payRefDate: new Date(),
            periodRefDate: new Date(),
            uuid: "",
            organizationId: "" // Server action handles this
        })
    }

    function saved() {
        setSelected(undefined)
    }

    return (
        <div className="flex flex-row w-full gap-10 justify-center pr-30">

            <div className="card w-60 h-fit">
                <h5 className="mb-2 text-xl font-semibold text-gray-700 ">Payroll Groups:</h5>
                <Divider />

                {groups.map((group) => (
                    <div
                        key={group.uuid}
                        className={"block px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg select-none mb-2"}
                        onClick={() => { setSelected(structuredClone(group)) }}
                    >
                        {group.name}
                    </div>
                ))}

                <Divider />

                <div className="h-5"></div>

                <div className={"block px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg select-none "} onClick={clickedNew}>
                    Create New Group
                </div>
            </div>

            {selected &&
                <PayrollGroupForm group={selected} saved={saved} />
            }
            {!selected && <div className="w-md"></div>}
        </div>
    )
}







function PayrollGroupForm({ group, saved }: { group: PayrollGroup, saved: () => void }) {

    const [selected, setSelected] = useState({} as PayrollGroup)
    const { addModal } = useModalManager()

    useEffect(() => {
        setSelected(group)
    }, [group])


    function nameUpdated(val: string) {
        if (!selected) { return }
        const copy = structuredClone(selected)
        copy.name = val
        setSelected(copy)
    }
    function descUpdated(val: string) {
        if (!selected) { return }
        const copy = structuredClone(selected)
        copy.description = val
        setSelected(copy)
    }
    function frequencyUpdated(val: number) {
        if (!selected) { return }
        const copy = structuredClone(selected)
        copy.payFrequency = val
        setSelected(copy)
    }
    function refDateUpdated(val: Date) {
        if (!selected) { return }
        const copy = structuredClone(selected)
        copy.payRefDate = val
        setSelected(copy)
    }
    function periodRefDate(val: Date) {
        if (!selected) { return }
        const copy = structuredClone(selected)
        copy.periodRefDate = val
        setSelected(copy)
    }


    const router = useRouter()
    function saveButton() {

        toast.promise(
            async () => {
                await upsertPayrollGroup(selected)
                saved()
                router.refresh()
            },
            {
                loading: "Saving Group...",
                success: `Saved ${selected?.name}`,
                error: "Error Saving Group"
            }
        )
    }


    function clickedDelete() {
        addModal({
            title: `Delete ${selected.name}?`,
            required: false,
            component: (push, pop) => (
                <div className="max-w-md">

                    <h1 className="text-xl font-semibold">Are you really sure you want to delete this payroll group?</h1>
                    <br></br>
                    <p>By deleting this group, you will also delete all associated employee compensation entries and paystub item defaults.</p>
                    <br></br>
                    <p>This action CANNOT BE UNDONE.</p>

                    <Divider />

                    <div className="flex flex-row justify-between mt-5">
                        <button className="primary-button" onClick={pop}>No, Cancel</button>
                        <button className="danger-button" onClick={confirmDelete}>Yes, Delete</button>
                    </div>
                </div>
            )
        })
    }

    function confirmDelete() {
        addModal({
            title: `ARE YOU REALLY SURE?`,
            required: false,
            component: (push, pop) => (
                <div className="max-w-md">

                    <p>By pressing yes, you agree to the consequences of deleting this group.</p>

                    <Divider />

                    <div className="flex flex-row justify-between mt-5">
                        <button className="primary-button" onClick={pop}>No, Cancel</button>
                        <button className="danger-button" onClick={() => {
                            pop()
                            pop()
                            del()
                        }}>Yes, Delete</button>
                    </div>
                </div>
            )
        })
    }

    function del() {
        toast.promise(
            async () => {
                await deletePayrollGroup(selected.uuid)
                saved()
                router.refresh()
            },
            {
                loading: "Deleting Group...",
                success: `Deleted ${selected?.name}`,
                error: "Error Deleting Group"
            }
        )
    }


    return (
        <motion.div
            className="card w-md h-fit"

            initial={{ opacity: 0, y: -20 }}
            exit={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >

            {selected.uuid !== "" &&
                <div className="relative">
                    <div className="absolute right-0">
                        <Trash2 size={35} onClick={clickedDelete} className="mt-1 icon" />
                    </div>
                </div>
            }

            <div className="font-semibold text-xl pb-1">
                <NumericText val={selected.name == "" ? "." : selected.name} spacing={-2} animDelta={0} expand={false} />
            </div>
            <Divider />

            <div className="h-2"></div>

            <div className="flex flex-row justify-between">
                <div className="w-3/5">
                    <TextInput id="name" label="Name" val={selected.name} onChange={nameUpdated} />
                </div>
                <Link href={`/organization/admin/groups/${selected.uuid}`} className="accent-button h-fit">
                    Payroll Items
                </Link>
            </div>

            <LargeTextInput label="Description" val={selected.description} onChange={descUpdated} />

            {/* TODO: These Dates aren't calculating correctly */}
            <div className="flex flex-row justify-between">
                <div>
                    <CardProp label={"Next Period End:"} val={nextOccurence(selected.periodRefDate, selected.payFrequency).toLocaleDateString()} />
                    <CardProp label={"Next Paydate:"} val={nextOccurence(selected.payRefDate, selected.payFrequency).toLocaleDateString()} />
                </div>

                <div className="w-35">
                    <NumberInput label="Days Between Pay" val={selected.payFrequency} changeCB={frequencyUpdated} />
                </div>
            </div>

            {/* TODO: Calc Times per year and fix that in the paystub system */}
            <div className="flex flex-row gap-4 py-5">
                <DateInput label="Pay Date" val={selected.payRefDate} onChange={refDateUpdated} />
                <DateInput label="Period End" val={selected.periodRefDate} onChange={periodRefDate} />
            </div>

            <button onClick={saveButton} className="primary-button w-full">Submit</button>

        </motion.div>
    )
}