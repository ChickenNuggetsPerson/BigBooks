'use client'

import getEmployeeList from "@/actions/employee/getEmployeeList";
import { useCompany } from "@/app/CompanyContext";
import { DispEmployee } from "@/database/models/DisplayModels";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CheckboxInput from "../Forms/CheckboxInput";
import SelectInput from "../Forms/SelectInput";
import AnimateChildren from "../AnimateChildren";



const sortByArray = [
    {
        label: "First Name",
        id: "first"
    },
    {
        label: "Last Name",
        id: "last"
    },
    {
        label: "Email",
        id: "email"
    },
    {
        label: "Address",
        id: "address"
    }
]

const filterArray = [
    {
        label: "All",
        id: "all"
    },
    {
        label: "Salary",
        id: "salary"
    },
    {
        label: "Hourly",
        id: "hourly"
    }
]


interface EmployeeListProps {
    employeePage: boolean
    preSelected: string[]
    selectCB: (selected: string[]) => void
}
export default function EmployeeList({ employeePage, selectCB, preSelected }: EmployeeListProps) {

    const { context } = useCompany()

    const [list, setList] = useState([] as DispEmployee[])
    const [filteredList, setFilteredList] = useState([] as DispEmployee[])

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")
    const [sort, setSort] = useState("last")
    const [showDeleted, setShowDeleted] = useState(false)

    const [selected, setSelected] = useState([] as string[])
    const [showSave, setShowSave] = useState(false)

    useEffect(() => { // Fetch data
        async function load() {
            const l = await getEmployeeList(context?.companyUUID ?? "", showDeleted ? 3 : 2)
            setList(l)
            setFilteredList(l)
        }

        load()
    }, [context, showDeleted])

    useEffect(() => { // Run every time the list needs to be updated
        const salary = filter == "salary"
        const hourly = filter == "hourly"
        const all = filter == "all"

        function check(isSal: boolean) {
            if (all) { return true }
            if (hourly && !isSal) { return true }
            if (salary && isSal) { return true }
            return false
        }

        const f = list.filter((i) => {
            return (`${i.firstName} ${i.lastName}`.toLowerCase().toString().includes(search) || i.address.includes(search) || i.email.includes(search))
                && check(i.isSalary)
        })

        if (sort == "first") {
            f.sort((a, b) => {
                if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) { return 1 }
                if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) { return -1 }
                return 0
            })
        }
        if (sort == "last") {
            f.sort((a, b) => {
                if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) { return 1 }
                if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) { return -1 }
                return 0
            })
        }
        if (sort == "email") {
            f.sort((a, b) => {
                if (a.email.toLowerCase() > b.email.toLowerCase()) { return 1 }
                if (a.email.toLowerCase() < b.email.toLowerCase()) { return -1 }
                return 0
            })
        }
        if (sort == "address") {
            f.sort((a, b) => {
                if (a.address.toLowerCase() > b.address.toLowerCase()) { return 1 }
                if (a.address.toLowerCase() < b.address.toLowerCase()) { return -1 }
                return 0
            })
        }

        setFilteredList(f)
    }, [search, sort, filter, list])

    useEffect(() => { setSelected(preSelected) }, [preSelected])


    const inputHandler = (e: { target: { value: string; }; }) => { // Filter search
        setSearch(e.target.value)
    };


    const router = useRouter()
    function rowClicked(id: string) {
        if (employeePage) {
            router.push(`/organization/employee/${id}`)
        } else {
            toggleSelection(id)
        }
    }

    function toggleSelection(id: string) {
        const index = selected.indexOf(id)
        if (index == -1) { // Does not exist in array 
            setSelected(selected => [...selected, id])
        } else {
            setSelected(selected => selected.filter(c => { return c != id }));
        }
    }

    function selectAll(val: boolean) {
        if (val) {
            setSelected(filteredList.map((e) => { return e.uuid }))
        } else {
            const f = filteredList.map((e) => e.uuid)
            setSelected(selected => selected.filter(c => { return f.indexOf(c) == -1 }))
        }
    }

    useEffect(() => {
        setShowSave(JSON.stringify(preSelected.toSorted()) != JSON.stringify(selected.toSorted()))
    }, [preSelected, selected])

    function save() {
        if (!showSave) { return }
        selectCB(selected)
    }

    return (
        <div>

            <AnimateChildren x={0} y={-20}>
                {/* New Employee Button */}
                {employeePage &&
                    <Link type="button" href={`/organization/employee/new/edit`} className="card w-xs block mb-5 hover:shadow-primary">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 "> Create New Employee</h5>
                        <p className="font-normal text-gray-700 ">Click to Create</p>
                    </Link>
                }


                <div className="card flex flex-row justify-between mb-5" style={{ paddingTop: 7, paddingBottom: 3 }}>

                    {/* Search Bar */}
                    <div className="w-2/5 flex flex-col justify-center mr-4">
                        <div className="relative z-0 w-full mb-5 group">
                            <input onChange={inputHandler} type="text" name={"search"} id={"search"} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={""} defaultValue={""} />
                            <label htmlFor={"search"} className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search:</label>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between w-3/5">

                        {employeePage &&
                            <div className="flex flex-col justify-center pt-4">
                                <CheckboxInput id={"showDeactivated"} label={"Show Deactivated"} val={false} disabled={false} changeCB={(val) => { setShowDeleted(val) }} />
                            </div>
                        }

                        <SelectInput id={"filter"} label={"Filter:"} val={filter} disabled={false} options={filterArray} changeCB={(val) => { setFilter(val); }} searchable={false} />
                        <SelectInput id={"sort"} label={"Sort By:"} val={sort} disabled={false} options={sortByArray} changeCB={(val) => { setSort(val) }} searchable={false} />

                        {!employeePage &&
                            <div className="flex flex-col">
                                <div className="flex flex-col justify-center pt-4 ml-2" style={{ marginBottom: 0 }}>
                                    <CheckboxInput id={"showDeactivated"} label={"Select All"} val={false} disabled={false} changeCB={(val) => { selectAll(val) }} />
                                </div>

                                <div className="flex flex-col justify-center mb-3">
                                    <button onClick={save} className={"border rounded-md border-accent p-1 " + (showSave ? "text-white bg-accent" : "")}>Save Selection</button>
                                </div>
                            </div>
                        }
                    </div>

                </div>
            </AnimateChildren>

            <table className="table-fixed w-full">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Pay Type</th>
                        {employeePage && <>
                            <th>Email</th>
                        </>}
                        {!employeePage && <>
                            <th>Selected</th>
                        </>}
                    </tr>
                </thead>

                <tbody>
                    {filteredList.map((employee, i) => (
                        <EmployeeRow e={employee} key={i} i={i} cb={() => { rowClicked(employee.uuid); }} employeePage={employeePage} selected={selected.indexOf(employee.uuid) != -1} />
                    ))}
                </tbody>

            </table>

            <div style={{ height: "30dvh" }} ></div>

        </div>
    )
}



function EmployeeRow({ e, i, employeePage, selected, cb }: { e: DispEmployee, i: number, employeePage: boolean, selected: boolean, cb: () => void }) {
    return (
        <motion.tr onClick={() => { cb() }} className="cursor-pointer rounded-lg bg-card border border-gray-200 shadow-sm mb-5 hover:bg-gray-100 "
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 + (i * 0.25), type: 'spring' }}
            key={`${e.firstName} ${e.lastName}`}
        >
            <td className={"p-[10] w-1/4 mb-2 text-normal tracking-tight text-gray-900 "}> {`${e.firstName} ${e.lastName}`} </td>
            <td className="p-2 w-1/3 font-normal text-gray-700 text-center">{e.isSalary ? "Salary" : "Hourly"}</td>

            {employeePage && <>
                <td className="p-2 w-1/2 text-center font-normal text-gray-700 ">{e.email == "" ? "[ Not Provided ]" : e.email}</td>
            </>}

            {!employeePage && <>
                <td className="p-2 w-full font-normal text-gray-700 flex flex-row justify-center">
                    <div className={"size-6 rounded border border-primary " + (selected ? "bg-primary" : "")}></div>
                </td>
            </>}
        </motion.tr>
    )
}