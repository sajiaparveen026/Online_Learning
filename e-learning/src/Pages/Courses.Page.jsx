import React from 'react'
import CoursesLayoutHoc from '../layouts/Courses.Layout'
import Courses from '../Components/Content/Courses.Component'
import InquiryForm from '../Components/Form/InquiryForm.Component'

const CoursesPage = () => {
  return (
    <div>
      <Courses />
      <InquiryForm />
    </div>
  )
}

export default CoursesLayoutHoc(CoursesPage)