


export type Percent = number
export function percentToStr(percent: Percent) {

    function convert() {
        const p = Math.abs(percent * 100)

        if ((p * 100) % 100 == 0) {
            return p.toLocaleString() + ".00 %"
        }

        if ((p * 100) % 10 == 0) {
            return p.toLocaleString() + "0 %"
        }

        return p.toLocaleString() + " %"
    }

    if (percent < 0) {
        return `(${convert()})`
    } else {
        return convert()
    }
}