interface Props{
    text: string
}
export const H2 = ({ text }: Props) => {
    return(
        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold py-5 animate-fade-in-up
                    via-stone-950 bg-clip-text text-transparent bg-gradient-to-br
                    dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-br
                    dark:from-primary-950 dark:via-white dark:to-primary-950">
            { text }
        </h2>
    )
}