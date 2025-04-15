import React from 'react'
import { FaInstagram, FaLinkedin, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'
import { ImFacebook2 } from 'react-icons/im'

export default function Footer() {
  return (
    <footer className=''>
      <div className="container flex flex-wrap justify-between items-start gap-4">
        <div className="flex flex-col items-start justify-start py-10 md:w-[25%] w-[100%]">
          <h2 className='text-3xl font-semibold text-start text-secondary'>ESHOP</h2>
          <p className='text-md text-start text-gray-600 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum.</p>
          <form className='mt-6 flex flex-col items-start justify-center gap-4'>
            <input type="email" placeholder='Enter your email' className='border  outline-none border-gray-300 rounded-full px-4 py-2 md:w-[80] w-[100%]' />
            <button type="submit" className='bg-primary text-white rounded-full px-10 py-2'>Subscribe</button>
          </form>
        </div>
        <div className="flex flex-col justify-center mt-10">
          <h3 className='text-xl font-semibold'>Important Links</h3>
          <ul className="flex flex-col items-start gap-4 mt-4">
            <li><a href="#" className='text-gray-600 hover:text-gray-700'>Home</a></li>
            <li><a href="#" className='text-gray-600 hover:text-gray-700'>About</a></li>
            <li><a href="#" className='text-gray-600 hover:text-gray-700'>Contact</a></li>
            <li><a href="#" className='text-gray-600 hover:text-gray-700'>Blog</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-center mt-10">
          <h3 className='text-xl font-semibold'>Quick Links</h3>
          <ul className="flex flex-col items-start gap-4 mt-4">
            <li><a href="#" className='text-gray-600 hover:text-gray-700'>Home</a></li>
            <li><a href="#" className='text-gray-600 hover:text-gray-700'>About</a></li>
            <li><a href="#" className='text-gray-600 hover:text-gray-700'>Contact</a></li>
            <li><a href="#" className='text-gray-600 hover:text-gray-700'>Blog</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-center gap-2 mt-10">
          <h3 className='text-xl font-semibold'>Address</h3>
          <p className='text-gray-800 mt-4 flex items-center gap-2'><FaLocationArrow />Noida , Uttar Pradesh</p>
          <p className='text-gray-800 mt-4 flex items-center gap-2'><FaPhoneAlt />+91 1234567890</p>
          <ul className="flex items-start justify-start gap-4 mt-4">
            <li><a href="#" className='text-gray-800 hover:text-secondary text-2xl'><FaInstagram /></a></li>
            <li><a href="#" className='text-gray-800 hover:text-secondary text-2xl'><ImFacebook2 /></a></li>
            <li><a href="#" className='text-gray-800 hover:text-secondary text-2xl'><FaLinkedin /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
