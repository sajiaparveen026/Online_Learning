import React from 'react'
import Footer from '../Components/Footer/Footer.Component'
import CourseNav from '../Components/NavBar/CourseNav.Component'



const CoursesLayoutHoc = 
(Component) =>
({...props}) => {
  return (
    <div>
       <CourseNav />
        <Component {...props}/>
        <Footer />
        </div>
  )
}

export default CoursesLayoutHoc