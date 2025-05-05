






export function MoneyToStr(money: number) {

    const amt = Math.floor(money * 100) / 100
    if ((amt * 100) % 100 == 0) {
        return "$ " + amt.toLocaleString() + ".00"
    } 
    
    if ((amt * 100) % 10 == 0) {
        return "$ " + amt.toLocaleString() + "0"
    } 

    return "$ " + amt.toLocaleString()

}

export function HourlyRateStr(rate: number) {
    return MoneyToStr(rate) + " / hr"
}



export function PaddedMoneyStr(money: number, width: number, padLeft: boolean) {
    const str = MoneyToStr(money)

    let pad = width - str.length
    if (pad <= 0) { pad = 0 }

    if (padLeft) {
        return " ".repeat(pad) + str
    } else {
        return str + " ".repeat(pad)
    }
}


