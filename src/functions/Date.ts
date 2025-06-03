




export function addDays(date: Date, amt: number) {
    const day = date.getDate()
    date.setDate(day + amt)
    return date
}