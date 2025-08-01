import React from 'react'

const ShoeCard = ({imgURL, changebigshoeimage, bigshoeimg}) => {


  const handleClick = () => {
    if(bigshoeimg !== imgURL.bigShoe) {
      changebigshoeimage(imgURL.bigShoe)
  }
}
  return (
    <div className={`border-2 rounded-xl 
      ${bigshoeimg === imgURL.bigShoe ? 'border-coral-red transition ease-out duration-1000' : 'border-transparent'}
    cursor-pointer max-sm:flex-1`} 
    onClick={handleClick}
    
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imgURL.thumbnail} 
        alt="shoe collection thumbnail" 
        width={150}
        height={103}
        className='object-contain '
        />
      </div>
    </div>
  )
}

export default ShoeCard
