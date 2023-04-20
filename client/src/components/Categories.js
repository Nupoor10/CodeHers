import React, {useState, useEffect} from 'react'
import CategoryCard from './CategoryCard'
import './css/categories.css'
import axios from 'axios'

function Categories() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get("http://localhost:4040/api/courses/category")
        const categoriesList = await response.data.categoriesList
        setCategories(categoriesList)
      }
      catch(error) {
        console.log(error)
      } 
    }

    fetchCategories()
  }, [])

  if(!categories) {
    return (
      <div>Loading.....</div>
    )
  }

  else {
    return (
      <div className='category-wrapper'>
          <h1>Categories</h1>
          <h2>Browse through a varied collection of categories</h2>
          <div className='category-component'>
          {categories.map((obj) => {
            return <CategoryCard key={obj.id} props={obj}/>
          })
          }
        </div>
      </div>   
    )
  }
  
}

export default Categories