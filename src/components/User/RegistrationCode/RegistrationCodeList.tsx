import getRegistrationCodes from "@/actions/registrationCodes/getRegistrationCodes"
import registerCode from "@/actions/registrationCodes/registerCode"
import TextInput from "../../Forms/TextInput"
import CodeDeleteButton from "./CodeDeleteButton"
import CodeCopyButton from "./CodeCopyButton"
import { Toaster } from "react-hot-toast"








export async function RegistrationCodeList() {
    
    let codes = await getRegistrationCodes()
    if (!codes) {
        codes = []
    }

    return (
        <div className="card w-170">
            <div><Toaster /></div>

            <button onClick={registerCode} className="primary-button">New Code</button>

            <div className="h-px bg-accent mt-2 mb-4"></div>

            {codes.map((code, index) => (
                <div key={index} className="card flex flex-row justify-between gap-4">

                    <p>{code.expires.toDateString()}</p>

                    <TextInput id={""} label={""} val={code.code} placeholder={""} disabled={true} />

                    <CodeCopyButton code={code.code} />

                    <CodeDeleteButton code={code.code} />
                
                </div>
            ))}


        </div>
    )
}