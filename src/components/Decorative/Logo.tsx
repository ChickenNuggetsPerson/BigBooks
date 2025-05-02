

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: '800'
})


interface LogoProps {
    width: number
}
export default function Logo({ width }: LogoProps) {

    // const height = Math.floor(width / 4.333)

    // <Image
    //     src="/Logo.png"
    //     width={width}
    //     height={0}
    //     alt="Picture of the author"
    // />

    return (
        <div style={{ fontSize: width / 5.8, backgroundColor: "var(--color-primary)", color: "white" }} className={'text-center rounded-md ' + openSans.className}>
            BIG Books
        </div>
    )
}