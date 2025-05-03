



export default function DateInput({ id, label, val, disabled }: { id: string, label: string, val: Date, disabled: boolean }) {
    
    function formatDate(val: Date): string {
        return val.toISOString().split('T')[0]; // Ensures YYYY-MM-DD
    }

    return (
        <div className={"relative z-0 w-full mb-5 group " + (disabled ? "opacity-50" : "")}>
            <input key={val.toISOString()} type="date" name={id} id={id} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={formatDate(val)} readOnly={disabled} />
            <label htmlFor={id} className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
        </div>
    )
}