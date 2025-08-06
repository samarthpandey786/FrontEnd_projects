import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Hero Section */}
      <aside className="relative overflow-hidden bg-white text-black rounded-lg mx-2 sm:mx-16 py-16">
        <div className="relative z-10 max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-xl text-center sm:text-right sm:ml-auto space-y-8">
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight ">
              Download Now
              <span className="block sm:inline text-orange-700 hover:text-emerald-950 transition duration-300 ml-10 cursor-pointer">  Misti Gallary: </span>
            </h2>

            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-emerald-500 transition duration-300"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              <span className="ml-2">Download now</span>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
       <div className="flex flex-col items-center sm:items-start -mt-20 ml-10">
            <img
                className="w-64 sm:w-96 object-contain opacity-90 mb-6"
                src="https://img.freepik.com/premium-photo/drawing-girl-reading-book_985633-11765.jpg"
                alt="Remote Working"
            />
            <h1 className="text-center sm:text-left text-2xl sm:text-5xl font-semibold text-gray-800">
                Book's provid wisdom:
            </h1>
        </div>

      </aside>

      {/* Section Image */}
      <div className="grid place-items-center sm:mt-20 mt-10">
        <img
          className="w-48 sm:w-96 "
          src="https://static.vecteezy.com/system/resources/previews/042/538/204/non_2x/woman-portrait-face-with-flowers-simple-minimalist-illustration-one-line-drawing-vector.jpg"
          alt="Working remotely"
        />
      </div>

      {/* Heading */}
      <h1 className="text-center text-2xl sm:text-5xl font-semibold py-10 text-gray-800">
        Trust is like a Glass:
      </h1>
    </div>
  );
}
