import { useDarkMode } from "../../context/darkModeContext"
import darkLogo from "/logo/darkLogo.svg"
import lightLogo from "/logo/lightLogo.svg"

interface Props {
    fixed: boolean
}

export const Logo = ({ fixed }: Props) => {
    const { isDark } = useDarkMode()
    return (
        <div className='flex items-center gap-4'>
            <picture>
                <img
                    src={(isDark) ? lightLogo : darkLogo}
                    alt="Logo del proyecyp Extensions"
                    className={ ` 
                        ${
                            ( fixed )
                            ? 'h-8'
                            : 'h-6'
                        }
                    `}
                />
            </picture>
        </div>
    )
}