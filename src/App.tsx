import './App.css'
import { Header } from './components/header/Header'
import { AboutMe } from './components/sections/AboutMe'
import { Footer } from './components/sections/Footer'
import { Presentation } from './components/sections/Presentation'
import { Projects } from './components/sections/Proyects'

function App() {
  return (
    <div className='
      flex flex-col justify-center items-center
      w-full max-w-9/10 mx-auto
      md:max-w-[1000px] 
    '>
      <Header />
      <Presentation />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
