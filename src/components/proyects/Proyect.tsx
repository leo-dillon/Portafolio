import { Link } from "react-router-dom"
import { useDarkMode } from "../../context/darkModeContext"
import code  from "/icons/code.svg"
import darkCode  from "/icons/dark-code.svg"

export const Proyect = () => {
    const { isDark } = useDarkMode()

    return(
        <article className="relative w-full max-w-[1000px] px-2 pb-6 group duration-150
        flex flex-col gap-3
        sm:max-w-[300px]
        bg-stone-100
        dark:bg-stone-900
        rounded-2xl shadow-md shadow-stone-900
        dark:shadow-stone-600
        hover:shadow-sm
        ">
            <picture className="w-full pt-2
                rounded-3xl
                flex justify-center items-center
            ">
                <img src={ isDark ? "/proyects/weatherNow/home.png" : "/proyects/weatherNow/home_light.png" } alt="Imagen de inicio Weather Now" 
                    className="rounded-xl duration-150
                        group-hover:scale-95
                        shadow-md shadow-stone-900
                        dark:shadow-stone-600
                    "
                />
            </picture>
            <div className="flex flex-col gap-3">
                <h2 className="text-3xl text-center font-semibold text-teal-800
                dark:text-teal-300
                ">
                    Weather Now
                </h2>
                <p className="w-full max-w-9/10 mx-auto text-pretty ">
                    Mostraremos el estado del tiempo en tu ubicación o en cualquier lugar que deses consultar.
                </p>
            </div>
            <ul className="w-full max-w-9/10 mx-auto
                flex flex-row gap-3 flex-wrap
            ">
                <li className="w-fit flex gap-2 p-1">
                    <img src="/tech/vite.svg" alt="Logo de vite" title="vite" className="w-6 hover:scale-110 drop-shadow-[0px_1px_0px_rgba(0,0,0,1)] dark:drop-shadow-0"/>
                </li>
                <li className="w-fit flex gap-2 p-1">
                    <img src="/tech/react.svg" alt="Logo de react" title="react" className="w-6 hover:scale-110 drop-shadow-[0px_1px_0px_rgba(0,0,0,1)] dark:drop-shadow-0"/>
                </li>
                <li className="w-fit flex gap-2 p-1">
                    <img src="/tech/tailwind.svg" alt="Logo de tailwind" title="tailwind" className="w-6 hover:scale-110 drop-shadow-[0px_1px_0px_rgba(0,0,0,1)] dark:drop-shadow-0"/>
                </li>
                <li className="w-fit flex gap-2 p-1">
                    <img src="/tech/typescript.svg" alt="Logo de typescript" title="typescript" className="w-6 hover:scale-110 drop-shadow-[0px_1px_0px_rgba(0,0,0,1)] dark:drop-shadow-0"/>
                </li>  
            </ul>
            <Link to={"/dev/name"} className="absolute bottom-4 right-4 p-2 duration-150
                border-1 border-stone-300 rounded-full
                hover:border-stone-400 hover:scale-110
            ">
                <img src={ isDark ? code : darkCode } 
                    alt="Saber más..." title="Saber más sobre el proyecto" aria-label="Saber más sobre el proyecto" 
                />
            </Link>
        </article>
    )
}