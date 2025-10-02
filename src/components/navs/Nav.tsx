import { HeaderAnchor } from "../anchor/HeaderAnchor"
import code from "/icons/code.svg"
import darkCode from "/icons/dark-code.svg"
import fileInfo from "/icons/file-info.svg"
import darkFileInfo from "/icons/dark-file-info.svg"
import mail from "/icons/mail.svg"
import darkMail from "/icons/dark-mail.svg"
interface Props {
    fixed: boolean
}
export const Nav = ({fixed} : Props) => {
    return (
        <nav 
            className={`
                flex
                ${ 
                    ( fixed )
                    ? "flex-row gap-8"
                    : ` flex-row gap-4
                        md:flex-col
                    `
                 }
            `}
        >
            <HeaderAnchor link="#aboutMe" text="Sobre Mí" fixed={fixed} img={fileInfo} darkImg={darkFileInfo} />
            <HeaderAnchor link="#myProyects" text="Mis Proyectos" fixed={fixed} img={code} darkImg={darkCode} />
            <HeaderAnchor link="https://mail.google.com/mail/?view=cm&fs=1&to=jeannotegui@gmail.com&su=Hola%20Leonardo!" text="Contactame" fixed={fixed} img={mail} darkImg={darkMail}  />
        </nav>
    )
} 