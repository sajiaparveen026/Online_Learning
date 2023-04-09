import React from 'react'
import { BiShareAlt } from 'react-icons/bi'


const Navsm = () =>{
    return <>
      <div className='text-gray-700 flex items-center justify-between'>
        <div className='text-bold text-3xl'>
            <h1 className='text-white'>E-Learning</h1>
        </div>
        <div className='w-8 h-8'>
      <BiShareAlt className='w-full h-full text-white' />
    </div>

        </div>
    </>
}
const CourseNav = () => {
  return <>
   <nav className='bg-darkBackground-700 border-b-2 lg:border-b-0  p-4'>
      <div className='md:hidden'>
        <Navsm />
      </div>
     </nav>
  </>
}

export default CourseNav