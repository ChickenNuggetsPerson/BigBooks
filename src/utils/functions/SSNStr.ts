






export function hideSSN(str: string) {

    const newStr = []
    const sub = str.split("-")

    for (let i = 0; i < sub.length; i++) {

        if (i  == sub.length - 1) {
            newStr.push(sub[i])
        } else {
            newStr.push(sub[i].replaceAll(/./g, "*"))
        }
    }

    return newStr.join("-")
}