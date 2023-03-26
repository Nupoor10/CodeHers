import React, {useState, useEffect} from 'react'
import CategoryCard from './CategoryCard'
import './css/categories.css'
import axios from 'axios'

function Categories() {

  const [data, setData] = useState([])

  useEffect(() => {
      axios.get("http://localhost:4040/api/courses/category").then(
        res => {
          setData(res.data.categoriesList)
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
  }, [])

  if(!data) {
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
          {data.map((obj) => {
            return <CategoryCard key={obj.id} props={obj}/>
          })
          }
        </div>
      </div>   
    )
  }
  
}

export default Categories