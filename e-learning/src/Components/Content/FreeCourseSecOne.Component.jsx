import React from 'react'
import Card from '../Card/Card.Component';


const FreeCourseSectionOne= () => {
 
  const CardData = [
    {
      title:"C programming",
      subtitle:"You can Use these links to learn about C programming",
      Topic1:"Basic Concepts of C",
      url1:"https://www.geeksforgeeks.org/c-programming-language/",
      Topic2:"Variables",
      url2:"https://www.geeksforgeeks.org/variables-in-c/",
      Topic3:"Operators",
      url3:"https://www.geeksforgeeks.org/operators-in-c/",
      Topic4:"Conditional Statements",
      url4:"https://www.geeksforgeeks.org/decision-making-c-cpp/",
      Topic5:"Looping Statement",
      url5:"https://www.geeksforgeeks.org/c-loops/",
      More:"More Content will be Uploaded Soon..."
    },
    {
      title:"C++ programming",
      subtitle:"You can Use these links to learn about C++ programming",
      Topic1:"Basic Concepts of C++",
      url1:"https://www.geeksforgeeks.org/cpp-basics/",
      Topic2:"Classes and Objects",
      url2:"https://www.geeksforgeeks.org/c-classes-and-objects/",
      Topic3:"Constructors",
      url3:"https://www.geeksforgeeks.org/constructors-c/",
      Topic4:"Inheritance",
      url4:"https://www.geeksforgeeks.org/inheritance-in-c/",
      Topic5:"PolyMorphism",
      url5:"https://www.geeksforgeeks.org/cpp-polymorphism/",
      More:"More Content will be Uploaded Soon..."
    },
    {
      title:"Core Java",
      subtitle:"You can Use these links to learn about Core Java",
      Topic1:"Java Programming Basics",
      url1:"https://www.geeksforgeeks.org/java-programming-basics/",
      Topic2:"Classes and Objects",
      url2:"https://www.geeksforgeeks.org/classes-objects-java/",
      Topic3:"Inheritance in Java",
      url3:"https://www.geeksforgeeks.org/inheritance-in-java/",
      Topic4:"Polymorphism In Java",
      url4:"https://www.geeksforgeeks.org/polymorphism-in-java/",
      Topic5:"Interfaces",
      url5:"https://www.geeksforgeeks.org/interfaces-in-java/",
      More:"More Content will be Uploaded Soon..."
    },
    {
      title:"Html and Css",
      subtitle:"You can Use these links to learn about Html and Css",
      Topic1:"Html Basics",
      url1:"https://www.geeksforgeeks.org/html-basics/",
      Topic2:"Css Guide",
      url2:"https://www.geeksforgeeks.org/css-cheat-sheet-a-basic-guide-to-css/",
      Topic3:"Html Essential Tags",
      url3:"https://www.geeksforgeeks.org/essential-html-tags/",
      Topic4:"Commonly Used Tags",
      url4:"https://www.geeksforgeeks.org/most-commonly-used-tags-in-html/",
      Topic5:"Css Properties",
      url5:"https://www.geeksforgeeks.org/css-properties-complete-reference/",
      More:"More Content will be Uploaded Soon..."
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
    <Card data={CardData[0]}/>
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
    <Card data={CardData[1]} />
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
    <Card data={CardData[2]}/>
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
    <Card  data={CardData[3]}/>
  </div>
      </div>
      </div>
    </div>
   </div>
  )
}

export default FreeCourseSectionOne