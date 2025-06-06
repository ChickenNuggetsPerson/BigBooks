'use client'

import { Divider } from "@/components/Forms/Divider";
import { Employee } from "@/database/generated/prisma";




export default function EmployeeCompensationForm({ employee }: { employee: Employee }) {


    return (
        <div className="card max-w-sm">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Compensations</h5>
            <Divider />
            <h6 className="mb-5 text-2xl tracking-tight text-gray-400">{`${employee.firstName} ${employee.lastName}`}</h6>

        </div>
    )
}