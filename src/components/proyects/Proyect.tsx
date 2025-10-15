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
    imgDark: images,
    name: string,
    description: string,
    techs: string[],
    slug: string
}

export const Proyect = ({img, imgDark, name, description, techs, slug}: Props) => {
    const { isDark } = useDarkMode()

    return(
        <article className="relative w-full max-w-[1000px] h-fit px-2 pb-6 group duration-150
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
                <img src={ isDark ? img.img : imgDark.img } alt={ isDark ? img.name : imgDark.name } 
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
                    { name }
                </h2>
                <p className="w-full max-w-9/10 mx-auto text-pretty ">
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