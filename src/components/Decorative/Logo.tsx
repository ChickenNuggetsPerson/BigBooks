

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: '800'
})


interface LogoProps {
    width?: number,
    rounded?: boolean,
    shadow?: boolean
}
export default function Logo({ width = 500, rounded = false, shadow = false }: LogoProps) {
    return (
        <div 
            style={{ 
                fontSize: width / 5.8, 
                backgroundColor: "var(--color-primary)", 
                color: "white",
                boxShadow: shadow ? "0px 10px 20px 0px var(--primary_col)" : ""
            }} 
            className={'text-center border border-primary-down select-none ' + openSans.className + (rounded ? " rounded-md " : "")}
        >
            BIG Books
        </div>
    )
}