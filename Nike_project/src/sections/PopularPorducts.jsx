import React from 'react'
import{products} from '../constants'

// This component displays popular products
// It is styled with Tailwind CSS classes for a modern look
const PopularPorducts = () => {
  return (
    <section id='products' className="max-container max-sm:mt-12">
        <div className='flex flex-col justify-start gap-4'>
          <h2 className='text-4x; font-palanquin font-bold'>popular products</h2>
          <p>Experience top-notch quality and style with our sought-after selection. Discover a world of comfort design, and value</p>
        </div>
    </section>
  )
}

export default PopularPorducts
