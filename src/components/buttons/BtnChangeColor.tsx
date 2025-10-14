import { useDarkMode } from "../../context/darkModeContext";
import Moon from '/icons/icon-moon.svg'
import Sun from '/icons/icon-sun.svg'

export const BtnChangeColor = () => {
    const { isDark, toggleDarkMode } = useDarkMode();
    
    const changeColors = () => {
        document.documentElement.classList.toggle('dark')
        toggleDarkMode()
        localStorage.setItem('theme', JSON.stringify(!isDark))
    }
    return(
        <button
                onClick={changeColors}
                id="theme"
                className="
                    p-2 rounded-md duration-100 cursor-pointer group
                    hover:bg-neutral-300
                    dark:hover:bg-neutral-500
                    "
            >
                <picture >
                    <img className='w-6 group-hover:scale-110 duration-200' src={(isDark) ? Sun : Moon} alt="Icono Tema Oscuro" title="Cambiar tema actual" />
                </picture>
            </button>
    )
}