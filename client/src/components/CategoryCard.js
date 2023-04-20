import React from 'react'
import './css/categorycard.css'
import { Link } from 'react-router-dom'

function CategoryCard({props}) {
  const { id, src, name } = props
  
  return (
    <div className='category-card'>
      <img src={src} alt='category-image' className='category-image'></img>
      <h2 className='category-title'>{name}</h2>
      <button className='category-button'><Link className='category-link' to={`/category/${id}`}>EXPLORE</Link></button>
    </div>
  )
}

export default CategoryCard