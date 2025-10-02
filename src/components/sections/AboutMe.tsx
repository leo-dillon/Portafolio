import { useState } from "react"

import darkArrowBack from "/icons/dark-arrow-back.svg"
import { H2 } from "../text/H2"
import { Subtitle } from "../text/Subtitle"

import boostrap from "/tech/boostrap.svg"
import css from "/tech/css.svg"
import git from "/tech/git.svg"
import html from "/tech/html.svg"
import javaScript from "/tech/javaScript.svg"
import kotlin from "/tech/kotlin.svg"
import laravel from "/tech/laravel.svg"
import mongoDB from "/tech/mongoDB.svg"
import mysql from "/tech/mysql.svg"
import php from "/tech/php.svg"
import tailwind from "/tech/tailwind.svg"
import vue from "/tech/vue.svg"
import react from "/tech/react.svg"

export const AboutMe = () => {
    const [ avatar, setAvatar ] = useState(true)
    const listaHabilidades = [ "Diseño UI/UX", "Diseño Responsivo", "Compotibilidad entre Navegadores", "Diseño de Bases de Datos", "Control de Versiones", "Resolución de Problemas", "Trabajo en Equipo", "Atención al Detalle" ]
    
    return (
        <section 
        id="aboutMe"
        className="w-full max-w-9/10 md:ml-auto min-h-screen pt-18
            flex flex-col gap-12
            text-stone-700 border-b border-teal-800/50 
            dark:text-stone-200
        ">
            <div>
                <Subtitle text="Quien Soy"/>
                <H2 text="Acerca de mí" />
                <div className="
                    md:flex-row md:my-12 md:mx-4 
                    flex flex-col items-center gap-8
                ">
                    <picture className="w-52 h-max relative block mb-6
                        md:mb-0
                        rounded-full border-2 border-teal-300
                    ">
                        <img
                            className="w-52 rounded-full" 
                            src={ (avatar) ? "/image/avatar.png" : "/image/LDillon.png"} alt="Imagen de Leonardo Dillon" 
                        />
                        <button className="flex justify-center items-center
                        right-0 w-8 h-8 absolute 
                        bg-teal-300 cursor-pointer rounded-full duration-100
                        hover:scale-105"
                        onClick={() => setAvatar(!avatar)}
                        title="Cambiar imagen"
                        >
                            <img src={ darkArrowBack } alt="" />
                        </button>
                    </picture>
                    <div className="w-full text-lg bg-stone-200 text-stone-800 p-4 rounded-2xl
                        md:ml-12
                        dark:bg-stone-800 dark:text-stone-200
                    ">
                        <span className="text-teal-800 dark:text-teal-300 font-semibold"> M</span>i nombre es <span className="text-teal-800 dark:text-teal-300 font-semibold"> Leonardo Dillon</span> y nací en Buenos Aires,
                        <span className="text-teal-800 dark:text-teal-300 font-semibold"> Argentina</span>.
                        Comencé mis estudios en el año 2022, especializándome en programación web
                        en <a className="text-teal-800 dark:text-teal-300 font-semibold underline" href="https://www.digitalhouse.com/ar" title="Ir a digitalhouse.com.ar">Digital House</a>, donde me gradué como <span className="text-teal-800 dark:text-teal-300 font-semibold"> desarrollador Front-End </span> 
                        ese mismo año. Continué aprendiendo de manera autodidacta hasta que, en
                        agosto de 2023, comencé la carrera de 
                        <span className="text-teal-800 dark:text-teal-300 font-semibold"> Diseño y Desarrollo Web</span> en el <a className="text-teal-800 dark:text-teal-300 font-semibold underline" href="https://davinci.edu.ar/carreras/desarrollo-web-y-mobile" title="Ir a davinci.edu.ar">Instituto Da Vinci</a>, donde sigo en la actualidad.
                    </div>
                </div>  
            </div>
            <div>
                <Subtitle text="Mis Habilidades" />
                <ul 
                    className=" flex flex-row flex-wrap gap-4 mt-4 mb-8

                    "
                >
                    {listaHabilidades.map( (hab, index) => {
                        return (
                            <li 
                            key={index}
                            className=" w-max px-3 py-1 rounded-2xl
                                bg-stone-200
                                dark:bg-neutral-800
                            ">
                                    { hab }
                            </li>
                        )
                    })}
                </ul>
                <Subtitle text="Mis Tecnologías / Herramientas"/>
                <ul className="flex flex-row flex-wrap gap-8 mt-4 mb-8">
                    <li aria-label="Boostrap" className="w-[90px] flex flex-col items-center hover:scale-110 duration-150">
                        <img className="w-12 h-12" src={boostrap} title="Boostrap" />
                        <p className="text-stone-800 dark:text-stone-200 opacity-80 font-semibold">Boostrap</p>
                    </li>
                    <li aria-label="CSS" className="w-[90px] flex flex-col items-center hover:scale-110 duration-150">
                        <img className="w-12 h-12" src={css} title="CSS" />     
                        <p className="text-stone-800 dark:text-stone-200 opacity-80 font-semibold">CSS</p>
                    </li>
                    <li aria-label="Git" className="w-[90px] flex flex-col items-center hover:scale-110 duration-150">
                        <img className="w-12 h-12" src={git} title="Git" />
                        <p className="text-stone-800 dark:text-stone-200 opacity-80 font-semibold">Git</p>
                    </li>
                    <li aria-label="HTML" className="w-[90px] flex flex-col items-center hover:scale-110 duration-150">
                        <img className="w-12 h-12" src={html} title="HTML" />
                        <p className="text-stone-800 dark:text-stone-200 opacity-80 font-semibold">HTML</p>
                    </li>
                    <li aria-label="JavaScript" className="w-[90px] flex flex-col items-center hover:scale-110 duration-150">
                        <img className="w-12 h-12" src={javaScript} title="JavaScript" />
                        <p className="text-stone-800 dark:text-stone-200 opacity-80 font-semibold">JavaScript</p>
                    </li>
                    <li aria-label="Kotlin" className="w-[90px] flex flex-col items-center hover:scale-110 duration-150">
                        <img className="w-12 h-12" src={kotlin} title="Kotlin" />
                        <p className="text-stone-800 dark:text-stone-200 opacity-80 font-semibold">Kotlin</p>
                    </li>
                    <li aria-label="Laravel" className="w-[90px] flex flex-col items-center hover:scale-110 duration-150">
                        <img className="w-12 h-12" src={laravel} title="Laravel" />
                        <p className="text-stone-800 dark:text-stone-200 opacity-80 font-semibold">Laravel</p>
                    </li>
                    <li aria-label="MongoDB" className="w-[90px] flex flex-col items-center hover:scale-110 duration-150">
                        <img className="w-12 h-12" src={mongoDB} title="MongoDB" />
                        <p className="text-stone-800 dark:text-stone-200 opacity-80 font-semibold">MongoDB</p>
                    </li>
                    <li aria-label="MySQL" className="w-[90px] flex flex-col items-center hover:scale-110 duration-150">
                        <img className="w-12 h-12" src={mysql} title="MySQL" />
                        <p className="text-stone-800 dark:text-stone-200 opacity-80 font-semibold">MySQL</p>
                    </li>
                    <li aria-label="PHP" className="w-[90px] flex flex-col items-center hover:scale-110 duration-150">
                        <img className="w-12 h-12" src={php} title="PHP" />
                        <p className="text-stone-800 dark:text-stone-200 opacity-80 font-semibold">PHP</p>
                    </li>
                    <li aria-label="Tailwind" className="w-[90px] flex flex-col items-center hover:scale-110 duration-150">
                        <img className="w-12 h-12" src={tailwind} title="Tailwind" />
                        <p className="text-stone-800 dark:text-stone-200 opacity-80 font-semibold">Tailwind</p>
                    </li>
                    <li aria-label="Vue" className="w-[90px] flex flex-col items-center hover:scale-110 duration-150">
                        <img className="w-12 h-12" src={vue} title="Vue" />
                        <p className="text-stone-800 dark:text-stone-200 opacity-80 font-semibold">Vue</p>
                    </li>
                    <li aria-label="React" className="w-[90px] flex flex-col items-center hover:scale-110 duration-150">
                        <img className="w-12 h-12" src={react} title="React" />
                        <p className="text-stone-800 dark:text-stone-200 opacity-80 font-semibold">React</p>
                    </li>
                </ul>
            </div>
            

        </section>
    )
}