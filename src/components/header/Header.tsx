import arrowBUp from "/icons/arrow-narrow-up.svg"
import darkArrowBUp from "/icons/dark-arrow-narrow-up.svg"
import { useEffect, useState } from 'react'

import { Nav } from "../navs/Nav"
import { Logo } from "../pictures/Logo"
import { HeaderAnchor } from "../anchor/HeaderAnchor"
import { BtnChangeColor } from "../buttons/BtnChangeColor"

export const Header = () => {
    const [fixed, setFixed] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const windowResize = window.innerWidth;
            if( windowResize < 768 ) {
                setFixed(false)
                
            } else {
                if (window.scrollY > 100 && fixed) setFixed(false);
                if (window.scrollY <= 100 && !fixed) setFixed(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [fixed]);

    return (
        <header
            role="banner" aria-label="Main navigation"
            className={`
                fixed flex overflow-hidden w-full z-50 bg-neutral-200 backdrop-blur-sm
                bottom-0 left-0 shadow-sm
                md:rounded-xl
                transition-[top,left,bottom,transform] duration-100 ease-in-out
                ${fixed
                ? `
                    min-w-[600px] max-w-max h-[66px] px-6 py-3 
                    bg-neutral-200 border border-gray-400 shadow-stone-800
                    flex-row justify-between items-center gap-6
                    sm:top-4 sm:left-1/2 sm:-translate-x-1/2 
                    dark:bg-neutral-800 dark:shadow-stone-500 dark:border-0   
                `
                : `
                    w-full p-2
                    md:w-14 
                    shadow-neutral-800
                    dark:bg-neutral-900 dark:shadow-stone-500
                    border border-transparent
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