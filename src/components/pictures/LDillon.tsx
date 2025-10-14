import { useState } from "react"
import darkArrowBack from "/icons/dark-arrow-back.svg"


export const LDillon = () => {
    const [ avatar, setAvatar ] = useState(true)

    const toggleAvatar = () => {

        setAvatar(!avatar)
    }

    return (
        <picture className="
            w-52 h-max relative block mb-6
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
            hover:scale-105 hover:rotate-45
            active:scale-90"
            onClick={() => toggleAvatar()}
            title="Cambiar imagen"
            >
                <img src={ darkArrowBack } alt="Boton para cambiar la imagen de Leonardo Dillon" />
            </button>
        </picture>

    )
}