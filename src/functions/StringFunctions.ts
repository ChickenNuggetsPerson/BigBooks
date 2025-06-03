





export function limitString(str: string, len: number) {
    if (str.length > len) {
        return str.substring(0, len - 3) + "..."
    }
    return str
}