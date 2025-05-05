



export function percentToStr(p: number) {
    const percent = Math.floor(p * 10000) / 100
    
    if ((percent * 100) % 100 == 0) {
        return percent.toLocaleString() + ".00 %"
    } 
    
    if ((percent * 100) % 10 == 0) {
        return percent.toLocaleString() + "0 %"
    } 

    return percent.toLocaleString() + " %"
}