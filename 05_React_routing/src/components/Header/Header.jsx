import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// Link is the replacement of a tag where it does not promote refresth like a tag
// Navlin it provide additonal thing 
import logo from '../../assets/logo.jpg';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow bg-white">
      <nav className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 lg:px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto mr-2"
          />
          <span className="text-xl font-bold text-gray-800">Misti Gallary❤️</span>
        </Link>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2 lg:order-2">
          <Link
            to="/login"
            className="hover:bg-emerald-500 text-black px-4 py-2 text-sm font-medium rounded transition"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-black  hover:bg-emerald-500 text-white px-4 py-2 text-sm font-medium rounded transition"
          >
            Get Started
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="hidden lg:flex items-center w-full lg:w-auto lg:order-1">
         <ul className="flex flex-row items-center justify-start space-x-4 lg:space-x-6 mt-4 lg:mt-0 w-full font-medium text-sm">
  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `block py-2 px-3 rounded transition duration-200 ${
          isActive
            ? 'text-gray-900 font-semibold'
            : 'text-emerald-600 hover:text-gray-500'
        }`
      }
    >
      Home
    </NavLink>
  </li>
  
  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `block py-2 px-3 rounded transition duration-200 ${
          isActive
            ? 'text-gray-900 font-semibold'
            : 'text-emerald-700 hover:text-gray-500'
        }`
      }
    >
      Contact
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/github"
      className={({ isActive }) =>
        `block py-2 px-3 rounded transition duration-200 ${
          isActive
            ? 'text-gray-900 font-semibold'
            : 'text-emerald-700 hover:text-gray-500'
        }`
      }
    >
      GitHub
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        `block py-2 px-3 rounded transition duration-200 ${
          isActive
            ? 'text-gray-900 font-semibold'
            : 'text-green-800 hover:text-gray-500'
        }`
      }
    >
      About
    </NavLink>
  </li>
</ul>

        </div>
      </nav>
    </header>
  );
}
