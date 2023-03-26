import React, {useState, useEffect} from 'react'
import './css/course.css'
import axios from "axios"
import Select from 'react-select'
import CourseCard from '../components/CourseCard'

const categoryOptions = [
  { value: 'webdev', label: 'Web Development' },
  { value: 'blockchain', label: 'Blockchain and Web3' },
  { value: 'cybersecurity', label: 'Cyber Security' },
  { value: 'datascience', label: 'Data Science' },
  { value: 'ai', label: 'Artificial Intelligence' }
]


const timeOptions = [
  { value: '1-2hr', label: '1-2 hours' },
  { value: '2-6hr', label: '2-6 hours' },
  { value: '6+hr', label: 'More than 6 hours' }
]


function Course() {

  const [courseData, setCourseData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4040/api/courses").then(
      res => {
        // console.log(res.data);
        setCourseData(res.data.courses);
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
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
                <h3>Filter your results</h3>
              <div className='search-filter'>
                <Select options={categoryOptions} className="filter"/>
                <Select options={timeOptions} className="filter"/>
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