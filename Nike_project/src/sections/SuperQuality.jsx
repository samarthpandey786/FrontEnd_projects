import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
   <section id='about-us'
   className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container' 
  >
   <div className='flex flex-1 flex-col'>
      <h2 className='mt-10 text-white font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
        we provide you
    
        <br />
        <span className='text-[#ff6452]'>Super </span> 
        <span className='text-[#ff6452]'>Quality </span> 
        Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg  text-gray-400 text-2xl font-mono'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality innovation, and a touch of elegance.</p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to excellence ensures that every step you take is supported by the finest materials and cutting-edge technology, making our shoes the perfect choice.
        </p>
        <div className='mt-11 mb-5'>
          <Button label="view details"
        />
        </div>
        
   </div>
   <div className='flex-1 flex justify-center item-center'>
    <img src={shoe8} alt="" 
    width={570}
    height={522}
    className='object-contain'
    />
   </div>
    
  </section>
  
  )
}

export default SuperQuality
