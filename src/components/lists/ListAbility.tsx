export const ListAbility = () => {
    const listaHabilidades = [ "Diseño UI/UX", "Diseño Responsivo", "Compatibilidad entre Navegadores", "Diseño de Bases de Datos", "Control de Versiones", "Resolución de Problemas", "Trabajo en Equipo", "Atención al Detalle" ]

    return (
         <ul 
            className=" flex flex-row flex-wrap gap-4 mt-4 mb-8

            "
        >
            {listaHabilidades.map( (hab, index) => {
                return (
                    <li 
                    key={index}
                    className=" w-max px-3 py-1 rounded-2xl
                        bg-stone-200 shadow-sm shadow-stone-800
                        dark:bg-stone-800 dark:shadow-stone-500
                    ">
                            { hab }
                    </li>
                )
            })}
        </ul>
    )
}