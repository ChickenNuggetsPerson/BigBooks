import getRegistrationCodes from "@/actions/registrationCodes/getRegistrationCodes"
import makeRegistrationCode from "@/actions/registrationCodes/makeRegistrationCode"
import TextInput from "../../Forms/TextInput"
import CodeDeleteButton from "./CodeDeleteButton"
import CodeCopyButton from "./CodeCopyButton"



export async function RegistrationCodeList() {

    let codes = await getRegistrationCodes()
    if (!codes) {
        codes = []
    }

    return (
        <div className="card w-170">
            <button onClick={makeRegistrationCode} className="primary-button">New Code</button>

            <div className="h-px bg-accent mt-2 mb-4"></div>

            <div className="h-55 overflow-y-scroll">
                {codes.map((code, index) => (
                    <div key={index} className="card flex flex-row justify-between gap-2 max-h-25 mb-2 select-none">

                        <p>{code.expires.toDateString()}</p>
                        <TextInput id={""} label={""} val={code.code} placeholder={""} disabled={true} />
                        <CodeCopyButton code={code.code} />
                        <CodeDeleteButton code={code.code} />

                    </div>
                ))}
            </div>


        </div>
    )
}