import { useState } from "react"
import { ListImage } from "../lists/ListImage"

type projectImages = {
    name: string,
    img: string
}
interface Props{
    images: projectImages[] 
}

export const Proyect_images = ({ images }: Props) => {
    const [ image, setImage ] = useState<string>( images[0].img )
    
    const changeImage = (img: string) => {
        const a = document.querySelector("#large")
        if( a ){
            a.classList.remove("aparecer-L")
            setTimeout(() => {
                a.classList.add("aparecer-L")
            }, 10);
        }
        setImage(img)
    }

    return (
        <div id="images" className="
            relative w-full max-w-9/10 mx-auto aparecer-L
            lg:max-w-full
            px-2 sm:px-6 py-4
            rounded-xl
            bg-stone-300 dark:bg-stone-900">
            <div id="large">
                <picture className="flex items-center w-full">
                    <img src={image} alt="Página incia" className="w-full max-h-120 object-contain rounded-2xl border-1 border-stone-600 aparecer-L2" />
                </picture>
            </div>  
            <ListImage images={images} changeImage={changeImage} />
        </div>
    )
}