import React from 'react'
import NavBar from '../Components/NavBar/NavBar.Component'
import Footer from '../Components/Footer/Footer.Component'
import Choose from '../Components/Choose/Choose.Component'


const DefaultLayoutHoc =
 (Component) =>
 ({...props}) => {
  return (
    <div>
        <NavBar />
        <Component {...props} />
        <Choose/>
        <Footer/>
        </div>
  )
}

export default DefaultLayoutHoc