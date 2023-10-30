'use client'

import { useEffect } from "react";

export default function HeaderFlex() {
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
        <header className="header relative sm:min-h-screen w-full flex justify-center">
            <div className="w-full max-w-7xl sm:grid sm:grid-cols-2 gap-2 items-center px-4 sm:px-0">
                <div className="flex flex-col gap-2 sm:gap-4 pt-12 sm:pt-0">
                    <img src="./images/logo.png" alt="" className="w-36 sm:w-36"/>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-my2 tracking-wide">Escolha as <span className="text-my">lonas com mais qualidade do mercado</span>, escolha <br /> Lona Preta </h1>
                    <p className="text-zinc-600">Cadastre-se abaixo para entrar na lista VIP e receber ofertas das nossas lonas em primeira mão no whatsapp.</p>
                    {/* <a href="" className="py-2 bg-my drop-shadow-2xl max-w-sm text-center rounded-md text-white font-medium ">Quero aproveitar</a> */}
                    <div className="_form_31 w-full sm:max-w-sm"></div>
                </div>
                <div className="sm:flex justify-end mt-2 sm:mt-0 hidden">
                    <img src="./images/bg.png" alt="" className="w-full max-w-[500px]" />
                </div>
                {/* <div className="flex sm:hidden justify-end mt-12 sm:mt-0">
                    <img src="./images/bg3.png" alt="" className="w-full max-w-[500px]" />
                </div> */}
            </div>
        </header>
    )
}