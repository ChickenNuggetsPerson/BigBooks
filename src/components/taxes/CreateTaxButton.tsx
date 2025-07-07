'use client'

import { Plus } from "lucide-react"
import { useModalManager } from "../Decorative/Modal/ModalContext"
import { useState } from "react"
import { AvaliableStates, Tax } from "@/database/generated/prisma"
import TextInput from "../Forms/TextInput"
import LargeTextInput from "../Forms/LargeTextInput"
import toast from "react-hot-toast"
import createTax from "@/actions/taxes/createTax"
import { serializeData } from "@/utils/serialization"
import { useRouter } from "next/navigation"
import { useCompany } from "@/app/CompanyContext"
import SelectInput from "../Forms/SelectInput"
import { StateOptions } from "@/utils/taxes/calcTaxRates"



export default function CreateTaxButton({ isSysTaxes }: { isSysTaxes: boolean }) {

    const { addModal } = useModalManager()
    function btnClicked() {
        addModal({
            title: `New ${isSysTaxes ? "System" : "Organization"} Tax:`,
            component: (push, pop) => (<CreateTaxModal pop={pop} isSysTaxes={isSysTaxes} />)
        })
    }

    return (
        <button onClick={btnClicked}>
            <Plus className="icon bg-primary/80 text-white" size={30} />
        </button>
    )
}



function CreateTaxModal({ pop, isSysTaxes }: { pop: () => void, isSysTaxes: boolean }) {

    const { context } = useCompany()
    const [state, setState] = useState({
        name: "",
        uuid: "",
        state: AvaliableStates.Other,
        sysAdminControlled: isSysTaxes,
        organizationID: isSysTaxes ? null : (context?.companyUUID ?? ""),
        description: null,
        archived: false
    } as Tax)

    const router = useRouter()
    function createPressed() {
        if (state.name.trim() === "") { 
            toast.error("Name field is blank")
            return
        }

        if (state.description?.trim() === "") {
            state.description = null
        }

        toast.promise(async () => {
            await createTax(serializeData(state))
            router.refresh()
            pop()
        }, {
            loading: `Creating ${state.name}`,
            success: "Tax Created",
            error: `Failed to create ${state.name}`
        })
    }

    return (
        <div>
            <div className="h-2"></div>

            <TextInput label="Name" onChange={(val) => setState({...state, name: val })} />
            <LargeTextInput label="Description" onChange={(val) => setState({...state, description: val })} />

            <SelectInput label={"State of Residence"} val={state.state} options={StateOptions} changeCB={(val) => setState({...state, state: val as AvaliableStates })} searchable />

            <div className="flex flex-row justify-between pt-5">
                <button type="submit" className={`accent-button w-4/9`} onClick={() => {pop()}}>Cancel</button>
                <button type="submit" className={`primary-button w-4/9`} onClick={createPressed}>Create</button>
            </div>

        </div>
    )
}