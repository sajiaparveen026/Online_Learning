import React from 'react'
import FreeContentHoc from '../layouts/FreeContent.Layout'
import FreeCourseSectionOne from '../Components/Content/FreeCourseSecOne.Component'

function FreeContentPage() {
  return (
    <div>
      <div className='ml-20  mt-3'>
   <h1 className='text-3xl font-bold font-mono'>Content</h1>
   <p className='text-xl text-gray-500'>The description goes here...</p>
      </div>
      <FreeCourseSectionOne />
    </div>
  )
}

export default FreeContentHoc(FreeContentPage)