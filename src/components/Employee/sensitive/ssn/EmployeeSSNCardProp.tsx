'use client'

import getEmployeeSSN from "@/actions/employee/sensitiveData/getEmployeeSSN"
import { CardProp } from "@/components/Forms/CardProp"
import { useEffect, useState } from "react"




export default function EmployeeSSNCardProp({ employeeUUID }: { employeeUUID: string }) {

    const [ssn, setSSN] = useState(null as null | string)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        async function load() {
            setSSN(await getEmployeeSSN(employeeUUID))
            setLoading(false)
        }
        load()
    }, [employeeUUID])


    if (loading) {
        return (<CardProp label={"SSN:"} loading />)
    }

    if (!ssn) {
        return (<CardProp label={"SSN:"} val={"ERROR"} />)
    }

    return (<CardProp label={"SSN:"} val={ssn} />)
}