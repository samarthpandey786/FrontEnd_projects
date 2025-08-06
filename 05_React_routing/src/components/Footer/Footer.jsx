import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

export default function Footer() {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                className="h-16 mr-3"
                                alt="Logo"
                            />
                            <span className="text-xl font-bold text-gray-800 ">Misti Gallary❤️</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-600">
                                <li className="mb-2">
                                    <NavLink to="/" className={({ isActive }) =>
                                        `block  px-3 rounded transition duration-200 ${
                                        isActive
                                            ? 'text-emerald-600 font-semibold'
                                            : 'text-gray-900 hover:text-gray-500'
                                        }`
                                    }>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={({ isActive }) =>
                                        `block  px-3 rounded transition duration-200 ${
                                        isActive
                                            ? 'text-emerald-600 font-semibold'
                                            : 'text-gray-900 hover:text-gray-500'
                                        }`}>
                                    About</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-600">
                                <li className="mb-2">
                                    <NavLink
                                        to="https://github.com/samarthpandey786"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </NavLink>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">Discord</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-600">
                                <li className="mb-2">
                                    <Link to="#" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200" />
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023 <a href="" className="hover:underline">Misti Gallary:</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:mt-0 space-x-4">
                        {/* Example social icon */}
                        <Link to="#" className="text-gray-500 hover:text-gray-700">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M..." /> {/* You can update with real paths or keep icons minimal */}
                            </svg>
                            <span className="sr-only">Instagram💖</span>
                        </Link>
                        {/* Repeat for others */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
