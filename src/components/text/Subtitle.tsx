interface Props{
    text: string
}
export const Subtitle = ({text} : Props) => {
    return (
        <h3 className="text-teal-800 text-lg font-semibold
            dark:text-teal-300
        "> { text } 
        </h3>
    )
}