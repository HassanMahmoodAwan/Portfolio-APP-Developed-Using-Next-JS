import './App.css'
import { AboutUs, Applications, Home, Projects } from './components'

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import RouterLayout from './RouterLayout'

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RouterLayout />}>
        <Route path='' element={<Home />}  />
        <Route path='aboutUs' element={<AboutUs />}  />
        <Route path='Projects' element={<Projects />}  />
        <Route path='Apps' element={<Applications />}  />
      </Route>
    )
  )

  return (
    <div className='w-screen h-screen bg-gray-950 text-gray-100'>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App
