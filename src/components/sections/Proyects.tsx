import { Proyect } from "../proyects/Proyect"
import { H2 } from "../text/H2"
import { Subtitle } from "../text/Subtitle"

export const Projects = () => { 
    return ( 
        <section 
        id="myProyects"
        className="w-full max-w-9/10 md:ml-auto min-h-screen pt-18
            flex flex-col gap-6
            text-stone-700 border-b border-teal-800/50 
            dark:text-stone-200
        ">
            <div>
                <Subtitle  text="Mis Trabajos" />
                <H2 text="Proyectos Destacados" />
            </div>
            <div className="flex flex-row flex-wrap gap-6">
                <Proyect/>
            </div>
        </section>
    )
}