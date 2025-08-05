import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='  sm:w-[350px] sm:min-w-[350px] bg-white w-full rounded-[20px] shadow-gray-600 shadow-3xl flex-1 ml-4 px-14 py-16'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full '>
        <img src={imgURL} alt={label} 
        width={24} height={24}/>
      </div>
      <h3 className='text-black mt-5 font-mono text-3xl leading-normal font-bold'>{label}</h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-gray-700'>{subtext}</p>
    </div>
  )
}

export default ServiceCard
