import { useParams } from "react-router-dom"
import { Proyect_images } from "../components/pictures/Proyect_images"
import { ListTechnology } from "../components/lists/ListTechnology"

import { useDarkMode } from "../context/darkModeContext"

import code             from "/icons/code.svg"
import flame            from "/icons/flame.svg"
import fileInfo         from "/icons/file-info.svg"
import darkCode         from "/icons/dark-code.svg"
import darkFlame        from "/icons/dark-flame.svg"
import darkFileInfo     from "/icons/dark-file-info.svg"


export const Dev = () => {
    const { name } = useParams()
    const { isDark } = useDarkMode()
    return(
        <section className={`w-full min-h-screen mt-12 sm:mt-24 
            flex flex-col justify-center items-center gap-6 
            text-stone-800 
            dark:text-stone-100 transition-colors duration-500`
        }>    
           <h1 className="
                text-5xl text-teal-700 font-bold text-center py-6 
                border-b-1 border-teal-700/40
                md:text-7xl
            ">
                Weather Now
            </h1>
            <h2 className="w-full max-w-9/10 text-xl text-center text-stone-800/80
                dark:text-stone-300/80
            "> 
                Mostraremos el estado del tiempo en tu ubicación o en cualquier lugar que deses consultar. 
            </h2>
            <Proyect_images />
            <div className="w-full mt-12
                flex flex-col items-center justify-center gap-12
            ">
                <div className="w-full max-w-9/10 mx-auto flex flex-col md:flex-row gap-8">
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <img src={isDark ? fileInfo : darkFileInfo} alt="icono de descripción" />
                            <h3 className="text-xl text-teal-800 dark:text-teal-200 font-semibold">Descripción</h3>
                        </div>
                        <ul className="w-full text-stone-800 dark:text-stone-200/70 list-disc pl-4 space-y-2">
                            <li>
                                <p>Consulta del clima de distintas ciudades del mundo.</p>
                            </li>
                            <li>
                                <p>Uso de las diversas herramientas que ofrece la API de Open-Meteo.</p>
                            </li>
                            <li>
                                <p>Posibilidad de cambiar las unidades de medida de todos los valores.</p>
                            </li>
                            <li>
                                <p>Diseño responsive para garantizar la accesibilidad en todos los dispositivos.</p>
                            </li>
                            <li>
                                <p>Implementación de modo claro y modo oscuro.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <img src={isDark ? flame : darkFlame} alt="icono de desafíos" />
                            <h3 className="text-xl text-teal-800 dark:text-teal-200 font-semibold">Desafíos</h3>
                        </div>
                        <ul className="w-full max-w-8/10 text-stone-800 dark:text-stone-200/70 list-disc pl-4">
                            <li>
                                <p>Integración de TypeScript para tipar y manejar los datos obtenidos desde Open-Meteo.</p>
                            </li>
                            <li>
                                <p>Uso de distintos Hooks de React para la gestión del estado y efectos.</p>
                            </li>
                            <li>
                                <p>Implementación de geolocalización para detectar la ubicación del usuario y realizar búsquedas personalizadas.</p>
                            </li>
                        </ul>
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
       </section>
    )
}