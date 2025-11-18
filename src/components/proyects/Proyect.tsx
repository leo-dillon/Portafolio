import { Link } from "react-router-dom"
import { useDarkMode } from "../../context/darkModeContext"
import { ListSmallTechnology } from "../lists/ListSmallTechnology"

import code  from "/icons/code.svg"
import darkCode  from "/icons/dark-code.svg"

type images = {
    name: string,
    img: string
}
interface Props {
    img: images,
    name: string,
    description: string,
    techs: string[],
    slug: string
}

export const Proyect = ({img, name, description, techs, slug}: Props) => {
    const { isDark } = useDarkMode()

    return(
        <article className="relative w-full max-w-[1000px] h-fit px-2 pb-6 group duration-150
        flex flex-col gap-3
        sm:max-w-[300px]
        bg-stone-100
        dark:bg-black
        rounded-3xl border-1 border-blue-900/70 dark:border-blue-100/30
        hover:shadow-xl
        ">
            <picture className="w-full h-[190px] pt-2
                rounded-3xl border-1 border-teal-600/10
                flex justify-center items-center overflow-hidden duration-150
                group-hover:scale-95
            ">
                <img src={ img.img } alt={ img.name } 
                    className="w-full h-full object-cover "
                />
            </picture>
            <div className="flex flex-col gap-3">
                <h2 className="text-3xl text-center font-bold text-blue-900
                dark:text-blue-100 border-b-1
                ">
                    { name }
                </h2>
                <p className="w-full max-w-9/10 mx-auto text-pretty opacity-80 ">
                    { description }
                </p>
            </div>
            <ListSmallTechnology technologies={techs} />
            <Link to={"/dev/" + slug} className="absolute bottom-4 right-4 p-2 duration-150
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