import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
   <div>
    <Link to={`/freeContent/${props.id}`}><button className='text-white bg-yellow-700 mt-2 p-2 rounded-md'>View Here !</button></Link>
   </div>
    
  )
  }

export default Card