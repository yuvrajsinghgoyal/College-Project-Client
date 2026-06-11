import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'

const currency = import.meta.env.VITE_CURRENCY

const AddCar = () => {

  

  const onSubmitHandler = async (e)=>{
    e.preventDefault()
  }
  const [image ,setImage]=useState(null)
  const [car ,setCar]=useState({
  
    brand:"",
    model:'',
    year:0,
    pricePerDay:0,
    category:'',
    transmission:'',
    fuel_type:0,
    seating_capacity:0,
    location:0,
    description:'',

  })
  return (
    <div className=' px-4  flex-1 py-10 md:px-10  '>

          <Title title='add new car' subtitle=' Get the best deals on car rentals today!We take care of insurance for you, driver verification and '/>
          <form action="" className='flex flex-col gap-5 text-gray-500  text-sm mt-6 max-w-xl   '   onSubmit={onSubmitHandler}>


            {/* Car image  */}
             <div className='flex items-center gap-2 w-full' >
                  <label htmlFor="car-image"> 
                      <img src={image ?URL.createObjectURL(image): assets.upload_icon} className='h-14 rounded cursor-pointer ' alt="" />
                      <input type="file" id='car-image' accept='image/*' hidden  onChange={e=>setImage(e.target.files[0])}/>
                    </label>
                    <p className=' text-sm text-gray-500  '>Please upload a picture of your car </p>
             </div>

            {/* car band and model */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className=' flex flex-col w-full '>
                <label className='text-lg'> Brand</label>
                  <input type="text" placeholder='eg BMW , Mahindra'  required className=' px-3 py-2 mt-1  border border-borderColor rounded-md outline-none  ' value={car.brand} onChange={e=>setCar({...car, brand:e.target.value})}/>
              </div>


              <div className=' flex flex-col w-full '>
                <label className='text-lg'> Model</label>
                  <input type="text" placeholder='eg XUV, Q7'  required className=' px-3 py-2 mt-1  border border-borderColor rounded-md outline-none  ' value={car.model} onChange={e=>setCar({...car, model:e.target.value})}/>
              </div>
             
            </div>

            {/* Car yearr price category  */}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                <div className=' flex flex-col w-full '>
                    <label className='text-lg'> Year</label>
                    <input type="number" placeholder='eg 2025'  required className=' px-3 py-2 mt-1  border border-borderColor rounded-md outline-none  ' value={car.year} onChange={e=>setCar({...car, year:e.target.value})}/>
              </div>

                <div className=' flex flex-col w-full '>
                    <label className='text-lg'> Daily Price {currency}</label>
                    <input type="number" placeholder='eg 200$'  required className=' px-3 py-2 mt-1  border border-borderColor rounded-md outline-none  ' value={car.pricePerDay} onChange={e=>setCar({...car, pricePerDay:e.target.value})}/>
              </div>

                <div className=' flex flex-col w-full '>
                    <label className='text-lg'> catagory</label>
                    <select name="" id="" onChange={e=>setCar({...car,category:e.target.value })} value={car.category} className=' w-full px-3 py-2 mt-1 border border-borderColor  rounded-md  outline-none '>
                      <option value="">Select a catagroy</option>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="Van">Van</option>
                    </select>
              </div>
            </div>
              {/* Car transmission and fuel */}
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2' >

                  <div className=' flex flex-col w-full '>
                      <label className='text-lg'> Transmission</label>
                      <select name="" id="" onChange={e=>setCar({...car,transmission:e.target.value })} value={car.transmission} className=' w-full px-3 py-2 mt-1 border border-borderColor  rounded-md  outline-none '>
                        <option value="">Select  Transmission type</option>
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                        <option value="Semi-Automatic">Semi-Automatic</option>
                      </select>
                </div>

                  <div className=' flex flex-col w-full  '>
                      <label className='text-lg'> Fuel Type</label>
                      <select name="" id="" onChange={e=>setCar({...car,fuel_type:e.target.value })} value={car.fuel_type} className=' w-full px-3 py-2 mt-1 border border-borderColor  rounded-md  outline-none '>
                        <option value="">Select  fuel type</option>
                        <option value="Desile">Desile</option>
                        <option value="Gas">Gas</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Electric">Electric</option>
                      </select>
                </div>

                <div className=' flex flex-col w-full '>
                    <label className='text-lg'> Seating Capacity </label>
                    <input type="number" placeholder='eg 5'  required className=' px-3 py-2 mt-1  border border-borderColor rounded-md outline-none  ' value={car.seating_capacity} onChange={e=>setCar({...car, seating_capacity:e.target.value})}/>
              </div>

                  

              </div>


              {/* Car Location  */}
              <div className=' flex flex-col w-full'>

                <label className='text-lg'> Location</label>
                      <select name="" id="" onChange={e=>setCar({...car,location:e.target.value })} value={car.location} className=' w-full px-3 py-2 mt-1 border border-borderColor  rounded-md  outline-none '>
                        <option value="">Select  Location</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bhopal">Bhopal</option>
                        <option value="Indore">Indore</option>
                        <option value="Banglore">Banglore</option>
                      </select>

              </div>
              {/* Car Description */}

              <div className=' flex flex-col w-full '>
                    <label className='text-lg'> Description</label>
                    <textarea rows={5} type="text"  placeholder='eg New Car good driver'  required className=' px-3 py-2 mt-1  border border-borderColor rounded-md outline-none  ' value={car.description} onChange={e=>setCar({...car, description:e.target.value})}> </textarea>
              </div>

              <button className=' flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium  w-max  cursor-pointer ' ><img src={assets.tick_icon} alt="" />List Your Car</button>
          </form>

    </div>
  )
}

export default AddCar