import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home, About, Contact, User } from "./components/index.js"
import Layout from './Layout.jsx'
import GitHub, { githubinLoader } from './components/GitHub/GitHub.jsx'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children: [{
//       path: "",
//       element: <Home/>
//     },{
//       path: "About",
//       element : <About/>
//     },{
//       path: "Contact",
//       element:<Contact/>
//     },{}]
//   }
// ])

// Another way or routing (easy way to be Honest!)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>

        <Route 
        loader={githubinLoader}// to fect data from api we can call the API directly from here and fecting the data before render of page a very optamize approach :
        path='GitHub' 
        element={<GitHub/>}/>

        <Route path='user/:userid' element={<User/>}/> 
        { /*taking parameter from url value after (:) is important to remember: */ }
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
