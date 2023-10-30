
import { ReactNode } from "react"

interface HeroFlexProps {
    children?: ReactNode
    title?: string
    topTitle?: string
    subtitle?: string
    reverse?: boolean
    imagePath?: string
    href?: string
    cta?: string
}

export default function HeroFlex({ children, imagePath, reverse, title, subtitle, topTitle, href, cta }: HeroFlexProps) {
    return (
        <div className={`flex flex-col items-center gap-4 sm:gap-12 ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
            <div className="w-full sm:w-1/2 flex flex-col gap-2">
                <h4 className="text-zinc-600">{topTitle}</h4>
                <h2 className="font-bold text-3xl text-my2">{title}</h2>
                <h4 className="text-zinc-600 text-lg">{subtitle}</h4>
                {children}
                {href && (
                    // <div className="w-full">
                        <a href={href} className="py-2 rounded-md bg-my sm:w-56 text-white font-semibold text-sm sm:text-base text-center">{cta}</a>
                    // </div>
                )}
            </div>
            <div className="w-full sm:w-1/2 flex justify-start pt-4 sm:pt-0">
                <img src={`./images/${imagePath}.png`} alt={title} className="max-h-[484px]" />
            </div>
        </div>
    )
}
