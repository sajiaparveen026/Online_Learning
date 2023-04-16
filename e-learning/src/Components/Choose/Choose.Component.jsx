import React from 'react';
import {ImHappy2,ImTongue2,ImWink2,ImCool2,ImConfused2} from 'react-icons/im';

const Choose = () => {
  return (
    <div className='mt-10 p-20 bg-slate-50'>
      <div className='flex items-center justify-center'>
        <h1 className='text-4xl font-bold text-yellow-950 font-serif'>
          Why Choose Us?
        </h1>
      </div>
      <div className='flex items-start pl-14 pt-8'>
        <ImHappy2 className='text-2xl mt-1 mr-4' />
        <span className='text-xl font-mono text-gray-600'>
           Get to work on live hands-on projects.
        </span>
      </div>
      <div className='flex items-start pl-14 pt-4'>
        <ImTongue2 className='text-2xl mt-1 mr-4' />
        <h1 className='text-xl font-mono text-gray-600'>
           Live Doubt Session with the mentors.
        </h1>
      </div>
      <div className='flex items-start pl-14 pt-4'>
        <ImWink2 className='text-2xl mt-1 mr-4' />
        <h1 className='text-xl font-mono text-gray-600'>
          1:1 Membership Experience.
        </h1>
      </div>
      <div className='flex items-start pl-14 pt-4'>
        <ImCool2 className='text-2xl mt-1 mr-4' />
        <h1 className='text-xl font-mono text-gray-600'>
          Courses at Reasonable Prices.
        </h1>
      </div>
      <div className='flex items-start pl-14 pt-4'>
        <ImConfused2 className='text-2xl mt-1 mr-4' />
        <h1 className='text-xl font-mono text-gray-600'>
          Complementary Content for all.
        </h1>
      </div>
    </div>
  );
};

export default Choose;
