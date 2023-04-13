import React, { useState } from 'react'

const Card = (props) => {
    const [showModal, setShowModal] = useState(false);
 

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const {title,subtitle,topic1,content1,topic2,content2,topic3,content3,topic4,content4} = props;
  return (
    <div>
        <button className='text-white bg-yellow-700 mt-2 p-2 rounded-md' onClick={toggleModal}>View Here !</button>
        {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div
            className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-w-lg w-full mx-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
              
                  {/* Add icon or content for the modal header */}
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    {title}
                  </h3>
                  <div className="mt-2 max-h-60 overflow-y-auto">
                    {/* Add content for the modal body */}
                    <p className="text-sm text-gray-500">
                      {subtitle}
                    </p>
                    <div className="mt-2 w-70">
                      <details className="text-sm text-gray-500">
                        <summary className='font-semibold text-xl'>{topic1}</summary>
                        <p>
                          Disclosure Content goes here...
                          <a
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            Click here
                          </a>{" "}
                        </p>
                      </details>
                      <br />
                      <hr/>
                      <details className="text-sm text-gray-500">
                        <summary className='font-semibold text-xl'>{topic2}</summary>
                        <p>
                          Disclosure Content goes here...
                        </p>
                      </details>
                      <br/>
                      <hr/>
                      <details className="text-sm text-gray-500">
                        <summary className='font-semibold text-xl'>{topic3}</summary>
                        <p>
                          Disclosure Content goes here...
                        </p>
                      </details>
                      <br />
                      <hr/>
                      <details className="text-sm text-gray-500">
                        <summary className='font-semibold text-xl'>{topic4}</summary>
                        <p>
                          Disclosure Content goes here...
                        </p>
                      </details>
                      <br/>
                      <hr/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    
  )
}

export default Card