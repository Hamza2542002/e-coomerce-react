import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
export default function App() {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <Navbar />
      <Hero />
    </div>
  )
}

