




export function addDays(date: Date, amt: number) {
    const d = new Date(date)
    const day = d.getDate()
    d.setDate(day + amt)
    return d
}

export function nextOccurence(refDate: Date, daysPerOccurence: number, now?: Date) {
    if (!now) { now = new Date() }
    if (!refDate || !daysPerOccurence) { return new Date() }

    refDate.setHours(0)
    refDate.setMinutes(0)
    now.setHours(0)
    now.setMinutes(0)

    const deltaDays = daysPerOccurence - (Math.floor((now.getTime() - refDate.getTime()) / 86400000) % daysPerOccurence) 
    return addDays(now, deltaDays)
}

export function timesPerYear(daysPerOccurence: number) {
    return Math.floor(365 / daysPerOccurence)
}


export function nextPayrollOccurence(periodRefDate: Date, payRefDate: Date, payFrequency: number, now?: Date) {
    if (!periodRefDate || !payRefDate || !payFrequency) { return {
        periodStart: new Date(),
        periodEnd: new Date(),
        payDate: new Date()
    }}

    const dDays = (payRefDate.getTime() - periodRefDate.getTime()) / (1000 * 60 * 60 * 24);
    const nextPeriodEnd = nextOccurence(periodRefDate, payFrequency, now)

    return {
        periodStart: addDays(nextPeriodEnd, 1 - payFrequency),
        periodEnd: nextPeriodEnd,
        payDate: addDays(nextPeriodEnd, dDays)
    }
}