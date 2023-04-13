import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'


const Navsm = () =>{
  const [Open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const toggleDropdown = () => {
    setOpen(!Open);
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
      {Open && (
        <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg">
          {/* Dropdown content */}
           <ul className="py-2 w-80 bg-gray-300 rounded-md ">
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 items-center cursor-pointer">
             <Link to="/"className='text-xl' >Home</Link>
             <hr />
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
               <button className="text-white bg-red-400 w-30  h-8 text-2xl rounded-md" onClick={openModal}>
               <span className="text-gray-800 flex items-center  ml-2 font-serif">
          Know More.. 
          </span>
    </button>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-pink-100 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Let me tell you more 
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      ...
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      THANKS!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
            </li>
          </ul>
        </div>
      )}
    </div>

        </div>
    </>
}

const NavLg = () =>{
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return <>
     <div className="container flex mx-auto px-4 items-center justify-between">
  <div className="flex items-center w-1/2">
    <div className="w-50 h-50">
      <h1 className="text-white font-bold text-3xl">E-Learning</h1>
    </div>
    <div className="w-10 h-10 flex items-center">
      <Link to="/" className="text-white  text-2xl">
        Home
      </Link>
    </div>
  </div>
    <div className='flex ml-auto'>
        <button className="text-white bg-red-400 w-40  h-10 text-2xl rounded-sm" onClick={openModal}>
        <span className="text-white flex items-center  ml-2 font-serif">
          Know More.. 
          </span>
    </button>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-pink-100 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Let me tell you more 
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      ...
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      THANKS!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
</div>
  </>
}
// Main
const CourseNav = () => {
  return <>
   <nav className='bg-blue-950 border-b-2 lg:border-b-0  p-4'>
      <div className='md:hidden'>
        <Navsm />
      </div>
       <div className='hidden w-full lg:flex md:flex'>
        <NavLg />
      </div>
     </nav>
  </>
}

export default CourseNav