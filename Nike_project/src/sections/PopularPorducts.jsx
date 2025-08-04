import React from 'react'
import{products} from '../constants'
import PopularProductCard from '../components/PopularProductCard'

// This component displays popular products
// It is styled with Tailwind CSS classes for a modern look
const PopularPorducts = () => {
  return (
    <section id='products' className="max-container max-sm:mt-12">
        <div className='flex flex-col justify-start gap-4'>
          <h2 className='text-4xl font-palanquin font-bold  flex  gap-2'> 
            Our 
            <span className='font-mono  text-coral-red'>popular</span>  products</h2>
          <p className='text-white font-mono lg:max-w-lg mt-2  '>Experience top-notch quality and style with our sought-after selection. Discover a world of comfort design, and value</p>
        </div>

        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-14'>
          {products.map((product) => (
            <PopularProductCard key = {product.name} {...product} />
          ))}
        </div>
    </section>
  )
}

export default PopularPorducts
