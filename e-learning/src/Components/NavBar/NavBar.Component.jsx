import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { FiBookmark } from "react-icons/fi";


const Navsm = () =>{
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
    return <>
      <div className='text-gray-700 flex items-center justify-between'>
        <div className='text-bold text-3xl'>
            <h1 className='text-white'>E-Learning</h1>
        </div>
       <div className="relative">
      <button
        className="text-white font-bold text-2xl py-4 pl-4 pr-6"
        onClick={toggleDropdown}
      >
        <BiMenu className='text-3xl'/>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg">
          {/* Dropdown content */}
           <ul className="py-2 w-80 bg-gray-300 rounded-md ">
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 items-center cursor-pointer">
             <Link to="/"className='text-xl' >Home</Link>
             <hr />
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 items-center cursor-pointer">
             <Link to="/freeContent"className='text-xl' >Topic-Wise</Link>
             <hr />
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 items-center cursor-pointer">
             <Link to="/Courses"className='text-xl' >Courses</Link>
             <hr />
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
               <button className="text-white bg-red-400 w-30  h-8 text-2xl rounded-md">
          <span className="text-white  flex items-center  ml-3 mr-2">
           About
          </span>
    </button>
      
            </li>
          </ul>
        </div>
      )}
    </div>

        </div>
    </>
}


const NavLg = () =>{
  return <>
     <div className="container flex mx-auto px-4 items-center justify-between">
  <div className="flex items-center w-1/2">
    <div className="w-50 h-50">
      <h1 className="text-white font-bold text-3xl">E-Learning</h1>
    </div>
    <div className="w-10 h-10 flex items-center">
      <Link to="/" className="text-white font-semibold text-xl ">
        Home
      </Link>
      <Link to="/freeContent" className="text-white font-semibold text-xl ml-20 ">
        Topic_Wise
      </Link>
      <Link to="/Courses" className="text-white font-semibold text-xl ml-20">
        Courses
      </Link>
    </div>
  </div>
    <div className='flex ml-auto'>
        <button className="text-white bg-red-400 w-40  h-10 text-2xl rounded-md">
          <span className="text-white font-bold flex items-center gap-2 ml-5 hover:text-white">
           <FiBookmark />  About
          </span>
    </button>
    </div>
</div>
  </>
}

//Main
const NavBar = () => {
  return (
    <nav className='bg-darkBackground-700 border-b-2 lg:border-b-0  p-4'>
    <div className='lg:hidden'>
      <Navsm />
    </div>
   
     <div className='hidden w-full lg:flex '>
      <NavLg />
    </div>
   </nav>
  )
}

export default NavBar