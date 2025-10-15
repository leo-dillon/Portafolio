import { H2 } from "../text/H2"
import { Subtitle } from "../text/Subtitle"
import { LDillon } from "../pictures/LDillon"
import { Description } from "../text/Description"
import { ListAbility } from "../lists/ListAbility"
import { ListTechnology } from "../lists/ListTechnology"


export const AboutMe = () => {
    
    return (
        <section 
        id="aboutMe"
        className="w-full max-w-9/10 md:ml-auto min-h-screen pt-18
            flex flex-col gap-6
            text-stone-700 border-b border-teal-800/50 
            dark:text-stone-200
        ">
            <div>
                <Subtitle text="Quien Soy"/>
                <H2 text="Acerca de mí" />
                <div className="
                    md:flex-row md:my-12 md:mx-4 
                    flex flex-col items-center
                ">
                    <LDillon />
                    <Description />
                </div>  
            </div>
            <div className="flex flex-col gap-6">
                <div>
                    <Subtitle text="Mis Habilidades" />
                    <ListAbility />
                </div>
                <div>
                    <Subtitle text="Mis Tecnologías / Herramientas"/>
                    <ListTechnology technologies={null} />
                </div>
            </div>
            

        </section>
    )
}