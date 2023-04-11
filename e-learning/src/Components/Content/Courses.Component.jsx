import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Courses = () => {
    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <div className="grid-container bg-gray-100"> {/* Add a class name for the grid container */}
      {/* Add grid items for each column */}
      <div className="grid-item">
        {/* Card One */}
      <div class="card">
          <img src="https://i.ytimg.com/vi/GiBQSkr_Nu0/maxresdefault.jpg" alt="" />
          
  <div class="card-body">
    <h5 class="card-title" className='text-2xl mb-2'>C Programming</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-3'>...</p>
    <button className='text-white bg-blue-400 mt-2 p-2 rounded-md' onClick={openModal}>Pay $50</button>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
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
      </div>
      <div className="grid-item">
        {/* Card Two */}
      <div class="card">
          <img src="https://1.bp.blogspot.com/-FrZTvfxe5EY/XxVvenatX-I/AAAAAAAADxI/sbmaso_TF90kyjrp3wDNt22N4EcRAiokQCNcBGAsYHQ/s1720/dghhg.png" alt="" />
      <div class="card-body">
    <h5 class="card-title" className='text-2xl mb-2'>C++ Programming</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif'>...</p>
    <button className='text-white bg-blue-400 mt-2 p-2 rounded-md'>Pay $50</button>

     </div>
     </div>
      </div>
      <div className="grid-item">
        {/* Card Three */}
      <div class="card">
          <img src="https://i1.wp.com/www.myinquisitor.in/wp-content/uploads/2020/04/java-pl.jpg" alt="" />
  <div class="card-body">
    <h5 class="card-title"  className='text-2xl mb-2'>Java Basics</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-4'>...</p>
    <button className='text-white bg-blue-400 mt-2 p-2 rounded-md'>Pay $50</button>
  </div>
      </div>
      </div>
      <div className="grid-item">
        {/* Card Four */}
      <div class="card">
          <img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/6737/101_Intro_HTMLCSSWebDesign.jpg" alt="" />
  <div class="card-body">
    <h5 class="card-title"  className='text-2xl mb-2'>Html And Css</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-3'>...</p>
    <button className='text-white bg-blue-400 mt-2 p-2 rounded-md '>Pay $50</button>
  </div>
      </div>
      </div>
      

    </div>
  )
}

export default Courses