export const Proyect = () => {
    return(
        <article className="w-full max-w-[350px] px-2 pb-6
        flex flex-col gap-3
        bg-stone-900 
        rounded-2xl shadow-sm shadow-stone-500
        ">
            <picture className="w-full pt-2
                rounded-3xl
                flex justify-center items-center
            ">
                <img src="/proyect/weatherNow/i1.png" alt="Imagen de inicio Weather Now" 
                    className="rounded-xl"
                />
            </picture>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl text-center font-semibold text-teal-300">Weather Now</h2>
                <p className="w-full max-w-9/10 mx-auto opacity-80 text-pretty ">
                    Mostraremos el estado del tiempo en tu ubicación o en cualquier lugar que deses consultar.
                </p>
            </div>
            <ul className="w-full max-w-9/10 mx-auto
                flex flex-row gap-2 flex-wrap
            ">
                <li className="w-fit flex gap-2 p-1">
                    <img src="/tech/vite.svg" alt="Logo de vite" className="w-6"/>
                </li>
                <li className="w-fit flex gap-2 p-1">
                    <img src="/tech/react.svg" alt="Logo de react" className="w-6"/>
                </li>
                <li className="w-fit flex gap-2 p-1">
                    <img src="/tech/tailwind.svg" alt="Logo de tailwind" className="w-6"/>
                </li>
                <li className="w-fit flex gap-2 p-1">
                    <img src="/tech/typescript.svg" alt="Logo de typescript" className="w-6"/>
                </li>  
            </ul>
            
        </article>
    )
}