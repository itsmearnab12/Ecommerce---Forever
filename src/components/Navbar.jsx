import React from 'react'
import logo from "../assets/logo.jpg";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 front-medium'>
        <img src={logo} className='w-36' alt="" />

        <ul className='hidden sm:flex gap-5 text-sm text-gary-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>

        <div className='flex item-center gap-6'>
            <IoIosSearch className='w-5 h-5 cursor-pointer' />

            <div className='group relative'>
                <CgProfile  className='w-5 h-5 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar