import { useDarkMode } from "../../context/darkModeContext";

interface Props {
    img: string,
    darkImg: string
}

export const DownlLoadAnchor = ({ img, darkImg }: Props) => {
    const { isDark } = useDarkMode();
    return (
        <a 
            href="./public/CV/Leonardo_Dillon_CV.pdf"
            className={`
                text-stone-800 font-semibold rounded-md duration-100 cursor-pointer group text-lg   
                hover:underline hover:scale-105
                dark:text-stone-100 p-2
            `}
            download={"Leonardo_Dillon_CV.pdf"}
            title="Descargar CV"
            target="_blank"
        >
            { 
                <img 
                    className="w-6 group-hover:scale-110 duration-200" 
                    src={ ( isDark ) ? img : darkImg } 
                    alt="a" 
                />
            }
        </a>
    )
    
}