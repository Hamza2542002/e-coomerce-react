import React from 'react'

export default function ProductCard({image , name , price , delay}) {
  return (
    <div data-aos-delay={delay} data-aos="fade-up"  className="">
      <div className='relative group flex justify-center items-center mb-5 rounded-xl bg-gray-200 dark:bg-gray-50 bg-opacity-50 p-5 aspect-[1/1]'>
        <img src="src/assets/HEADPHONE.png" alt="Product" className="w-3/4 h-3/4 group-hover:blur-sm" />
        <div className='transition-all duration-300 w-full h-full rounded-[inherit] flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent hover:bg-gray-100 hover:bg-opacity-20'>
          <button className="text-white py-2 px-10 invisible group-hover:visible rounded-full bg-primary hover:scale-105 transition-transform duration-300">Buy Now</button>
        </div>
      </div>
      <h2 className="text font-bold text my-2 dark:text-white">Product Name</h2>
      <p className="text font-bold dark:text-white">120$</p>
    </div>
  )
}
