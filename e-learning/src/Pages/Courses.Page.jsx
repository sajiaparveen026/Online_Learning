import React from 'react'
import CoursesLayoutHoc from '../layouts/Courses.Layout'
import Courses from '../Components/Content/Courses.Component'

const CoursesPage = () => {
  return (
    <div>
      <Courses />
    </div>
  )
}

export default CoursesLayoutHoc(CoursesPage)