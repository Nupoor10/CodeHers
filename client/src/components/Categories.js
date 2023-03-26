import React, {useState, useEffect} from 'react'
import CategoryCard from './CategoryCard'
import './css/categories.css'

function Categories() {

  const data = [ 
    {id : "456", name : "Web Design", src: "https://i.ibb.co/v4zk471/pexels-format-1029757.jpg"},
    {id : "456", name : "Web Design", src: "https://i.ibb.co/v4zk471/pexels-format-1029757.jpg"},
    {id : "456", name : "Web Design", src: "https://i.ibb.co/v4zk471/pexels-format-1029757.jpg"},
    {id : "456", name : "Web Design", src: "https://i.ibb.co/v4zk471/pexels-format-1029757.jpg"},
    {id : "456", name : "Web Design", src: "https://i.ibb.co/v4zk471/pexels-format-1029757.jpg"},
    {id : "456", name : "Web Design", src: "https://i.ibb.co/v4zk471/pexels-format-1029757.jpg"}
  ]

  if(!data) {
    return (
      <div>Loading.....</div>
    )
  }

  else {
    return (
      <div className='category-wrapper'>
        {data.map((obj) => {
          return <CategoryCard key={obj.id} props={obj}/>
        })
        }
      </div>
    )
  }
  
}

export default Categories