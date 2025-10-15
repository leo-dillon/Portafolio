import { useEffect, useState } from "react"
import techs from "../../data/techs.json"
import { useRef } from "react"

interface Props {
    technologies: string[] | null
}

interface Tech {
    name: string,
    img: string,
    description: string
}

export const ListTechnology = ({ technologies }: Props ) => {
    const [ description, setDescription ] = useState<Tech | null>(null) 
    const [ arrayTechs, setArrayTechs ] = useState<Tech[]>() 
    const timeoutRef = useRef<number | null>(null)

    useEffect( () => {
        let newArray
        if( technologies == null ){
            newArray = arrayTechs    
        }else {
            newArray = techs.filter( tech => technologies.includes(tech.name) )
        }
        setArrayTechs( newArray )
    },[])

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
                ( arrayTechs )
                ? arrayTechs.map((tech) => {
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
                })
                : ""
            }
            {
                description ?
                    <div id="description" className={`
                        w-full max-w-[350px] mx-auto p-4
                        bg-zinc-200 shadow-sm shadow-stone-800 border-1 rounded-xl 
                        text-stone-800  
                        dark:bg-zinc-900 dark:text-stone-200 dark:shadow-stone-500
                        fixed bottom-18
                        sm:top-2 sm:left-2 sm:bottom-auto
                        ${description}
                    `}>
                        <div className="w-full flex gap-5 border-b-1 border-b-teal-300 pr-6 pb-2 mb-2">
                            <img src={description.img} alt={`Imagen de ${description.name}`} className="w-6 drop-shadow-[0px_0px_0px_rgba(0,0,0,1)]" />
                            <h3 className="w-full text-center font-bold text-xl">{description.name}</h3>
                        </div>
                        <p className="text-center">{description.description}</p>
                    </div>
                : ""
            }
        </ul>
    )
}