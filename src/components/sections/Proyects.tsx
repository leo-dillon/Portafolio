import { H2 } from "../text/H2"
import { Subtitle } from "../text/subtitle"

export const Projects = () => { 
    return ( 
        <section 
        id="myProyects"
        className="w-full min-h-screen pt-18 mt-18
            flex flex-col gap-12
            text-stone-700 border-b border-teal-800/50 
            dark:text-stone-200
        ">
            <div>
                <Subtitle  text="Mis Trabajos" />
                <H2 text="Proyectos Destacados" />
            </div>
        </section>
    )
}