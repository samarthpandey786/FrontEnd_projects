import React from 'react'
import amazon  from "../assets/images/amazon.png"
import flipkart from "../assets/images/flipkart.png"
import heroImage from "../assets/images/hero-image.png"
function Hero() {
  return (
    <div className="h-[80vh] bg-white mx-[9%] my-[3%] flex items-center justify-between px-10  ">
        {/* Left Section */}
        <div className="flex flex-col justify-center max-w-[50%] space-y-6 ">
          <div className="text-black text-6xl font-extrabold leading-tight">
            YOUR FEET<br />DESERVE<br />THE BEST
          </div>
          <div className="text-gray-700 text-sm">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </div>
          <div className="flex gap-4">
            <button className="bg-red-600 text-white px-6 py-2 rounded shadow hover:bg-red-700 transition">
              Shop Now
            </button>
            <button className="border px-6 py-2 rounded shadow">
              Category
            </button>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-sm text-gray-600">Also Available On</span>
            <img src={flipkart} alt="Flipkart" className="h-6" />
            <img src={amazon} alt="Amazon" className="h-6" />
          </div>
        </div>

        {/* Right Section - Shoe Image */}
        <div className="w-[40%]">
          <img src={heroImage} alt="Shoe" className="w-full object-contain drop-shadow-2xl" />
        </div>
      </div>

  )
}

export default Hero
