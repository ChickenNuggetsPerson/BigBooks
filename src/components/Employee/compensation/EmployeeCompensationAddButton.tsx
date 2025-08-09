'use client'

import upsertEmployeeCompensation from "@/actions/employeeCompensation/upsertEmployeeCompensation";
import getEmployeeUnincludedGroups from "@/actions/payrollGroup/getEmployeeUnincludedGroups";
import Loading from "@/components/Decorative/Loading/Loading";
import { useModalManager } from "@/components/Decorative/Modal/ModalContext";
import SelectInput from "@/components/Forms/SelectInput";
import { Employee, PayrollGroup } from "@/database/generated/prisma";
import { serializeData } from "@/utils/serialization";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";




export default function EmployeeCompensationAddButton({ employee }: { employee: Employee }) {

    const { addModal } = useModalManager()

    function clicked() {
        addModal({
            title: "Include Group",
            required: false,
            component: () => (<AddModal employee={employee} />)
        })
    }

    return (
        <button onClick={clicked} className="primary-button w-full">Add to Payroll Group</button>
    )
}



function AddModal({ employee }: { employee: Employee }) {

    const [selected, setSelected] = useState(undefined as PayrollGroup | undefined)
    const [groups, setGroups] = useState([] as PayrollGroup[])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        async function load() {
            setGroups(await getEmployeeUnincludedGroups(employee.uuid))
            setLoading(false)
        }
        load()
    }, [employee.uuid])

    const options = groups.map((group) => {
        return {
            id: group.uuid,
            label: group.name
        }
    })

    const { popModal } = useModalManager()
    const router = useRouter()
    function add() {
        toast.promise(
            async () => {
                if (!selected) { return }

                await upsertEmployeeCompensation(serializeData({
                    hourlyRates: [],
                    uuid: "",
                    description: null,
                    employeeId: employee.uuid,
                    payrollGroupId: selected.uuid,
                    isSalary: false,
                    salaryAmount: null
                }))
                popModal()
                router.refresh()

            },
            {
                loading: "Adding to Group",
                success: `Added ${employee.firstName} to ${selected?.name}`
            }
        )
    }

    return (
        <div>
            {loading &&
                <Loading />
            }
            <div className="flex flex-row justify-between pt-5">
                <SelectInput options={options} val={selected?.uuid} changeCB={(val) => { setSelected(groups.find((g) => g.uuid == val)) }} label="Group" />
                <button onClick={add} className={`primary-button h-fit mt-auto ${selected ? "" : "opacity-50"}`} disabled={!selected} >Add</button>
            </div>
        </div>
    )
}