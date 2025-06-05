




export function addDays(date: Date, amt: number) {
    const day = date.getDate()
    date.setDate(day + amt)
    return date
}

export function nextOccurence(refDate: Date, daysPerOccurence: number, now?: Date) {
    if (!now) { now = new Date() }

    const deltaDays = daysPerOccurence - (Math.floor((now.getTime() - refDate.getTime()) / 86400000) % daysPerOccurence) + 1
    
    console.log(refDate.toLocaleDateString(), now.toLocaleDateString(), deltaDays)

    return addDays(now, deltaDays)
}