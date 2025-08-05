import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773}
        height={687} className='object-contain w-full' />
      </div>
       <div className='flex flex-1 flex-col'>
      <h2 className='mt-10 text-white font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
       
    
        <br />
        <span className='text-[#ff6452]'>Special </span> offer
        </h2>
        <p className='mt-4 lg:max-w-lg  text-gray-400 text-2xl font-mono'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality innovation, and a touch of elegance.</p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to excellence ensures that every step you take is supported by the finest materials and cutting-edge technology, making our shoes the perfect choice.
        </p>
        <div className='mt-11 mb-5 flex gap-4'>
          <Button label="Shop Now"/>
        <Button label="Learn more"/>
        </div>
        
   </div>
    </section>
  )
}

export default SpecialOffer
