






export function MoneyToStr(money: number) {

    const amt = Math.floor(money * 100) / 100
    if ((amt * 100) % 100 == 0) {
        return "$ " + amt + ".00"
    } else {
        return "$ " + amt
    }

}

export function HourlyRateStr(rate: number) {
    return MoneyToStr(rate) + " / hr"
}