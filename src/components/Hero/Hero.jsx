import React from 'react'
import Slider from 'react-slick';

const HeroData = [
  {
    id:1,
    title: 'Beats Solo',
    subTitle: 'Wirless',
    Name:"HEADPHONE",
  },
  {
    id:2,
    title: 'Beats Solo',
    subTitle: 'Branded',
    Name:"LAPTOPS",
  },
  {
    id:3,
    title: 'Beats Solo',
    subTitle: 'Branded',
    Name:"VIRTUALS",
  },
]

const Hero = () => {
  var settings = {
    infinite: true,
    speed: 600,
    // autoPlayspeed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className='container py-5'>
      <div className="bg-gradient-to-r from-gray-300 to-gray-50 dark:from-gray-900 dark:to-gray-700 rounded-3xl py-10 px-10">
        <Slider {...settings}>
          {
            HeroData.map((data)=>
              <div>
                <div className='flex justify-center items-center min-h-[500px]'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 justify-between sm:justify-center'>
                    <div className='flex flex-col items-center sm:justify-start sm:items-start gap-4 relative order-2 sm:order-1'>
                      <h3 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='font-bold text-2xl text-gray-900 dark:text-white'>{data.title}</h3>
                      <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='font-bold text-4xl sm:text-7xl text-gray-900 dark:text-white'>{data.subTitle}</h1>
                      <h1 data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className='font-bold text-4xl sm:text-7xl lg:text-9xl  text-white dark:text-black dark:text-opacity-35'>{data.Name}</h1>
                      <button data-aos="fade-up" data-aos-offset="0" data-aos-duration="500" data-aos-dalay="300" className='px-8 py-2 rounded-full bg-primary text-white duration-200 hover:scale-105 translate-x-2'>Shop By Category</button>
                    </div>
                    <div data-aos="zoom-in" data-aos-once="true" className="order-1 sm:order-2 relative z-10 px-10">
                      <img src={`src/assets/${data.Name}.png`} alt="" 
                      className='w-[350px] h-[183px]  sm:h-[350px] sm:scale-105 lg:scale-150 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]' />
                    </div>
                  </div>
                </div> 
              </div>
            )
          }
        </Slider>
      </div>
    </div>
  )
}

export default Hero