import React from 'react'
import FreeContentHoc from '../layouts/FreeContent.Layout'
import FreeCourseSectionOne from '../Components/Content/FreeCourseSecOne.Component'
import CheatSheet from '../Components/Content/CheatSheet.Component'
import FeedbackForm from '../Components/Form/FeedbackForm.Component'

function FreeContentPage() {
  return (
    <div>
      <FreeCourseSectionOne />
      <CheatSheet />
      <FeedbackForm />
    </div>
  )
}

export default FreeContentHoc(FreeContentPage)