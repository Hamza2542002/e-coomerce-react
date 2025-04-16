import React from 'react'

export default function SectionHeader({title, subtitle }) {
  return (
    <div className='mt-5 mb-16 text-center'>
      <h1 className='font-bold text-4xl mb-3 dark:text-white'>{title}</h1>
      <p className='text-md text-gray-400'>{subtitle}</p>
    </div>
  )
}
