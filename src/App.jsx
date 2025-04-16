import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Footer from './components/Footer/Footer'
import Offer from './components/Offers/Offer'
import ProductSection from './components/Product/ProductSection'
import NewsSection from './components/News/NewsSection'
import Sponsers from './components/Sponsers/Sponsers'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function App() {
  // Initialize AOS (Animate On Scroll) library
  React.useEffect(() => {
    Aos.init({ 
      duration: 1000,
      delay: 100,
      offset: 100,
      easing: 'ease-in-out',
      mirror: false,
      disable: 'mobile',
    })
    // Clean up AOS on component unmount
    return () => {
      Aos.refresh()
    }
  }, [])
  // Set the document title

  return (
    <div className='bg-white dark:bg-gray-900 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Offer />
      <ProductSection />
      <Offer />
      <NewsSection />
      <Sponsers />
      <Footer />
    </div>
  )
}

