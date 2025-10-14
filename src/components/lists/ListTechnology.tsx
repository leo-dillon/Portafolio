import { useState } from "react"
import techs from "../../data/techs.json"
import { useRef } from "react"


interface Tech {
    name: string,
    img: string,
    description: string
}
export const ListTechnology = () => {
    const [ description, setDescription ] = useState<Tech | null>(null) 

    const timeoutRef = useRef<number | null>(null)

    const openDescription = (tech: Tech) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        setDescription(tech)

        timeoutRef.current = window.setTimeout(() => {
            setDescription(null)
        }, 7000)
    }
    return (
        <ul className="relative flex flex-row flex-wrap justify-center sm:justify-start gap-8 mt-4 pb-6 mb-18">
            {
                techs.map( (tech) => {
                    return (
                        <li aria-label={tech.name} key={tech.name}
                            onClick={() => openDescription(tech)}
                            className="w-[90px] flex flex-col items-center duration-150 cursor-pointer
                            hover:scale-110
                            active:scale-90
                        ">
                            <img className="w-12 h-12" src={tech.img} title={tech.name} />
                            <p className="text-stone-800 dark:text-stone-200 opacity-80 font-semibold">{tech.name}</p>
                        </li>        
                    )
                } )
            }
            {
                description ?
                    <div id="description" className={`
                        w-full max-w-9/10 mx-auto bg-stone-200 text-stone-800 p-4 rounded-2xl shadow-sm shadow-stone-800 
                        dark:bg-stone-800 dark:text-stone-200 dark:shadow-stone-500
                        sm:absolute sm:top-full overflow-hidden
                        fixed top-12
                        ${ description ? " translate-x-0" : " translate-x-6" } transition-all duration-500
                    `}>
                        <div className="flex gap-5 mb-4">
                            <img src={description.img} alt={`Imagen de ${description.name}`} className="w-6 " />
                            <h3 className="font-bold">{description.name}</h3>
                        </div>
                        <p className="text-stone-800 opacity-80">{description.description}</p>
                    </div>
                : ""
            }
        </ul>
    )
}