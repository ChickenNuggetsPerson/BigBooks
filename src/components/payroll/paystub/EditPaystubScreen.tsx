'use client'


import { DispEmployee, DispPayPeriod } from "@/database/models/DisplayModels"
import PaystubForm from "./PaystubForm"
import { useEffect, useState } from "react"
import AnimateChildren from "@/components/Decorative/AnimateChildren"




interface EditPaystubScreen {
    period: DispPayPeriod
    allEmployees: DispEmployee[]
    refresh: () => void
}
export default function EditPaystubScreen({ period, allEmployees, refresh }: EditPaystubScreen) {

    const [list, setList] = useState([] as { label: string, id: string }[])
    const [selected, setSelected] = useState(null as unknown as { label: string, id: string })

    useEffect(() => {
        const l = allEmployees
            .toSorted((a, b) => {
                return a.lastName.localeCompare(b.lastName)
            })
            .map((e) => { return { label: e.firstName + " " + e.lastName, id: e.uuid } })
            .filter((e) => { return period.includedEmployees.includes(e.id) })
        setList(l)

        if (!period.includedEmployees.includes(selected?.id ?? "")) {
            setSelected(null as unknown as { label: string, id: string })
        }
    }, [allEmployees, period, selected])

    function selectItem(i: { label: string, id: string }) {
        setSelected(null as unknown as { label: string, id: string })

        setTimeout(() => {
            setSelected(i)
        }, 100);
    }

    return (
        <div className="flex overflow-hidden" style={{ maxHeight: "calc(100dvh - 5rem)" }}>


            {/* Left List */}
            <AnimateChildren x={-30} y={0}>
                <div className="w-65 pr-8 overflow-y-scroll overflow-x-hidden" style={{ scrollbarWidth: "none" }}>

                    <div className="card">

                        <h1>Included Employees</h1>

                        <div className="h-px bg-accent my-2"></div>

                        <ol>
                            <AnimateChildren x={0} y={-10}>
                                {list.map((item) => (<>
                                    <li key={item.id} onClick={() => { selectItem(item) }} className={"border-b border-secondary last:border-b-0 p-2 rounded-md hover:bg-gray-100 shadow flex flex-row"}>
                                        <div className={"size-5 rounded-sm border-primary border "
                                            + (period.payStubs.findIndex((s) => { return s.employeeUUID == item.id }) != -1 ? "bg-primary" : "")
                                        }></div>

                                        <p className="ml-2">{item.label}</p>
                                    </li>
                                </>))}
                            </AnimateChildren>
                        </ol>
                    </div>

                </div>
            </AnimateChildren>


            {/* Center of page */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden" style={{ scrollbarWidth: "none" }}>
                <AnimateChildren x={0} y={0}>
                    {selected &&
                        <PaystubForm periodUUID={period.uuid} empUUID={selected.id} cb={refresh} />
                    }
                </AnimateChildren>
            </div>
        </div>
    )
}