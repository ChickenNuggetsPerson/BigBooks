

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: '800'
})


interface LogoProps {
    width: number,
    rounded: boolean
}
export default function Logo({ width, rounded }: LogoProps) {
    return (
        <div style={{ fontSize: width / 5.8, backgroundColor: "var(--color-primary)", color: "white" }} className={'text-center ' + openSans.className + (rounded ? " rounded-md" : "")}>
            BIG Books
        </div>
    )
}