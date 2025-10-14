import { AboutMe } from "../components/sections/AboutMe"
import { Presentation } from "../components/sections/Presentation"
import { Projects } from "../components/sections/Proyects"

export const Home = () => {
    return (
        <>
            <Presentation />
            <AboutMe />
            <Projects />
        </>
    )
}