import React from 'react'
import Payment from '../Payment/Payment.Component'

const Courses = () => {   
  return (
    <div className="grid-container bg-gray-50"> {/* Add a class name for the grid container */}
      {/* Add grid items for each column */}
      <div className="grid-item">
        {/* Card One */}
      <div class="card">
          <img src="https://i.ytimg.com/vi/GiBQSkr_Nu0/maxresdefault.jpg" alt="" />
          
  <div class="card-body">
    <h5 class="card-title" className='text-2xl mb-2'>C Programming</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-3'>...</p>
   <Payment amount="$45"/>
  </div>
</div>
      </div>
      <div className="grid-item">
        {/* Card Two */}
      <div class="card">
          <img src="https://1.bp.blogspot.com/-FrZTvfxe5EY/XxVvenatX-I/AAAAAAAADxI/sbmaso_TF90kyjrp3wDNt22N4EcRAiokQCNcBGAsYHQ/s1720/dghhg.png" alt="" />
      <div class="card-body">
    <h5 class="card-title" className='text-2xl mb-2'>C++ Programming</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif'>...</p>
    <Payment amount="$50" />
     </div>
     </div>
      </div>
      <div className="grid-item">
        {/* Card Three */}
      <div class="card">
          <img src="https://i1.wp.com/www.myinquisitor.in/wp-content/uploads/2020/04/java-pl.jpg" alt="" />
  <div class="card-body">
    <h5 class="card-title"  className='text-2xl mb-2'>Core Java</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-4'>...</p>
    <Payment amount="$40"/>
  </div>
      </div>
      </div>
      <div className="grid-item">
        {/* Card Four */}
      <div class="card">
          <img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/6737/101_Intro_HTMLCSSWebDesign.jpg" alt="" />
  <div class="card-body">
    <h5 class="card-title"  className='text-2xl mb-2'>Html And Css</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-3'>...</p>
    <Payment amount="$30"/>
  </div>
      </div>
      </div>
      

    </div>
  )
}

export default Courses