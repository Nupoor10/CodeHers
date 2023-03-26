import React from 'react'
import './css/categorycard.css'
import { Link } from 'react-router-dom'

function CategoryCard({props}) {
  const id = props.id;
  
  return (
    <div className='category-card'>
      <img src={props.src} alt='category-image' className='category-image'></img>
      <h2 className='category-title'>{props.name}</h2>
      <button className='category-button'><Link className='category-link' to={`/category/${id}`}>EXPLORE</Link></button>
    </div>
  )
}

export default CategoryCard