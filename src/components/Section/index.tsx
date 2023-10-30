import { ReactNode } from 'react'

interface SectionProps {
    children: ReactNode
    className?: string
}

export default function Section({ children, className }: SectionProps) {
    return (
        <section className={`w-full flex justify-center items-center ${className}`}>
            <div className="w-full max-w-7xl px-4 sm:px-0">
                {children}
            </div>
        </section>
    )
}