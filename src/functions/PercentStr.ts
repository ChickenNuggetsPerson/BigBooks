


export type Percent = number
export function percentToStr(p: Percent) {
    const percent = Math.floor(p * 100) / 100
    
    if ((percent * 100) % 100 == 0) {
        return percent.toLocaleString() + ".00 %"
    } 
    
    if ((percent * 100) % 10 == 0) {
        return percent.toLocaleString() + "0 %"
    } 

    return percent.toLocaleString() + " %"
}

export function PercentOf(amt: number, p: Percent) {
    return Math.round(amt * p) / 100
}