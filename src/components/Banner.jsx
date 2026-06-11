import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 px-6 md:px-10 lg:px-14 pt-14 bg-linear-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-auto rounded-2xl overflow-hidden'>
       
        
        <div>
            <h2 className='text-3xl sm:text-4xl font-medium'>Do You Want To Rent A Car?</h2>
            <p className='mt-2' >Get the best deals on car rentals today!</p>
            <p className='max-w-md'>We take care of insurance for you, driver verification and source payment so you don't have to worry.</p>
            <button className=' px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4  cursor-pointer  '>List Your Car  </button>
        </div>
            <img src={assets.banner_car_image} alt="Car" className='w-full md:w-1/2 max-h-56 mt-10 md:mt-0 object-contain' />

    </div>
  )
}

export default Banner