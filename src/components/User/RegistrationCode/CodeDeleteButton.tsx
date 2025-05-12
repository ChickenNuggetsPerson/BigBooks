'use client'

import deleteRegistrationCode from "@/actions/registrationCodes/deleteRegistrationCode"
import toast from "react-hot-toast"





export default function CodeDeleteButton({ code }: { code: string }) {

    async function del() {
        await deleteRegistrationCode(code)
        toast.success("Code Deleted")
    }
    
    return (<p onClick={() => {del()}} className="secondary-button">X</p>)
}