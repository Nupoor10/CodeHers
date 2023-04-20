import React, {useState, useEffect} from 'react'
import './css/course.css'
import axios from "axios"
import Select from 'react-select'
import CourseCard from '../components/CourseCard'

function Course() {

  const [courseData, setCourseData] = useState([])

  useEffect(() => {
    async function fetchCourseData() {
      try {
        const response = await  axios.get("http://localhost:4040/api/courses")
        const courses = await response.data.courses
        setCourseData(courses)
      }
      catch(error) {
        console.log(error)
      }
    }
    
    fetchCourseData()
  },[])

  return (
    <div>
        <div className='courses-wrapper'>
            <div className='courses-text'>
              <h1>COURSES CATALOGUE</h1>
              <h2>Browse our entire collection of 100+ specially curated courses</h2>
              <div className='search-bar'>
                <input type="text" name='search' id='search' placeholder='Search Courses' style={{width:"70%"}}></input>
                <button type='button' className='search-btn'>SEARCH</button>
              </div>
            </div>
            <div className='courses-components'>
              {courseData.map(function(obj) {
                return <CourseCard key={obj._id} id={obj._id} name={obj.name} description={obj.description} time={obj.time} src={obj.imgURL}/>
              })}
            </div>
        </div>
    </div>
  )
}

export default Course