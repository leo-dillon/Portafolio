import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Header } from './components/header/Header'
import { Footer } from './components/sections/Footer'
import { Home } from './pages/Home'
import { Error_404 } from './pages/Error_404'

function App() {
  const router = createBrowserRouter([
    { path:"/", element: <Home /> },
    { path:"*", element: <Error_404 />},
    { path:"/:nombre", }
  ])
  return (
    <div className='
      flex flex-col justify-center items-center
      w-full max-w-9/10 mx-auto
      md:max-w-[1000px] 
    '>
      <Header />
      <RouterProvider router={router}/>
      <Footer />
    </div>
  )
}

export default App
