'use client'

import { ReactNode, useEffect } from "react";

interface HeaderFlexProps {
    children: ReactNode
    subtitle: string
    imagePath: string
}

export default function HeaderFlex({ children, subtitle, imagePath }: HeaderFlexProps) {
    let cont = 0
    useEffect(() => {
        if (cont === 0) {
            const script = document.createElement('script');
            script.src = 'https://lauromts.activehosted.com/f/embed.php?id=31';
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;

            document.body.appendChild(script);
            cont++;
        }
    }, []);

    return (
        <header className="header relative sm:min-h-screen w-full flex justify-center" id="cadastro">
            <div className="w-full max-w-7xl sm:grid sm:grid-cols-2 gap-2 items-center px-4 sm:px-0">
                <div className="flex flex-col gap-2 sm:gap-4 pt-12 sm:pt-0">
                    <img src="./images/logo.png" alt="" className="w-36 sm:w-36"/>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-my2 tracking-wide">{children}</h1>
                    <p className="text-zinc-600">{subtitle}</p>
                    <div className="_form_31 w-full sm:max-w-sm h-[210px]"></div>
                </div>
                <div className="sm:flex justify-end mt-2 sm:mt-0 hidden">
                    <img src={`./images/${imagePath}.png`} alt="" className="w-full max-w-[500px]" />
                </div>
            </div>
        </header>
    )
}