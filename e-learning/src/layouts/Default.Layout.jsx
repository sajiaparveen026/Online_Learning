import React from 'react'
import NavBar from '../Components/NavBar/NavBar.Component'
import Footer from '../Components/Footer/Footer.Component'


const DefaultLayoutHoc =
 (Component) =>
 ({...props}) => {
  return (
    <div>
        <NavBar />
        <Component {...props} />
        <Footer/>
        </div>
  )
}

export default DefaultLayoutHoc