import React from 'react'
import{Header , Footer} from './components/index.js'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>

    <Outlet/> 
     {/* inject the page in the outlet the user want to access  */}
    <Footer/>
    </>
  )
}

export default Layout
