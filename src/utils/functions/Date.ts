




export function addDays(date: Date, amt: number) {
    const day = date.getDate()
    date.setDate(day + amt)
    return date
}

export function nextOccurence(refDate: Date, daysPerOccurence: number, now?: Date) {
    if (!now) { now = new Date() }

    refDate.setHours(0)
    refDate.setMinutes(0)
    now.setHours(0)
    now.setMinutes(0)

    const deltaDays = daysPerOccurence - (Math.floor((now.getTime() - refDate.getTime()) / 86400000) % daysPerOccurence) + 1
    return addDays(now, deltaDays)
}