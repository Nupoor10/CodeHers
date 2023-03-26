import React, { useState, useEffect } from 'react'
import './css/singlecategory.css'
import axios from "axios"
import CourseCard from '../components/CourseCard'
import {useParams} from "react-router-dom"

function SingleCategory() {
  const { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    async function getCategory() {
      try {
        const response = await axios.get(`http://localhost:4040/api/courses/category/${id}`)
        const data = await response.data
        setData(data.singleCategory)
      }
      catch(error) {
        console.log(error)
      }
    }

    getCategory()
}, [id])

  if(!data){
    return <div>Loading...</div>
  }
  else {
    return (
      <div>
          <div className='categories-wrapper'>
              <div className='categories-text'>
                  <h2>Browse our Category courses</h2>
                <div className='search-bar'>
                  <input type="text" name='search' id='search' placeholder='Search Courses' style={{width:"70%"}}></input>
                  <button type='button' className='search-btn'>SEARCH</button>
                </div>
              </div>
              <div className='categories-component'>
                {data.map(function(obj) {
                  return <CourseCard key={obj._id} id={obj._id} name={obj.name} description={obj.description} time={obj.time} src={obj.imgURL}/>
                })}
              </div>
          </div>
      </div>
    )
  } 
}

export default SingleCategory