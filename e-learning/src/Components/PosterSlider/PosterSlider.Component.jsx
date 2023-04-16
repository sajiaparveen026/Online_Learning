import React from 'react'
import Slider from 'react-slick';
import CoursesPoster from '../Poster/Poster.Component';

const PosterSlider = (props) => {
  const {posters , title , subtitle, isDark,config} = props
  const settings = {
    infinte:true,
    speed:500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive:[
      {
      breakpoint: 1024,
      settings:{
        slidesToShow:2,
        slidesToScroll:2,
      }
      },
      {
      breakpoint: 600,
      settings:{
        slidesToShow:1,
        slidesToScroll:1,
      }
      },
    ]
  };
  return <>
   <div className='flex flex-col items-start sm:ml-3 my-2'>
    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
      {title}
    </h3>
    <p className={`text-sm font-serif  pb-5 ${isDark ? 'text-white' : 'text-gray-800'}`}>
      {subtitle}
    </p>
   </div>
   <Slider {...(config || settings)}>
        {posters.map((each) => <CoursesPoster {...each} isDark={isDark} />)}
      </Slider>
  </>
}

export default PosterSlider