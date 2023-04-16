import React from 'react'
import Card from '../Card/Card.Component';


const FreeCourseSectionOne= () => {
 
  const CardData = [
    {
      id:"234",
      title:"C programming",
      subtitle:"Let's Talk about C programming Concepts..."
    },
    {
      id:"798"
    },
    {
      id:"487"
    },
    {
      id:"873"
    },
  ]
  return (
   <div>
    <h1 className='flex items-center justify-center text-3xl font-bold text-blue-950 font-serif pt-4 '>Enjoy Free Topics</h1>
    <p className='flex items-center justify-center text-gray-500 font-light text-xl ml-3'>Read our free content which may help you in your learning. </p>
     <div className="grid-container "> {/* Add a class name for the grid container */}
      {/* Add grid items for each column */}
      <div className="grid-item">
        {/* Card One */}
      <div class="card offer_card">
          <img src="https://cdn-thumbs.comidoc.net/750/2800976_98e5.jpg" alt="" />
  <div class="card-body">
    <h5 class="card-title" className='text-2xl mb-2'>C Programming</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-3'>C Programming: Efficient, Powerful, and Versatile. Learn Syntax, Control Structures, Data Structures, and More for Building Software Applications.</p>
    <Card id={CardData[0].id} title={CardData[0].title} subtitle={CardData[0].subtitle} />
  </div>
</div>
      </div>
      <div className="grid-item">
        {/* Card Two */}
      <div class="card offer_card">
          <img src="https://c4.wallpaperflare.com/wallpaper/286/891/609/anime-c-programming-blue-eyes-book-cover-hd-wallpaper-preview.jpg" alt="" />
      <div class="card-body">
    <h5 class="card-title" className='text-2xl mb-2'>C++ Programming</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif'>C++ Programming: Unleash Your Creativity. Master Object-Oriented Programming, Templates, and More for Crafting Cutting-Edge Software Solutions.</p>
    <Card id={CardData[1].id} />
     </div>
     </div>
      </div>
      <div className="grid-item">
        {/* Card Three */}
      <div class="card offer_card">
          <img src="https://i.pinimg.com/originals/8b/48/b5/8b48b53f4d7dd5577fc2439be2d14781.png" alt="" />
  <div class="card-body">
    <h5 class="card-title"  className='text-2xl mb-2'>Core Java</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-4'>Java Programming: Write Once, Run Anywhere. Master OOP, Generics, Collections, and More for Cross-Platform Software Development.</p>
    <Card id={CardData[2].id} />
  </div>
      </div>
      </div>
      <div className="grid-item">
        {/* Card Four */}
      <div class="card offer_card">
          <img src="https://wallpapercave.com/wp/wp7421172.png" alt="" />
  <div class="card-body">
    <h5 class="card-title"  className='text-2xl mb-2'>Html And Css</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-3'>HTML & CSS Programming: Building the Web. Learn Markup, Styling, Layouts, and Responsive Design for Creating Modern and Interactive Websites.</p>
    <Card id={CardData[3].id} />
  </div>
      </div>
      </div>
    </div>
   </div>
  )
}

export default FreeCourseSectionOne