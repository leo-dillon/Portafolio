import { HeaderAnchor } from "../anchor/HeaderAnchor"
import githubLight from "/redS/brand-github.svg"
import githubDark from "/redS/brand-dark-github.svg"
import mail from "/icons/mail.svg"
import darkMail from "/icons/dark-mail.svg"

export const Presentation = () => {
    return (
        <section className="relative w-full max-w-9/10 min-h-150 sm:min-h-screen pt-12 pb-20
            flex flex-col items-center gap-2 justify-center border-b border-teal-800/50 
            text-center text-stone-700
            dark:text-stone-200
        ">
            <h1 className="
            w-full md:maw-w-9/10
            text-5xl text-wrap font-bold px-8 py-5 text-blue-950 dark:text-gray-100 sm:mb-6
            sm:rounded-full
            md:text-8xl 
            lg:text-9xl 
            ">
                Leonardo <span className=" text-4xl md:text-5xl opacity-30 ">Nahuel</span> <span className=" text-4xl md:text-5xl opacity-30">Jeannoteguy</span>  Dillon 
            </h1>
            <p className="sm:mt-12 text-2xl md:text-4xl text-blue-950/70 font-bold
                dark:text-teal-300
            ">
                Programador Full-Stack
            </p>
            <p className="mt-4 text-xl md:text-2xl text-stone-600 
            dark:opacity-60 dark:text-stone-300">
                Desarrollador de aplicaciones accesibles, atractivas y modernas
            </p>
            <div 
            className="absolute bottom-4 p-4 py-2 flex flex-row gap-4 bg-stone-200 shadow-sm shadow-blue-800
                dark:bg-stone-950 dark:shadow-blue-500
                rounded-full
            ">
                <HeaderAnchor link="https://mail.google.com/mail/?view=cm&fs=1&to=jeannotegui@gmail.com&su=Hola%20Leonardo!" text="Gmail" fixed={false} img={mail} darkImg={darkMail} target={true} />
                <HeaderAnchor link="https://github.com/leo-dillon" text="GitHub" fixed={false} img={githubLight} darkImg={githubDark} target={true} />
                <HeaderAnchor link="https://www.linkedin.com/in/leonardo-dillon-jeannoteguy-1878b515a/" text="LinkedIn" fixed={false} img="/redS/brand-linkedin.svg" darkImg="/redS/brand-dark-linkedin.svg" target={true} />
            </div>
        </section>
    )
}