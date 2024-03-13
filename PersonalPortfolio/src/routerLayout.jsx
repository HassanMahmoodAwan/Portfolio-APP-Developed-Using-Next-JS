import React from 'react'
import {Outlet} from 'react-router-dom'

import {Navbar, Footer} from "./components"

function routerLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default routerLayout
