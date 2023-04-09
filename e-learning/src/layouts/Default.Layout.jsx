import React from 'react'
import NavBar from '../Components/NavBar/NavBar.Component'


const DefaultLayoutHoc =
 (Component) =>
 ({...props}) => {
  return (
    <div>
        <NavBar />
        <Component {...props} />
        <div>Footer</div>
        </div>
  )
}

export default DefaultLayoutHoc