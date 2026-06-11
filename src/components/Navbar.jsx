// U

import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Navbar = ({setShowLogin}) => {
    const location = useLocation();
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('vehicleRentalUser') || 'null');

    const handleLogout = () => {
        localStorage.removeItem('vehicleRentalToken');
        localStorage.removeItem('vehicleRentalUser');
        navigate('/');
    };
  return (
    <div className={`flex items-center justify-between px-6 md:px-16  lg:px-24 xl:px-32  py-4 text-gray-600 border-b border-borderColor relative transition-all ${location.pathname==='/'&& "bg-light"} ` } >
        <Link to='/'>
            <img src={assets.logo}alt="" className="h-8" />
        </Link>
        <div className={`fixed top-16 right-0 h-screen w-full bg-white border-t border-borderColor p-6 flex flex-col items-start gap-4 transition-transform duration-300 z-50 sm:static sm:h-auto sm:w-auto sm:bg-transparent sm:border-0 sm:p-0 sm:flex-row sm:items-center sm:gap-8 ${location.pathname==='/' ? "bg-light" : "bg-white"} ${open ? "translate-x-0" : "translate-x-full"} sm:translate-x-0`}
        >
            {menuLinks.map((link, index)=>(
                <Link key={index} to={link.path}>
                    {link.name}
                </Link>
            ))}


            <div className='hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56'>
                <input type="text" className=' py-1.5 w-full bg-transparent outline-none placeholder:gray-500  ' placeholder='Search Products' />
                <img src={assets.search_icon} alt="Search" />
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6'>
                {user ? (
                    <>
                        <button onClick={() => navigate(user.role === 'owner' ? '/owner' : '/my-bookings')} className='cursor-pointer'>Dashboard</button>
                        <span className='text-sm text-gray-500'>Hi, {user.name}</span>
                        <button onClick={handleLogout} className='cursor-pointer px-6 py-2 border border-gray-300 rounded-lg'>Logout</button>
                    </>
                ) : (
                    <button onClick={()=>setShowLogin(true)} className='cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg'>Login</button>
                )}
            </div>

        </div>
        <button className='sm:hidden cursor-pointer ' aria-level="Menu" onClick={()=>setOpen (!open)}>
            <img src={open ? assets.close_icon : assets.menu_icon } alt="menu" />
        </button>
    </div>
  )
}

export default Navbar