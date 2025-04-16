import React from 'react'
import SectionHeader from '../Shared/SectionHeader'
import ProductCard from './ProductCard'

export default function ProductSection () {
  return (
    <div className='container'>
      <SectionHeader title="Our Products" subtitle="Explore Our Products" />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-16'>
        <ProductCard delay={0} />
        <ProductCard delay={100} />
        <ProductCard delay={300} />
        <ProductCard delay={600} />
        <ProductCard delay={900}/>
        <ProductCard delay={1200}/>
        <ProductCard delay={1500}/>
        <ProductCard delay={1800}/>
      </div>
    </div>
  )
}
