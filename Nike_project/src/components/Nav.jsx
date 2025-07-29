import React, { useState, useEffect } from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1024)

  // Handle window resize to track mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        {/* Navbar logo  */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Navbar list items (Desktop) */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((list_item) => (
            <li key={list_item.label}>
              <a
                href={list_item.href}
                className='font-montserrat leading-normal text-lg text-white hover:text-[#ff6452] hover:underline transition ease-in-out'
              >
                {list_item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger icon (Mobile) */}
        <div className='hidden max-lg:block' onClick={toggleMobileMenu}>
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className='bg-white cursor-pointer'
          />
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
        <ul
            className={`flex flex-col gap-4 mt-4 bg-gray-700 text-white p-6 rounded-lg max-w-[90%] mx-auto lg:hidden text-2xl font-thin overflow-hidden transition-all duration-500 ease-in-out
                ${isMobileView ? (isMobileMenuOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible') : 'hidden'}
            `}
            >
            {navLinks.map((list_item) => (
                <li key={list_item.label}>
                <a
                    href={list_item.href}
                    onClick={() => setIsMobileMenuOpen(false)} // optional: close on click
                    className='font-montserrat leading-normal text-lg hover:text-[#ff6452] hover:underline transition ease-in-out'>
                    {list_item.label}
                </a>
                </li>
            ))}
        </ul>

    </header>
  )
}

export default Nav
