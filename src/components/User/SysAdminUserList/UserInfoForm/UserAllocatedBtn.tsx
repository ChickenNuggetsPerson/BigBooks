'use client'

import setUserAllocatedOrgs from "@/actions/user/setUserAllocatedOrgs";
import NumberInput from "@/components/Forms/NumberInput";
import { User } from "@/database/generated/prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";





export default function UserAllocatedBtn({ user } : { user: User }) {

    const [amt, setAmt] = useState(0)
    useEffect(() => {
        setAmt(user.allocatedOrganizations)
    }, [user.allocatedOrganizations])

    const router = useRouter()

    async function save() {
        await setUserAllocatedOrgs(user.uuid, amt)
        toast.success("Saved")
        router.refresh()
    }

    return (
        <div className="card max-h-25 max-w-xs flex flex-row gap-10">
            <NumberInput label="Allocated Organizations" val={amt} changeCB={(val) => setAmt(val)}/>
            <button onClick={save} className="primary-button">Save</button>
        </div>
    )
}