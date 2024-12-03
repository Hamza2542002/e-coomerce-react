import React from 'react'
import { FaCarSide, FaCheckCircle, FaWallet } from 'react-icons/fa'
import { FaHeadphonesSimple } from 'react-icons/fa6'

function Category() {
  return (
    <div className='container py-4 flex flex-col gap-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4'>
        <div className='overflow-hidden bg-gradient-to-b from-black to-[#434343] rounded-2xl p-3 px-5 relative flex items-center h-80'>
          <div className="text relative flex flex-col gap-0  mt-4">
            <p className='text-gray-300'>Enjoy</p>
            <p className='text-white font-semibold text-xl'>With</p>
            <p className='text-gray-300 opacity-50 font-bold text-5xl'>Earphone</p>
            <button className='text-white bg-secondary px-8 py-2 rounded-full mt-4 w-fit hover:scale-105 cursor-pointer relative z-10 duration-150'>Browse</button>
          </div>
          <img src="../../public/earphone.png" alt="" className='absolute right-0 -bottom-0 w-[320px] z-0'/>
        </div>
        <div className='overflow-hidden bg-gradient-to-b from-brandYellow to-brandYellow/90 rounded-2xl p-3 px-5 relative flex items-center h-80'>
          <div className="text relative flex flex-col gap-0 mt-6">
            <p className='text-white opacity-50'>Enjoy</p>
            <p className='text-white font-semibold text-xl'>With</p>
            <p className='text-white opacity-50 font-bold text-5xl'>Gadget</p>
            <button className='text-brandYellow bg-white px-8 py-2 rounded-full mt-4 w-fit hover:scale-105 cursor-pointer relative z-10 duration-200'>Browse</button>
          </div>
          <img src="../../public/watch.png" alt="" className='absolute -right-10 top-1/2 -translate-y-1/2 w-[320px] z-0'/>
        </div>  
        <div className='overflow-hidden bg-gradient-to-b from-secondary to-secondary/90 rounded-2xl p-3 px-5 relative flex items-center h-80 sm:col-span-2'>
          <div className="text relative flex flex-col gap-0 mt-6">
            <p className='text-white opacity-50'>Enjoy</p>
            <p className='text-white font-semibold text-xl'>With</p>
            <p className='text-white opacity-50 font-bold text-5xl'>Laptop</p>
            <button className='text-secondary bg-white px-8 py-2 rounded-full mt-4 w-fit hover:scale-105 cursor-pointer relative z-10 duration-200'>Browse</button>
          </div>
          <img src="../../public/LAPTOPS.png" alt="" className='absolute -right-0 scale-90 top-1/2 -translate-y-1/2 w-[250px] sm:w-[320px] z-0'/>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4'>
        <div className='overflow-hidden bg-gradient-to-b from-gray-300 to-gray-200/90 rounded-2xl p-3 px-5 relative flex items-center h-80  sm:col-span-2'>
          <div className="text relative flex flex-col gap-0">
            <p className='text-white opacity-50'>Enjoy</p>
            <p className='text-white font-semibold text-xl'>With</p>
            <p className='text-white opacity-50 font-bold text-5xl'>Gaming</p>
            <button className='text-white bg-secondary px-8 py-2 rounded-full mt-4 w-fit hover:scale-105 cursor-pointer relative z-10 duration-150'>Browse</button>
          </div>
          <img src="../../public/gaming.png" alt="" className='absolute right-0 bottom-0 w-[300px] sm:w-[320px] z-0 scale-75'/>
        </div>
        <div className='overflow-hidden bg-gradient-to-b from-brandGreen to-brandGreen/90 rounded-2xl p-3 px-5 relative flex items-center h-80'>
          <div className="text relative flex flex-col gap-0 mt-6">
            <p className='text-white opacity-50'>Enjoy</p>
            <p className='text-white font-semibold text-xl'>With</p>
            <p className='text-white opacity-50 font-bold text-5xl'>Virtuals</p>
            <button className='text-brandYellow bg-white px-8 py-2 rounded-full mt-4 w-fit hover:scale-105 cursor-pointer relative z-10 duration-200'>Browse</button>
          </div>
          <img src="../../public/VIRTUALS.png" alt="" className='absolute bottom-0 right-0-translate-y-1/2 w-[320px] z-0'/>
        </div>
        <div className='overflow-hidden bg-gradient-to-b from-brandBlue to-brandBlue/90 rounded-2xl p-3 px-5 relative flex items-center h-80'>
          <div className="text relative flex flex-col gap-0 mt-6">
            <p className='text-white opacity-50'>Enjoy</p>
            <p className='text-white font-semibold text-xl'>With</p>
            <p className='text-white opacity-50 font-bold text-5xl'>Laptop</p>
            <button className='text-secondary bg-white px-8 py-2 rounded-full mt-4 w-fit hover:scale-105 cursor-pointer relative z-10 duration-200'>Browse</button>
          </div>
          <img src="../../public/speaker.png" alt="" className='absolute  right-0 bottom-0  w-[200px] z-0'/>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
        <div className='flex gap-5 items-center'>
          <div className="icon"><FaCarSide className='text-5xl text-secondary' /></div>
          <div className="">
            <h1 className='font-semibold dark:text-white'>Free Shipping</h1>
            <p className='opacity-50 font-thin text-white'>Free Shipping On All Order</p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div className="icon"><FaCheckCircle className='text-5xl text-secondary' /></div>
          <div className="">
            <h1 className='font-semibold dark:text-white'>Free Shipping</h1>
            <p className='opacity-50 font-thin text-white'>Free Shipping On All Order</p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div className="icon"><FaWallet className='text-5xl text-secondary' /></div>
          <div className="">
            <h1 className='font-semibold dark:text-white'>Free Shipping</h1>
            <p className='opacity-50 font-thin text-white'>Free Shipping On All Order</p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div className="icon"><FaHeadphonesSimple className='text-5xl text-secondary' /></div>
          <div className="">
            <h1 className='font-semibold dark:text-white'>Free Shipping</h1>
            <p className='opacity-50 font-thin text-white'>Free Shipping On All Order</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category