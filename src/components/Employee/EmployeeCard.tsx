'use client'

import { DispEmployee } from "@/database/models/DisplayModels"
import EditableDiv from "../Decorative/EditButton"




export default function EmployeeCard({ employee }: { employee: DispEmployee }) {


    return (
        <EditableDiv url={`/organization/employee/${employee.uuid}/edit`} className="w-sm card mb-5">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{`${employee?.firstName} ${employee?.lastName}`}</h5>


            {employee?.isDeleted && <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  opacity-50">{"[ Deactivated ]"}</h5>}

            <p className="mb-5 mt-2 font-normal text-gray-700 ">{employee?.address}</p>

            <p className="font-normal text-gray-700">Email: {employee?.email}</p>
            <p className="font-normal text-gray-700">Phone: {employee?.phoneNumber}</p>
            <p className="mb-5 font-normal text-gray-700">SSN: {employee?.ssn}</p>

            {employee.notes != "" &&
                <div>
                    <p className="font-bold list-disc text-gray-700">
                        Notes:
                    </p>
                    <p className="list-disc text-gray-700">
                        {employee.notes}
                    </p>
                </div>}

        </EditableDiv>
    )
}