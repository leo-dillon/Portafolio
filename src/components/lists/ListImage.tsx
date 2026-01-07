type projectImages = {
    name: string,
    img: string
}
interface Props{
    images: projectImages[],
    changeImage: ( img: string ) => void 
}

export const ListImage = ({ images, changeImage }: Props) => {
  return (
        <div id="short" className="
            flex gap-2
            overflow-x-auto
            w-full
            py-2
            scrollbar-thin scrollbar-thumb-stone-400 dark:scrollbar-thumb-stone-600
        ">
            {   images.map( (img, index) => {
                    return (
                        <picture className="
                        min-w-20 max-w-40
                        flex justify-center items-center
                        px-1 py-0.5
                        bg-stone-400 dark:bg-stone-600 rounded-md
                        cursor-pointer duration-200 hover:scale-90
                        "   
                        onClick={() => changeImage(img.img)}
                        key={index}
                        >
                            <img src={ img.img } alt={img.name} title={img.name} className="w-full rounded-sm " />
                        </picture>
                    )
                })
            }
        </div>
  )
}

