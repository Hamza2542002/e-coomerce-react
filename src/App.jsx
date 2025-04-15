import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Footer from './components/Footer/Footer'
export default function App() {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <Navbar />
      <Hero />
      <Category />
      <Footer />
    </div>
  )
}

