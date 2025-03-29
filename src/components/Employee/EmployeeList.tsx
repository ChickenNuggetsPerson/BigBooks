'use client'

import getEmployeeList from "@/actions/employee/getEmployeeList";
import { useCompany } from "@/app/CompanyContext";
import AnimateChildren from "@/components/AnimateChildren";
import { DispEmployee } from "@/database/models/DisplayModels";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function EmployeeList() {

    const { context } = useCompany()

    const [list, setList] = useState([] as DispEmployee[])
    const [filteredList, setFilteredList] = useState([] as DispEmployee[])
    const [showDeleted, setShowDeleted] = useState(false)

    useEffect(() => { // Fetch data
        async function load() {
            const l = await getEmployeeList(context?.companyUUID ?? "", showDeleted)
            setList(l)
            setFilteredList(l)
        }

        load()
    }, [context, showDeleted])


    const inputHandler = (e: { target: { value: string; }; }) => { // Filter search
        const search = e.target.value.toLowerCase();
        const f = list.filter((i) => {

            return `${i.firstName} ${i.lastName}`.toLowerCase().toString().includes(search) || i.address.includes(search) || i.email.includes(search)
        })

        setFilteredList(f)
    };



    return (
        <div>

            <div className="flex justify-start gap-6 flex-col lg:flex-row">


                <AnimateChildren x={-100} y={0}>

                    {/* New Employee Button */}
                    <Link type="button" href={`/organization/employee/new/edit`} className="w-xs card mb-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Create New Employee</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Click to Create</p>
                    </Link>


                    {/* Search Bar */}
                    <div className="w-full w-max-md lg:w-md mb-10 lg:mb-0 card">
                        <div className="relative z-0 w-full mb-5 group">
                            <input onChange={inputHandler} type="text" name={"search"} id={"search"} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={""} defaultValue={""} />
                            <label htmlFor={"search"} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search:</label>
                        </div>
                    </div>

                    <div className="w-full w-max-xs mb-10 lg:mb-0 card">
                        <button onClick={() => { setShowDeleted(!showDeleted) }} className={(showDeleted ? "bg-pink-500" : "") + " hover:outline-2 hover:outline-pink-500 text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:focus:ring-rose-800"}>Show Deactivated</button>
                    </div>
                </AnimateChildren>


            </div>

            <AnimatePresence>
                <table className="table-fixed min-w-2xl">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredList.map((employee, i) => (
                            <EmployeeRow
                                e={employee}
                                key={i}
                                i={i}
                            ></EmployeeRow>
                        ))}
                    </tbody>

                </table>
            </AnimatePresence>

            <div style={{ height: "30dvh" }} ></div>

        </div>
    )
}



function EmployeeRow({ e, i }: { e: DispEmployee, i: number }) {

    const url = `/organization/employee/${e.uuid}`
    const router = useRouter()

    return (
        <motion.tr onClick={() => { router.push(url) }} className="cursor-pointer rounded-lg bg-card border border-gray-200 shadow-sm dark:bg-dark_card dark:border-zinc-700 mb-5 hover:bg-gray-100 dark:hover:bg-zinc-700"
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 + (i * 0.25), type: 'spring' }}
            key={`${e.firstName} ${e.lastName}`}
        >
            <td className={"p-[10] w-1/4 mb-2 text-normal tracking-tight text-gray-900 dark:text-white " + (e.isDeleted ? "opacity-60" : "")}> {`${e.firstName} ${e.lastName}`} </td>
            <td className="p-2 w-1/2 text-center font-normal text-gray-700 dark:text-gray-400">{e.email == "" ? "[ Not Provided ]" : e.email}</td>
            <td className="p-2 w-1/3 font-normal text-gray-700 dark:text-gray-400">{e.address}</td>
        </motion.tr>
    )
}