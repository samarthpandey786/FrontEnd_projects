import React from 'react'
import logo from '../assets/images/brand_logo.png'
function Nav() {
  return (
    <nav className="flex justify-between items-center border-b-2 border-gray-300 bg-white">
        <div className=' my-5 mx-10'>
            <img src={logo} alt="" />
        </div>
        <div >
            <ul className="nav-links flex justify-end col-span-4 gap-5 mx-10 my-5">
                <a href="">
                    <li>Home</li>
                </a>
                <a href="">
                    <li>About</li>
                </a>
                <a href="">
                    <li>Contact</li>
                </a>

            </ul>
        </div>
    </nav>
  )
}

export default Nav
