import React from 'react'
import CoursesLayoutHoc from '../layouts/Courses.Layout'

function FreeContentPage() {
  return (
    <div>Content Here</div>
  )
}

export default CoursesLayoutHoc(FreeContentPage)