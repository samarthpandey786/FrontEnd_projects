import React from 'react'

const ShoeCard = (imagURL, changebighsoeimage, bigshoeimg) => {

    const handleClick = () => {
        if(bigshoeimg !== imagURL.bigShoe) {
            changebighsoeimage(imagURL.bigShoe);
    }

  return (
    <div className={`border-2 rounded-xl ${bigshoeimg === imagURL ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1 `}
    onClick={handleClick}
    >
      <div>
        <img src={imagURL.thumbnail} alt="shoe collection"
        width={127} 
        height={103}
        className='object-contain'/>
      </div>
    </div>
  )
}

export default ShoeCard
