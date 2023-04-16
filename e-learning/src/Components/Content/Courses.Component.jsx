import React from 'react'
import Payment from '../Payment/Payment.Component'

const Courses = () => {   
  return (
   <div className='bg-blue-100'>
    <h1 className='flex items-center justify-center text-3xl font-bold text-blue-950 font-serif pt-4 '>Grab The Courses!</h1>
    <p className='flex items-center justify-center text-gray-500 font-light text-xl ml-3'>Get the Live Online Courses By paying short amount and increase your Programming Knowledge</p>
     <div className="grid-container"> {/* Add a class name for the grid container */}
      {/* Add grid items for each column */}
      <div className="grid-item shadow-sm">
        {/* Card One */}
      <div class="card offer_card" >
          <img src="https://i.ytimg.com/vi/GiBQSkr_Nu0/maxresdefault.jpg" alt="" />
          
  <div class="card-body">
    <h5 class="card-title" className='text-2xl mb-2'>C Programming</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-2'>Buy And Learn Basic Concepts of C and work on hand-on projects.</p>
   <Payment price="1000"/>
  </div>
</div>
      </div>
      <div className="grid-item shadow-sm">
        {/* Card Two */}
      <div class="card offer_card">
          <img src="https://th.bing.com/th/id/OIP.r5UAcly8p3t4RbMizjldsgHaEK?pid=ImgDet&rs=1" alt="" />
      <div class="card-body offer_card">
    <h5 class="card-title" className='text-2xl mb-2'>C++ Programming</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-2.5'>Buy and Learn the Concepts of OOPs followed by Dsa Concepts.</p>
    <Payment price="1000" />
     </div>
     </div>
      </div>
      <div className="grid-item shadow-sm">
        {/* Card Three */}
      <div class="card offer_card">
          <img src="https://th.bing.com/th/id/R.d3f9618e065d057f9d0f9bf97123902a?rik=13lPk%2fT3A31KYg&riu=http%3a%2f%2ftheblogreaders.com%2fwp-content%2fuploads%2f2016%2f04%2fcore-java.png&ehk=CNgTSPZCKBRVjbZWk3VdDNnSRUbLjbl2o35aUuIg5Bs%3d&risl=&pid=ImgRaw&r=0" alt="" />
  <div class="card-body">
    <h5 class="card-title"  className='text-2xl mb-1'>Core Java</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-1.5'>Buy and Learn Core Java and further Learn about Andriod app Development.</p>
    <Payment price="1000"/>
  </div>
      </div>
      </div>
      <div className="grid-item shadow-sm">
        {/* Card Four */}
      <div class="card offer_card">
          <img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/6737/101_Intro_HTMLCSSWebDesign.jpg" alt="" />
  <div class="card-body">
    <h5 class="card-title"  className='text-2xl mb-1'>Html And Css</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-1'>Work on Live project Based on concepts of Html and Css.</p>
    <Payment price="800"/>
  </div>
      </div>
      </div>
      

    </div>
   </div>
  )
}

export default Courses