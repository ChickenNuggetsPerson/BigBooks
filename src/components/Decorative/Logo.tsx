

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: '800'
})


interface LogoProps {
    width: number
}
export default function Logo({ width }: LogoProps) {
    return (
        <div style={{ fontSize: width / 5.8, backgroundColor: "var(--color-primary)", color: "white" }} className={'text-center ' + openSans.className + (width > 260 ? " rounded-md" : "")}>
            BIG Books
        </div>
    )
}