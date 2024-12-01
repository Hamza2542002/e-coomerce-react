import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { IoIosPlay, IoMdSearch } from 'react-icons/io'

const Navbar = () => {
  const [theme , setTheme] = useState('light')

  useEffect(
    () => {
      document.documentElement.className = theme
    },[theme]
  )

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-100 relative z-40'>
      <div className='py-4'>
        <div className="container flex justify-between items-center">
          <div className='flex gap-4 items-center'>
            <a href="" 
            className='text-2xl sm:text-3xl text-primary uppercase font-semibold tracking-widest'
            >Eshop</a>
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-4 text-start'>
                <li><a href="#" className='text-gray-500 hover:text-gray-900 font-semibold px-4 dark:hover:text-white duration-200' >Home</a></li>
                <li><a href="#" className='text-gray-500 hover:text-gray-900 font-semibold px-4 dark:hover:text-white duration-200'>Shop</a></li>
                <li><a href="#" className='text-gray-500 hover:text-gray-900 font-semibold px-4 dark:hover:text-white duration-200'>About</a></li>
                <li><a href="#" className='text-gray-500 hover:text-gray-900 font-semibold px-4 dark:hover:text-white duration-200'>Blogs</a></li>
                <li className='text-gray-500  relative group font-semibold px-4 duration-200'>
                  <a href="#"  className='flex items-center gap-1 hover:text-gray-900 dark:hover:text-white relative z-10'> Quik Links <IoIosPlay className='group-hover:-rotate-90 rotate-90 duration-200' /></a>
                  <ul className='bg-white dark:bg-gray-900 px-2 py-2 rounded-lg text-start opacity-0 absolute top-full -translate-y-12 w-52 left-0 group-hover:block group-hover:opacity-100 hover:opacity-100 duration-200'>
                    <li className='text-gray-500 cursor-pointer  hover:bg-[#f42c3733] font-semibold px-2 py-2 dark:hover:text-white duration-200 rounded-lg my-1 opacity-0'>Trending Products</li>
                    <li className='text-gray-500 cursor-pointer  hover:bg-[#f42c3733] font-semibold px-2 py-2 dark:hover:text-white duration-200 rounded-lg my-1'>Trending Products</li>
                    <li className='text-gray-500 cursor-pointer  hover:bg-[#f42c3733] font-semibold px-2 py-2 dark:hover:text-white duration-200 rounded-lg my-1'>Best Selling</li>
                    <li className='text-gray-500 cursor-pointer  hover:bg-[#f42c3733] font-semibold px-2 py-2 dark:hover:text-white duration-200 rounded-lg my-1'>Top Rated</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <div className="search-section relative flex items-center gap-2">
              <input type="checkbox" className='peer' name="" hidden id="toggle-search" />
              <input type="text" className='peer-checked:inline-block hidden lg:block rounded-full w-32 lg:w-auto  px-4 py-1 ring-gray-500 ring-1' placeholder='Search'/>
              <label for='toggle-search' className='inline-block lg:hidden peer-checked:hiddeen right-0 text-gray-500 dark:bg-gray-900 hover:text-primary font-bold'><IoMdSearch /></label>
            </div>
            <a href=""><FaShoppingCart className='block right-0 text-gray-500 dark:bg-gray-900 font-bold' /></a>
            <button>
              <img onClick={()=> setTheme('light')} className='w-12 hidden dark:block duration-75' src="../public/dark-mode-button-85jBkhOs.png" alt="" />
              <img onClick={()=> setTheme('dark')} className='w-12 block dark:hidden duration-75' src="../public/light-mode-button-X4OXHFfW.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar