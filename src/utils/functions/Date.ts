




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