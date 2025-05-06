






export interface EmployeeHourlyRate {
    name: string
    rate: number
}
export function getEmptyEmployeeHourlyRate() : EmployeeHourlyRate { return { name: "", rate: 0 } }

export interface PaystubHourly {
    name: string
    hours: number
    rate: number
    amount: number
}
export function getEmptyPaystubHourly() : PaystubHourly { return { name: "", hours: 0, rate: 0, amount: 0} }

export interface PaystubExtra {
    name: string
    percent: number // If percent is zero, the extra is a flat amount 
    flatAmt: number
    amount: number
}
export function getEmptyPaystubExtra() : PaystubExtra { return { name: "", percent: 0, flatAmt: 0, amount: 0 } }