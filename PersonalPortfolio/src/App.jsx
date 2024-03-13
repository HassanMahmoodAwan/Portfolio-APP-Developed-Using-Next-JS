import './App.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElement} from "react-router-dom"
import routerLayout from "./routerLayout"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElement(
      <Route path='/' element={<routerLayout/>}>
        <Route path='' />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
