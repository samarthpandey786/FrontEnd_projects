import React from 'react'

const Button = ({label , iconURL , classname}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-8 py-6 border font-montserrat text-bold leading-none bg-coral-red rounded-full mt-4 border-coral-red h-4 w-[150px]  '>
        {label}
        {classname}
        {iconURL&&<img
        src={iconURL}
        alt='arrow right icon:'
        className='ml-2 rounded-full w-5 h-5 '
    />}
    </button>
    
  )
}

export default Button
