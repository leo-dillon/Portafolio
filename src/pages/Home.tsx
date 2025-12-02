import { useEffect } from "react"
import { AboutMe } from "../components/sections/AboutMe"
import { Presentation } from "../components/sections/Presentation"
import { Projects } from "../components/sections/Proyects"
import { useLocation } from "react-router-dom"

export const Home = () => {
    const { hash } = useLocation()
    useEffect( () => {
        if(hash.length > 2){
            const element = document.querySelector(hash)
            element?.scrollIntoView({ behavior: "smooth" })
        }
    }, [hash]) 
    return (
        <>
            <Presentation />
            <AboutMe />
            <Projects />
        </>
    )
}