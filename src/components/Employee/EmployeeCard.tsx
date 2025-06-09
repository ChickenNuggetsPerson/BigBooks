'use client'

import EditableDiv from "../Decorative/EditableDiv"
import { Divider } from "../Forms/Divider"
import ClickableDiv from "../Decorative/ClickableDiv"
import toast from "react-hot-toast"
import { Employee } from "@/database/generated/prisma"




export default function EmployeeCard({ employee }: { employee: Employee }) {


    return (
        <EditableDiv url={`/organization/employee/${employee.uuid}/edit`} className="w-sm card mb-5">

            <ClickableDiv
                className="w-5/6 mb-2 text-2xl font-bold tracking-tight text-gray-900 select-none"
                onClick={() => {
                    navigator.clipboard.writeText(`${employee.firstName} ${employee.lastName}`)
                    toast.success(`Coppied Name`)
                }}
            >{`${employee.firstName} ${employee.lastName}`}</ClickableDiv>

            <Divider />

            {employee.isDeleted && <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  opacity-50">{"[ Deactivated ]"}</h5>}

            <ClickableDiv
                className="mb-5 mt-2 font-normal text-gray-700 select-none"
                onClick={() => {
                    navigator.clipboard.writeText(employee.address)
                    toast.success(`Coppied Address`)
                }}
            >
                <p>
                    {employee.address}
                </p>
            </ClickableDiv>

            <CardProp label="Email:" val={employee.email} />
            <CardProp label="Phone:" val={employee.phoneNumber} />
            <CardProp label="SSN:" val={employee.ssn} />

            {employee.notes != "" &&
                <>
                    <Divider />
                    <div>
                        <p className="font-bold list-disc text-gray-700">
                            Notes:
                        </p>
                        <p className="list-disc text-gray-700">
                            {employee.notes}
                        </p>
                    </div>
                </>
            }

        </EditableDiv>
    )
}



export function CardProp({ label, val }: { label: string, val: string }) {

    function clicked() {
        navigator.clipboard.writeText(val)
        toast.success(`Coppied ${label.replace(":", "")}`)
    }

    return (
        <div className="flex flex-row gap-2 select-none" >
            <p>{label}</p>
            <ClickableDiv onClick={clicked}>
                <p className="font-semibold font-mono" style={{ fontSize: 15, paddingTop: 2 }}>{val}</p>
            </ClickableDiv>
        </div>
    )
}