import { useState } from "react"

type projectImages = {
    name: string,
    img: string
}
interface Props{
    images: projectImages[] 
}

export const Proyect_images = ({ images }: Props) => {
    const [ image, setImage ] = useState<string>( images[0].img )
    return (
        <div id="images" className="
            w-full max-w-9/10 mx-auto
            lg:max-w-full
            px-2 sm:px-6 py-4
            flex flex-col justify-center items-center gap-8 
            rounded-xl
            bg-stone-300 dark:bg-stone-900">
            <div id="large">
                <picture className="flex items-center w-full max-w-[300px] min-h-[250px]
                    md:max-w-[500px] md:min-h-[380px]
                ">
                    <img src={image} alt="Página incia" className="w-full rounded-2xl border-1 border-stone-600" />
                </picture>
            </div>  
            <div id="short" className="w-full
                flex flex-row justify-center flex-wrap items-center gap-1 sm:gap-4
            ">
                {   images.map( (img, index) => {
                    return (
                        <picture className="w-full max-w-[140px] sm:max-w-[160px] h-[120px] cursor-pointer duration-200
                            flex justify-center items-center
                            bg-stone-400 dark:bg-stone-800 rounded-xl
                            hover:scale-90
                        "
                        onClick={() => setImage(img.img)}
                        key={index}
                        >
                            <img src={ img.img } alt={img.name} className="w-full max-w-9/10 sm:max-w-8/10 rounded-2xl border-1 border-stone-600" />
                        </picture>
                    )
                })
                }
            </div>
        </div>
    )
}