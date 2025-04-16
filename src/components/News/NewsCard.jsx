import React from 'react'

export default function NewsCard({img , title , date , description, delay}) {
  return (
    <div data-aos="fade-up" data-aos-delay = {delay} className='card '>
      <div className='overflow-hidden rounded-xl'>
        <img src="../../src/assets/blog-2.jpg" alt="News" className='w-full h-1/2 rounded-xl hover:scale-105 duration-300' />
      </div>
      <div className='py-5'>
        <h2 className='text-sm font-semibold text-gray-500'>Jan 20, 2024 by Dilshad</h2>
        <p className='text font-bold my-2 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        <p className='text-sm font-semibold text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
      </div>
    </div>
  )
}
