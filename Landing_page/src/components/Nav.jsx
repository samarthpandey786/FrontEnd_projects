import React from 'react'
import Logo from "../assets/brand_logo.png"
function Nav() {
  return (
    <div >
      <nav className='mt-6'>
        <div className='Logo flex items-start mx-20'>
          <img src={Logo} alt="brand-logo" />
        </div>
        <div >
        <ul className='flex  relative col-span-4 gap-4 justify-center mt-[-40px]'>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        </div>
        <div className='flex justify-end mx-4 relative mt-[-20px] mr-20 '>
        <button className=' px-4 py-1 my-[-10px]  bg-red-400 text-white rounded-md hover:bg-gray-800 transition duration-300 ease-in-out'>
          Login
        </button>
        </div>
      </nav>
      
    </div>
  )
}

export default Nav
