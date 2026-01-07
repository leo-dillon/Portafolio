import arrowBUp from "/icons/arrow-narrow-up.svg"
import darkArrowBUp from "/icons/dark-arrow-narrow-up.svg"
import { useEffect, useState } from 'react'

import { Nav } from "../navs/Nav"
import { Logo } from "../pictures/Logo"
import { HeaderAnchor } from "../anchor/HeaderAnchor"
import { BtnChangeColor } from "../buttons/BtnChangeColor"

export const Header = () => {
    const [fixed, setFixed] = useState(true);

    const handleScroll = () => {
        const windowResize = window.innerWidth;
        if( windowResize < 768 ) {
            setFixed(false)
            
        } else {
            if (window.scrollY > 100 && fixed) setFixed(false);
            if (window.scrollY <= 100 && !fixed) setFixed(true);
        }
    };

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [fixed]);

    useEffect(() => {
        handleScroll()
    }, [])

    return (
        <header
            role="banner" aria-label="Main navigation"
            className={`
                fixed flex overflow-hidden w-full z-50 backdrop-blur-sm
                bottom-0 left-0 shadow-sm aparecer-T 
                md:rounded-xl
                transition-[top,left,bottom,transform,scale] duration-200 ease-in-out
                hover:scale-101
                ${fixed
                ? `
                    min-w-[600px] max-w-max h-[66px] px-6 py-3 
                    dark:bg-zinc-950 border border-teal-400
                    flex-row justify-between items-center gap-6
                    sm:top-4 sm:left-1/2 sm:-translate-x-1/2 dark:border-0 shadow-teal-900 dark:shadow-teal-500
                `
                : `
                    w-full p-2
                    md:w-14 dark:bg-zinc-950
                    shadow-teal-900 dark:shadow-teal-500
                    flex-row justify-center items-center gap-4 
                    md:flex-col
                    md:left-2 md:bottom-4
                `}
            `}
        >
            <Logo fixed={fixed} />
            <Nav fixed={fixed} />
            <BtnChangeColor />
            {
                ( fixed )
                ? ''
                : <HeaderAnchor link="#home" text="Volver al inicio" fixed={false} img={arrowBUp} darkImg={darkArrowBUp}  />                
            }

        </header>
    )
}