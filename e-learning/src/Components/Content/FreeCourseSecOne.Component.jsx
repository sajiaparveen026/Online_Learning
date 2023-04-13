import React from 'react'
import Card from '../Card/Card.Component';


const FreeCourseSectionOne= () => {
  const title = "hey"
  const CardData1 = [
    {
        title : "C-Programming",
        subTitle: "Here is the content Regarding C programming",
        topic1:"Basics of C",
        content1:"click Here",
        topic2:"Data types , Variables and Keywords",
        content2:"Click Here",
        topic3:"Operators  in C",
        content3:"Click Here",
        topic4:"Conditional Statement",
        content4:"Click here",
    }
  ]
  return (
    <div className="grid-container "> {/* Add a class name for the grid container */}
      {/* Add grid items for each column */}
      <div className="grid-item">
        {/* Card One */}
      <div class="card">
          <img src="https://cdn-thumbs.comidoc.net/750/2800976_98e5.jpg" alt="" />
  <div class="card-body">
    <h5 class="card-title" className='text-2xl mb-2'>C Programming</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-3'>C Programming: Efficient, Powerful, and Versatile. Learn Syntax, Control Structures, Data Structures, and More for Building Software Applications.</p>
    <Card title={CardData1[0].title} subTitle={CardData1[0].subTitle} topic1={CardData1[0].topic1}
    topic2={CardData1[0].topic2} topic3={CardData1[0].topic3} topic4={CardData1[0].topic4} 
    content1={CardData1[0].content1}  content2={CardData1[0].content1}  content3={CardData1[0].content1}  content4={CardData1[0].content1} />
  </div>
</div>
      </div>
      <div className="grid-item">
        {/* Card Two */}
      <div class="card">
          <img src="https://c4.wallpaperflare.com/wallpaper/286/891/609/anime-c-programming-blue-eyes-book-cover-hd-wallpaper-preview.jpg" alt="" />
      <div class="card-body">
    <h5 class="card-title" className='text-2xl mb-2'>C++ Programming</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif'>C++ Programming: Unleash Your Creativity. Master Object-Oriented Programming, Templates, and More for Crafting Cutting-Edge Software Solutions.</p>
    <Card title={title} />
     </div>
     </div>
      </div>
      <div className="grid-item">
        {/* Card Three */}
      <div class="card">
          <img src="https://i.pinimg.com/originals/8b/48/b5/8b48b53f4d7dd5577fc2439be2d14781.png" alt="" />
  <div class="card-body">
    <h5 class="card-title"  className='text-2xl mb-2'>Core Java</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-4'>Java Programming: Write Once, Run Anywhere. Master OOP, Generics, Collections, and More for Cross-Platform Software Development.</p>
    <Card title={title} />
  </div>
      </div>
      </div>
      <div className="grid-item">
        {/* Card Four */}
      <div class="card">
          <img src="https://wallpapercave.com/wp/wp7421172.png" alt="" />
  <div class="card-body">
    <h5 class="card-title"  className='text-2xl mb-2'>Html And Css</h5>
    <p class="card-text" className='text-sm text-gray-500 font-serif mb-3'>HTML & CSS Programming: Building the Web. Learn Markup, Styling, Layouts, and Responsive Design for Creating Modern and Interactive Websites.</p>
    <Card title={title} />
  </div>
      </div>
      </div>
     
    </div>
  )
}

export default FreeCourseSectionOne