import { useDarkMode } from "../../context/darkModeContext";

interface Props {
    link: string,
    text: string,
    fixed: boolean,
    img: string,
    darkImg: string
}
export const HeaderAnchor = ({ link, text, fixed, img, darkImg }: Props) => {
    const { isDark } = useDarkMode();
    return (
        
        <a 
            href={ link }
            className={`
                text-stone-800 font-semibold rounded-md duration-100 cursor-pointer group text-lg   
                hover:bg-neutral-300
                dark:text-stone-100
                dark:hover:bg-neutral-500
                ${ ( fixed ) ? "p-3" : "p-2"}
            `}
            title={text}
        >
            { 
                ( fixed )
                    ? text
                    : <img 
                        className="w-6 group-hover:scale-110 duration-200" 
                        src={ ( isDark ) ? img : darkImg } 
                        alt="" 
                    />
            }
        </a>
    )
}