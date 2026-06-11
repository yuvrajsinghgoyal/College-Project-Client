import React, { useEffect, useState } from 'react'
import Title from '../../components/owner/Title'
import { dummyMyBookingsData } from '../../assets/assets'


const currency = import.meta.env.VITE_CURRENCY


const ManageBookings = () => {

  const [bookings, setBookings]=useState([])

  const fetchOwnerBookings = async ()=>{
    setBookings(dummyMyBookingsData);
  }

  useEffect(()=>{
    fetchOwnerBookings();
  },[])

  return (

    <div className='px-4 pt-10 md:px-10 w-full'>

      <Title title="Manage Your Bookings" subtitle="Manage your car Booking and get to rent"/>

      <div className=' max-w-3xl  w-full rounded:md overflow-hidden border border-borderColor mt-6 '>
        <table className=' w-full border-collapse text-left  text-sm text-gray-600 '>
          <thead>
              <tr>
                <th className='p-3 font-medium'>Car</th>
                <th className='p-3 font-medium max-md:hidden'>Date Range</th>
                <th className='p-3 font-medium'>Total</th>
                <th className='p-3 font-medium'>Paymaent</th>
                <th className='p-3 font-medium max-md:hidden'>Actions</th>
              </tr>
          </thead>
          <tbody>
            {bookings.map((booking,index)=>(
              <tr className=' border-t border-borderColor  text-gray-500' key={index}>
                <td className='p-3 flex items-center gap-3 '>
                  <img src={booking.car.image} className='w-12 h-12 aspect-square rounded-md object-cover  ' alt="" />
                  <p>{booking.car.brad} {booking.car.model}</p>
                </td>

                <td className='p-3 max-md:hidden'>
                  {booking.pickupDate.split("T")[0]} to {booking.returnDate.split("T")[0]}
                </td>
                <td className='p-3'>{currency} {booking.price}</td>

                <td className='p-3 max-md:hidden'> 
                  <span className=' bg-gray-100 px-3 py-1 rounded-full text-xs'>Offline</span>
                </td>

                <td className='p-3'>
                  {booking.status=="pending" ? (
                    <select name="" value={booking.status} className=' px-2 py-1.5 mt-1 text-gray-500 border border-borderColor rounded-md outline-none  '>
                      <option value="pending">Pending</option>
                      <option value="cancle">Cancle</option>
                      <option value="conform">Conform</option>
                    </select>
                  ):(
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold  ${booking.status=='confirmed'? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"}`}>{booking.status}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
          


          

  )
}

export default ManageBookings