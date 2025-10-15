interface Props {
    texts: string[]
}
export const ListTexts = ({ texts }: Props) => {
    return (
        <ul className="w-full text-stone-800 dark:text-stone-200/70 list-disc pl-4 space-y-2">
            { 
                texts.map( (texts, index) => {
                    return(
                        <li key={index}>
                            <p>{texts}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}