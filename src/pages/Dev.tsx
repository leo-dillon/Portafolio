import { useNavigate, useParams } from "react-router-dom"
import { Proyect_images } from "../components/pictures/Proyect_images"
import { ListTechnology } from "../components/lists/ListTechnology"
import { HeaderAnchor } from "../components/anchor/HeaderAnchor"

import { useDarkMode }  from "../context/darkModeContext"
import projects         from "../data/projects.json"

import code             from "/icons/code.svg"
import flame            from "/icons/flame.svg"
import fileInfo         from "/icons/file-info.svg"
import darkCode         from "/icons/dark-code.svg" 
import darkFlame        from "/icons/dark-flame.svg"
import darkFileInfo     from "/icons/dark-file-info.svg"
import github           from "/redS/brand-github.svg"
import darkGithub       from "/redS/brand-dark-github.svg"
import { useEffect, useState } from "react"
import { ListTexts } from "../components/lists/ListTexts"

type projectImages = {
    name: string,
    img: string
}
type projectType = {
    id: number,
    name: string,
    slug: string,
    large_description: string,
    short_description: string,
    images: projectImages[],
    caracteristicas: string[],
    desafios: string[],
    tecnologias: string[],
    github: string,
    live: string
}

export const Dev = () => {
    const [ proy, setProy ] = useState<projectType>()
    const { name } = useParams()
    const { isDark } = useDarkMode()
    const navigate = useNavigate()
    
    useEffect( () => {
        console.log("Mi proyecto ")
        const myProject: projectType[] = projects.filter( proy => proy.slug == name )
        console.log("Mi proyecto  ", myProject.length)
        if( myProject.length == 0    ){
            navigate("/error")
        }else{
            setProy(myProject[0])
        }
    }, [navigate, name] )

    return(
        <section className={`w-full min-h-screen mt-12 sm:mt-24 
            flex flex-col justify-center items-center gap-6 
            text-stone-800 
            dark:text-stone-100 transition-colors duration-500`
        }>    
           {
            ( proy != undefined ) 
                ? 
                <>
                    <h1 className="
                        text-5xl text-teal-700 font-bold text-center py-6 
                        border-b-1 border-teal-700/40
                        md:text-7xl
                    ">
                        { proy.name }
                    </h1>
                    <h2 className="w-full max-w-9/10 text-xl text-center text-stone-800/80
                        dark:text-stone-300/80
                    "> 
                        { proy.short_description } 
                    </h2>
                    <Proyect_images images={proy.images} />
                    <div className="w-full flex justify-start items-center gap-12 opacity-80">
                        { ( proy.github != '' ) ? <HeaderAnchor link={proy.github} text="Ir al proyecto en github" fixed={true} img={github} darkImg={darkGithub} target={true} /> : "" }
                        { ( proy.live != '') ? <HeaderAnchor link={proy.live} text="Ver Online" fixed={true} img={code} darkImg={darkCode} target={true} /> : ''}
                    </div>
                    <div className="w-full mt-12
                        flex flex-col items-center justify-center gap-12
                    ">
                        <div className="w-full max-w-9/10 mx-auto flex flex-col md:flex-row gap-8">
                            <div className="w-full flex flex-col gap-4">
                                <div className="flex gap-2 items-center">
                                    <img src={isDark ? fileInfo : darkFileInfo} alt="icono de descripción" />
                                    <h3 className="text-xl text-teal-800 dark:text-teal-200 font-semibold">Descripción</h3>
                                </div>
                                <ListTexts texts={proy.caracteristicas} />
                            </div>

                            <div className="w-full flex flex-col gap-4">
                                <div className="flex gap-2 items-center">
                                    <img src={isDark ? flame : darkFlame} alt="icono de desafíos" />
                                    <h3 className="text-xl text-teal-800 dark:text-teal-200 font-semibold">Desafíos</h3>
                                </div>
                                <ListTexts texts={proy.desafios} />
                            </div>
                        </div>

                        <div className="w-full max-w-9/10 flex">
                            <div className="w-full flex flex-col gap-4">
                                <div className="flex gap-2">
                                    <img src={ isDark ? code : darkCode } alt="icono de descripción" />
                                    <h3 className="text-xl text-teal-800 dark:text-teal-200 font-semibold"> Tecnologías </h3>
                                </div>
                                <ListTechnology technologies={["Vite", "HTML", "CSS", "Tailwind", "TypeScript", "JavaScript", "React" ]} />
                            </div>
                        </div>
                    </div>
                </>
                : ""
           }
       </section>
    )
}