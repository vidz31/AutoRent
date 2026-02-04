import React from 'react'
import {dummyUserData} from '../../assets/assets';
import assets from '../../assets/assets';
import { Link } from 'react-router-dom';

const NavbarOwner = () => {

    const user = dummyUserData;

  return (
    <div className='flex items-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b border-borderColor relative transition-all'>
        <Link to="/" className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
            <img src={assets.logo} className='h-12 w-12 object-contain' alt="UrbanRent Logo" />
            <span className='text-lg font-semibold text-[#2F6FA7] hidden sm:inline'>UrbanRent</span>
        </Link>
        <p>Welcome, {user.name || "Owner"}</p>
        
    </div>
  )
}

export default NavbarOwner
