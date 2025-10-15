import { useState } from "react"

export const Proyect_images = () => {
    const [ image, setImage ] = useState<string>("/proyects/weatherNow/home.png")
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
                <picture className="w-full max-w-[140px] sm:max-w-[160px] h-[120px] cursor-pointer duration-200
                    flex justify-center items-center
                    bg-stone-400 dark:bg-stone-800 rounded-xl
                    hover:scale-90
                "
            onClick={() => setImage("/proyects/weatherNow/home.png")}
                >
                    <img src="/proyects/weatherNow/home.png" alt="Página incia" className="w-full max-w-9/10 sm:max-w-8/10 rounded-2xl border-1 border-stone-600" />
                </picture>
                <picture className="w-full max-w-[140px] sm:max-w-[160px] h-[120px] cursor-pointer duration-200
                    flex justify-center items-center
                    bg-stone-400 dark:bg-stone-800 rounded-xl
                    hover:scale-90
                "
                onClick={() => setImage("/proyects/weatherNow/SK.png")}
                >
                    <img src="/proyects/weatherNow/SK.png" alt="Página incia" className="w-full max-w-9/10 sm:max-w-8/10 rounded-2xl border-1 border-stone-600" />
                </picture>
                <picture className="w-full max-w-[140px] sm:max-w-[160px] h-[120px] cursor-pointer duration-200
                    flex justify-center items-center
                    bg-stone-400 dark:bg-stone-800 rounded-xl
                    hover:scale-90
                "
                onClick={() => setImage("/proyects/weatherNow/error.png")}
                >
                    <img src="/proyects/weatherNow/error.png" alt="Página incia" className="w-full max-w-9/10 sm:max-w-8/10 rounded-2xl border-1 border-stone-600" />
                </picture>
                <picture className="w-full max-w-[140px] sm:max-w-[160px] h-[120px] cursor-pointer duration-200
                    flex justify-center items-center
                    bg-stone-400 dark:bg-stone-800 rounded-xl
                    hover:scale-90
                "
                onClick={() => setImage("/proyects/weatherNow/home_light.png")}
                >
                    <img src="/proyects/weatherNow/home_light.png" alt="Página incia" className="w-full max-w-9/10 sm:max-w-8/10 rounded-2xl border-1 border-stone-600" />
                </picture>
                <picture className="w-full max-w-[140px] sm:max-w-[160px] h-[120px] cursor-pointer duration-200
                    flex justify-center items-center
                    bg-stone-400 dark:bg-stone-800 rounded-xl
                    hover:scale-90
                "
                onClick={() => setImage("/proyects/weatherNow/SK_light.png")}
                >
                    <img src="/proyects/weatherNow/SK_light.png" alt="Página incia" className="w-full max-w-9/10 sm:max-w-8/10 rounded-2xl border-1 border-stone-600" />
                </picture>
                <picture className="w-full max-w-[140px] sm:max-w-[160px] h-[120px] cursor-pointer duration-200
                    flex justify-center items-center
                    bg-stone-400 dark:bg-stone-800 rounded-xl
                    hover:scale-90
                "
                onClick={() => setImage("/proyects/weatherNow/error_light.png")}
                >
                    <img src="/proyects/weatherNow/error_light.png" alt="Página incia" className="w-full max-w-9/10 sm:max-w-8/10 rounded-2xl border-1 border-stone-600" />
                </picture>
            </div>
        </div>
    )
}