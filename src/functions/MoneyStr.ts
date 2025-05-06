






export function MoneyToStr(money: number) {

    const str = (m: number) => {
        const amt = Math.floor(m * 100) / 100
        if ((amt * 100) % 100 == 0) {
            return "$ " + amt.toLocaleString() + ".00"
        }

        if ((amt * 100) % 10 == 0) {
            return "$ " + amt.toLocaleString() + "0"
        }

        return "$ " + amt.toLocaleString()
    }

    if (money < 0) {
        return `(${str(Math.abs(money))})`
    } else {
        return str(money)
    }

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


