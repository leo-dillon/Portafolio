import { HeaderAnchor } from "../anchor/HeaderAnchor"
import githubLight from "/redS/brand-github.svg"
import githubDark from "/redS/brand-dark-github.svg"
import mail from "/icons/mail.svg"
import darkMail from "/icons/dark-mail.svg"

export const Presentation = () => {
    return (
        <section className=" min-h-screen
            flex flex-col items-center justify-center border-b border-teal-800/50 
            text-center text-stone-700
            dark:text-stone-200
        ">
            <h1 className="text-5xl md:text-6xl lg:text-9xl font-bold py-5 animate-fade-in-up
                via-stone-950 bg-clip-text text-transparent bg-gradient-to-br
                dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-br
                dark:from-primary-950 dark:via-white dark:to-primary-950
            ">
                Leonardo Dillon <br /> Jeannoteguy
            </h1>
            <p className="mt-12 text-2xl md:text-4xl text-teal-800 font-bold
                dark:text-teal-300
            ">
                Programador Full-Stack
            </p>
            <p className="mt-4 text-xl md:text-2xl text-stone-600 
            dark:opacity-60 dark:text-stone-300">
                Desarrollador de aplicaciones accesibles, atractivas y modernas
            </p>
            <div 
            className="mt-8 p-4 py-2 flex flex-row gap-4 bg-stone-200 dark:bg-stone-800
                rounded-full
            ">
                <HeaderAnchor link="https://mail.google.com/mail/?view=cm&fs=1&to=jeannotegui@gmail.com&su=Hola%20Leonardo!" text="Contacto" fixed={false} img={mail} darkImg={darkMail} />
                <HeaderAnchor link="https://github.com/leo-dillon" text="GitHub" fixed={false} img={githubLight} darkImg={githubDark} />
                <HeaderAnchor link="https://www.linkedin.com/in/leonardo-dillon-jeannoteguy-1878b515a/" text="LinkedIn" fixed={false} img="/redS/brand-linkedin.svg" darkImg="/redS/brand-dark-linkedin.svg" />
            </div>
        </section>
    )
}