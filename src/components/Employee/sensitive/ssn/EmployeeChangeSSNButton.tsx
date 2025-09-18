'use client'

import getEmployeeProps from "@/actions/employee/getEmployeeProps"
import getEmployeeSSNFull from "@/actions/employee/sensitiveData/getEmployeeSSNFull"
import setEmployeeSSN from "@/actions/employee/sensitiveData/setEmployeeSSN"
import { ModalProps } from "@/components/Decorative/Modal/Modal"
import { useModalManager } from "@/components/Decorative/Modal/ModalContext"
import { promptUser } from "@/components/Decorative/Modals/promptUser"
import { Divider } from "@/components/Forms/Divider"
import TextInput, { InputMasks } from "@/components/Forms/TextInput"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"





export default function EmployeeChangeSSNButton({ employeeUUID }: { employeeUUID: string }) {

    const { addModal } = useModalManager()

    function clicked() {
        addModal({
            background: false,
            component: (push, pop) => (<ChangeSSNModal employeeUUID={employeeUUID} pop={pop} push={push} />)
        })
    }

    return (<button type="button" className="accent-button w-full" onClick={clicked}>Change SSN</button>)
}


function ChangeSSNModal({ employeeUUID, pop, push}: { employeeUUID: string, pop: () => void, push: (modal: ModalProps) => void }) {

    const [ssn, setSSN] = useState("")
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        async function load() {
            setSSN(await getEmployeeSSNFull(employeeUUID))

            const emp = await getEmployeeProps(employeeUUID)
            setName(`${emp?.firstName} ${emp?.lastName}`)
            setLoading(false)
        }
        load()
    }, [employeeUUID])

    async function save() {
        const result = await promptUser({
            addModal: push,
            title: "Are you Sure?",
            message: "Are you sure you want to save a new SSN for this employee?",
            falseButton: {
                title: "Cancel",
                type: "accent"
            },
            trueButton: {
                title: "Save",
                type: "primary"
            }
        })
        if (!result) { return }

        toast.promise(async () => {
            await setEmployeeSSN(employeeUUID, ssn)
            pop()
        }, {
            loading: "Saving SSN",
            error: "Error Saving SSN",
            success: "SSN Saved"
        })
    }

    return (
        <div className="smallCard">
            <div className="card w-sm">
                <h1 className="font-semibold text-xl">Change SSN:</h1>
                <Divider />

                {loading && <div>
                    <h1 className="text-center animate-pulse text-2xl font-semibold" >Loading...</h1>
                </div>}

                {!loading && <div>
                    <h2 className="mb-3">{name}</h2>
                    <TextInput label="SSID:" val={ssn} onChange={(val) => setSSN(val)} mask={InputMasks.SSN} />
                    <button className="primary-button w-full" onClick={save} >Save</button>
                </div>}

            </div>
        </div>
    )
}