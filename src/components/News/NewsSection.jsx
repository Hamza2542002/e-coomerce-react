import React from 'react'
import SectionHeader from '../Shared/SectionHeader'
import NewsCard from './NewsCard'

export default function NewsSection() {
  return (
    <div className='container mb-20'>
      <SectionHeader title="Recent News" subtitle="Explore Our Blogs" />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <NewsCard delay={0} />
        <NewsCard delay={200} />
        <NewsCard delay={400} />
      </div>
    </div>
  )
}
