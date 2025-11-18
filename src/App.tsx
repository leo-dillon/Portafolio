import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Header } from './components/header/Header'
import { Footer } from './components/sections/Footer'
import { Home } from './pages/Home'
import { Error_404 } from './pages/Error_404'
import { Dev } from './pages/Dev'

function App() {
  const router = createBrowserRouter([
    { path:"/",             element: <Home />       },
    { path:"/dev/:name",    element: <Dev />        },
    { path:"*",             element: <Error_404 />  }
  ])
  return (
    <div className='
      flex flex-col justify-center items-center pb-12 sm:pb-0
      bg-zinc-200 dark:bg-zinc-950
      w-full sm:max-w-9/10 mx-auto border-x-1 border-blue-800/30 shadow-2xl shadow-blue-800/30
      md:max-w-[1300px] md:px-12
    '>
      <Header />
      <RouterProvider router={router}/>
      <Footer />
    </div>
  )
}

export default App
