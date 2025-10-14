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

export const ListTechnology = () => {
    return (
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
    )
}