import React from 'react';
import DefaultLayoutHoc from '../layouts/Default.Layout';
import Image from '../Components/Images/pngtree-cartoon-flat-girl-character-design-free-download-image_1317099.jpg';
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component';

const HomePage = () => {
  const courses =[
    {
      title:"C Programming",
      image:"https://i.pinimg.com/736x/30/a2/ec/30a2ec3e6af99eda71d9ef8ae47ca080--c-programming-programming-languages.jpg"
    },
    {
      title:"C++ Programming",
      image:"https://th.bing.com/th/id/OIP.LHXm6TqqcaWNtDIVm6ODZwHaEK?pid=ImgDet&rs=1"
    },
    {
     title:"Core Java",
     image:"https://th.bing.com/th/id/R.75e6131e2e0e0a0ebe84fa0ced923ee4?rik=UcL6yESbldjKVg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f5%2f7%2f491328.jpg&ehk=g1juF8EJMihKSuKX4qGs%2f7DapeJgKdAQ1Ct8hOgd%2fmI%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      title:"Html And Css",
      image:"https://wallpapercave.com/wp/wp2742499.jpg"
    },
    {
     title:"JavaScript",
     image:"https://assets-global.website-files.com/606a802fcaa89bc357508cad/61143444834cd54b9b0a88b3_2.png"
    },
    {
     title:"Python",
     image:"https://th.bing.com/th/id/R.0a7959b21a7c4a1551682ad786de7603?rik=y6U1g20scxVy6A&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2fa%2f8%2f145180.jpg&ehk=%2bdd%2fx0JfB59cXcJ55U32tlNoCdDmUGTz5VATSSku0zk%3d&risl=&pid=ImgRaw&r=0"
    },
  ]

  const topics = [
    {
      title:"C programming",
      image:"https://w7.pngwing.com/pngs/133/695/png-transparent-computer-programming-anime-programming-language-thread-animation-gril-reading-cartoon-c.png"
    },
    {
      title:"C++ programming",
      image:"https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/T174A2PA2946PT17X49Y37D1037151786FS2805/views/1,width=378,height=378,appearanceId=2,backgroundColor=000000,noPt=true/c-makes-c-bigger-programming-code-nerd-funny-mens-longsleeve-shirt.jpg"
    },
    {
      title:"Core Java",
      image:"https://pantheon.tech/wp-content/uploads/2019/04/java-dev-1030x772.png"
    },
    {
      title:"JavaScript",
      image:"https://thumbs.dreamstime.com/b/javascript-abstract-concept-vector-illustration-game-engine-js-development-web-programming-language-website-project-mobile-198849932.jpg"
    },
    {
      title:"Html And Css",
      image:"https://thumbs.dreamstime.com/b/online-project-css-html-coding-programming-tech-application-software-development-work-man-programmer-designer-working-new-156900538.jpg"
    },
    {
      title:"Python",
      image:"https://th.bing.com/th/id/R.294bb635a3d41939d4d1de429e827129?rik=g06ORnUyUllyhg&riu=http%3a%2f%2forig03.deviantart.net%2f7c1e%2ff%2f2013%2f039%2f7%2f5%2f75f4ebada142830630c345579c863f30-d5uaztn.png&ehk=NXiRXPWOSCyz%2ff6srjjND5uMdd%2bhB885tP%2bn%2bHQJq74%3d&risl=&pid=ImgRaw&r=0"
    },
  ]
  return (
    <>
      {/* Large Screen */}
      <div className="flex justify-center items-center  bg-blue-50 ">
        <img src={Image} alt="girl" className='my-0 w-80 h-60 opacity-80 transition-opacity duration-1000 ease-in-out hover:opacity-100" hidden lg:flex ' />
      </div>
      {/* Small Screen */}
      <div className='lg:hidden'>
        <div className=" flex justify-center items-center bg-gray-100 ">
          <img src={Image} alt="girl" className='my-0 w-60 h-60 ' />
        </div>
      </div>
      <div className=' h-150 bg-blue-50 lg:flex items-center justify-center sm:hidden'>
      <h1 className='pb-20 pt-10 font-bold font-mono text-4xl text-gray-700'>
      “Never know until you try”
      <br />
      <br />
      “Wake up and be inspired”
      </h1>
      </div>
      <div className="bg-premier-800 pt-7 pb-7 md:px-12 w-full">
        <PosterSlider
          title="Top Courses"
          subtitle="List of Top Courses here"
          posters={courses}
          isDark={true}
        />
      </div>
      <div className="mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Additional Topics"
          subtitle="Offering free topics for you"
          posters={topics}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
