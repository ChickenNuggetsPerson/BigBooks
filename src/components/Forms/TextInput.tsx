'use client'

import { useMask } from "@react-input/mask";
import { ChangeEvent } from "react";



export enum InputMasks {
    SSN = "___-__-____",
    PHONE = '(___) ___-____',
    None = ""
}


export default function TextInput({
    id = "",
    label = "",
    val = "",
    placeholder = "",
    disabled = false,
    obfuscate = false,
    onChange = () => { },
    mask = InputMasks.None
}: {
    id?: string,
    label?: string,
    val?: string,
    placeholder?: string,
    disabled?: boolean,
    obfuscate?: boolean,
    onChange?: (val: string) => void,
    mask?: InputMasks
}) {

    const inputRef = useMask({
        mask,
        replacement: { _: /\d/ }
    })

    function c(event: ChangeEvent<HTMLInputElement>): void {
        onChange(event.target.value)
    }

    return (
        <div className={"relative z-0 w-full mb-5 group " + (disabled ? "opacity-50" : "")}>
            <input ref={mask !== InputMasks.None ? inputRef : undefined} type={obfuscate ? "password" : "text"} name={id} id={id} onChange={c} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={placeholder} defaultValue={val} readOnly={disabled} />
            <label htmlFor={id} className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
        </div>
    )
}