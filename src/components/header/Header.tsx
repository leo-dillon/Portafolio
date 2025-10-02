import arrowBUp from "/icons/arrow-narrow-up.svg"
import darkArrowBUp from "/icons/dark-arrow-narrow-up.svg"
import { useEffect, useState } from 'react'

import { Nav } from "../navs/Nav"
import { Logo } from "../logo/Logo"
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
            className={`
                fixed flex overflow-hidden w-full z-50 bg-neutral-200 backdrop-blur-sm
                bottom-0 left-0
                md:rounded-xl
                transition-[top,left,bottom,transform] duration-100 ease-in-out
                ${fixed
                ? `
                    min-w-[600px] max-w-max h-[66px] px-6 py-3 
                    bg-neutral-300 border border-gray-400 shadow-lg shadow-neutral-800
                    flex-row justify-between items-center gap-6
                    sm:top-4 sm:left-1/2 sm:-translate-x-1/2 
                    dark:bg-neutral-800 dark:shadow-gray-700 dark:border-0  
                `
                : `
                    w-full p-2
                    md:w-14 
                    bg-neutral-400
                    dark:bg-neutral-900
                    border border-transparent
                    flex-row justify-center items-center gap-4 
                    md:flex-col
                    md:bottom-2 md:left-2
                `}
            `}
        >
            <Logo fixed={fixed} />
            <Nav fixed={fixed} />
            <BtnChangeColor />
            {
                ( fixed )
                ? ''
                : <HeaderAnchor link="#home" text="" fixed={fixed} img={arrowBUp} darkImg={darkArrowBUp}  />                
            }

        </header>
    )
}