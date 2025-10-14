import { Logo } from "../pictures/Logo"

export const Footer = () => {
    return (
        <footer className="w-full h-20 
            flex justify-center items-center gap-12
            text-stone-700 
            dark:text-stone-200 
        ">  
            <Logo fixed={true}/> 
            
            <p className="text-sm">
                &copy; 2025 Portafolio Personal Leonardo Dillon.
            </p>
        </footer>
    )
}