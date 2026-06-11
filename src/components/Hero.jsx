import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {
  const[pickupLocation, setPickupLocation] = useState('')
  const [a, setA]=useState(' Hello ')  
  return (
    <div className="min-h-screen relative  flex flex-col items-center justify-center gap-14 text-center mx-auto px-4 sm:px-6 lg:px-8" >
      
      <h1 className="  text-4xl md:text-5xl font-semibold "> {a} ,Welcome to Our Car Rental Service</h1>

      <form action="" className=' flex flex-col md:flex-row items-center justify-center p-6 rounded-lg md:rounded-full w-full max-w-xl md:max-w-3xl bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)] mx-auto '  >

        <div className='flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full'>

        <div className='flex flex-col items-center gap-2'>
          <select required value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)} className='w-full p-2 border border-gray-300 rounded-md text-sm'>  
            <option value="">Pickup Location</option>
            {cityList.map((city)=>(<option key={city} value={city}>{city}</option>))}
          </select>
          <p className='  text-gray-500 text-sm px-1'  >{ pickupLocation? pickupLocation : "Please select a pickup location "} </p>
        </div>

        <div className='flex flex-col items-center gap-2 w-full md:w-auto'>
            <label htmlFor="pickup-date" className='text-sm font-medium'>Pickup Date</label>
            <input type="date" id='pickup-date' min={new Date().toISOString().split('T')[0]} className='w-full p-2 border border-gray-300 rounded-md text-sm' required />
        </div>

        <div className='flex flex-col items-center gap-2 w-full md:w-auto'>
            <label htmlFor="return-date" className='text-sm font-medium'>Return Date</label>
            <input type="date" id='return-date'  className='w-full p-2 border border-gray-300 rounded-md text-sm' required />
        </div>

        <button onClick={(a)=>{setA("Hey")}}  className=' flex items-center justify-center gap-1 px-9 py-3 mt-4 md:mt-0 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer'>
          <img src={assets.search_icon} alt="Search" className='brightness-300' />
          Search
          </button>

      </div>

      </form>

      <img src={assets.main_car} alt="car"  className='max-h-64 w-full object-contain' />

      

    </div>
  )
}

export default Hero 