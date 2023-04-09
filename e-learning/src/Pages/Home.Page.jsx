import React from 'react';
import DefaultLayoutHoc from '../layouts/Default.Layout';
import Image from '../Components/Images/pngtree-cartoon-flat-girl-character-design-free-download-image_1317099.jpg';
import Image1 from '../Components/Images/12.png'

const HomePage = () => {
  return (
    <>
      
      <div className="flex justify-center items-center bg-gray-100 ">
        <img src={Image} alt="girl" className='my-0 w-80 h-60 opacity-80 transition-opacity duration-1000 ease-in-out hover:opacity-100" hidden lg:block' />
      </div>
      <div className=" flex justify-center items-center bg-gray-100 ">
        <img src={Image1} alt="girl" className='w-1/2 h-auto hidden lg:block'/>
      </div>
     

      <div className=''>
      <div className=" flex justify-center items-center bg-gray-100 ">
        <img src={Image} alt="girl" className='my-0 w-60 h-60 hidden md:block' />
      </div>
      <div className=" flex justify-center items-center bg-gray-100 ">
        <img src={Image1} alt="girl" className='w-90 h-50 hidden md:block'/>
      </div>
      </div>

      <div className='md:hidden'>
      <div className=" flex justify-center items-center bg-gray-100 ">
        <img src={Image} alt="girl" className='my-0 w-60 h-60 ' />
      </div>
      <div className=" flex justify-center items-center bg-gray-100 ">
        <img src={Image1} alt="girl" className='w-100 h-50 '/>
      </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
