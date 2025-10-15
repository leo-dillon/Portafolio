import { Proyect }  from "../proyects/Proyect"
import { H2 }       from "../text/H2"
import { Subtitle } from "../text/Subtitle"

import projects     from "../../data/projects.json"

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

export const Projects = () => { 
    const myProyects: projectType[] = projects
    return ( 
        <section 
        id="myProyects"
        className="w-full max-w-9/10 md:ml-auto min-h-screen py-9
            flex flex-col gap-6
            text-stone-700 border-b border-teal-800/50 
            dark:text-stone-200
        ">
            <div>
                <Subtitle  text="Mis Trabajos" />
                <H2 text="Proyectos Destacados" />
            </div>
            <div className="flex flex-row flex-wrap gap-6">
                {
                    myProyects.map( (project, index) => {
                        return (
                            <Proyect 
                                key={index}
                                img={project.images[0]} 
                                imgDark={project.images[3]} 
                                name={project.name} 
                                description={project.short_description} 
                                techs={project.tecnologias} 
                                slug={project.slug}
                            />
                        )
                    } )
                }
            </div>
        </section>
    )
}