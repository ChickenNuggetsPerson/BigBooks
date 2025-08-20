'use client'

import { PayrollDraftWithEmployees } from "@/actions/payrollDraft/types";
import HorzScrollSelect from "./HorzScrollSelect";
import { useState } from "react";
import PaystubEditForm from "./PaystubEditForm";




export default function PayrollPaystubPage({ draft }: { draft: PayrollDraftWithEmployees }) {

    const [selected, setSelected] = useState(0)

    const names = draft.employees.map(e => `${e.firstName} ${e.lastName}`)
    const displayStub = draft.employees.length !== 0

    return (
        <div>
            <HorzScrollSelect selected={selected} changeCB={(val) => setSelected(val)} options={names} />
            <div className="h-4"></div>
            {displayStub &&
                <PaystubEditForm
                    key={draft.employees[selected].uuid}
                    empUUID={draft.employees[selected].uuid}
                    stubStart={draft.startedDate}
                    stubEnd={draft.periodEnd}
                    stubPaydate={draft.periodPaydate}
                    canCreateNewStub
                />
            }
        </div>
    )
}