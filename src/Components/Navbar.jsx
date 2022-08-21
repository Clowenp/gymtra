import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai';
import { CgGym } from 'react-icons/cg'
import { GiGymBag } from 'react-icons/gi'
import { GrInProgress } from 'react-icons/gr'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {BsFillCalendarCheckFill} from 'react-icons/bs'

const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-4'>
          <span className='font-extrabold'> Gym </span> Tra
        </h1>
      </div>

      {/* Search Input */}
      <div className='flex items-center bg-gray-200 px-2 w-[200px] rounded-full sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='w-full focus:outline-none bg-transparent p-2'
          type='text'
          placeholder='Search Exercises'
        />
      </div>
      {/* Workout Routine */}
      <button className='items-center hidden bg-black text-white md:flex  py-2 rounded-full'>
        <CgGym size={20} className='mr-2' /> Workout
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='z-10 bg-black/80 fixed h-screen top-0 w-full left-0'></div> : ''}
      

      {/* Side menu */}
      <div className={nav ? 'w-[300px] fixed top-0 left-0 h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
        <span className='font-bold'>Gymtra</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><CgGym size={25} className='mr-4' /> Exercises </li>
                <li className='text-xl py-4 flex'><GiGymBag size={25} className='mr-4' /> Today's Workout</li>
                <li className='text-xl py-4 flex'><GrInProgress size={25} className='mr-4' /> Progress</li>
                <li className='text-xl py-4 flex'><BsFillCalendarCheckFill size={25} className='mr-4' /> Calendar </li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Friends</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Contact Us </li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;