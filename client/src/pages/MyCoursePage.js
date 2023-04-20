import React, {useState, useEffect, useContext} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import './css/singlemycourse.css'
import { UserContext } from '../context/UserContext'
import { BsFillBookmarksFill, BsHourglassSplit } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";

function MyCoursePage() {
    let { id } = useParams()
    const [course, setCourse] = useState(null)
    const { user } = useContext(UserContext);
    const email = user ? user.email : null

    useEffect(() => {
      async function fetchMyCourses() {
        try {
          const response = await axios.get(`http://localhost:4040/api/mycourses/${email}/${id}`)
          const mycourse = await response.data.course
          setCourse(mycourse)
        }
        catch(error) {
          console.log(error)
        }
      }
      
      fetchMyCourses()
      }, [id, email])
      
      if(!course || !user || !id) {
        return(
          <div>Loading.....</div>
        )
      }

        return ( 
          <div>
            <div className='my-course-heading'>
              <h1 className='my-course-title'>{course.name}</h1>
              <h3 className='my-course-duration'> <BsHourglassSplit/>{course.time}</h3>
            </div>
            <iframe width="100%" height="630px" title='video-tutorial'
              src={course.videoURL}>
            </iframe>
            <div className='my-course-other-details'>
              <div className='my-single-course-topics'>
                <div className='my-topics-heading'>
                  <h1>Topics Covered </h1>
                </div>
                <div className='my-topics-text'>
                  {course.topics.map( (t) => {
                      return <div className='my-topics-modal'><h4 className='my-topics-points'><BsFillBookmarksFill />{t}</h4></div>
                    })}
                </div>
              </div>
              <div className='resources-section'>
                <h1>Resources</h1>
                <a href='https://react-icons.github.io/react-icons/search?q=hour' target="_blank" rel="noreferrer" className='resource'><FaHandPointRight />React Icons</a>
                <a href='https://react-icons.github.io/react-icons/search?q=hour' target="_blank" rel="noreferrer" className='resource'><FaHandPointRight />React Icons</a>
                <a href='https://react-icons.github.io/react-icons/search?q=hour' target="_blank" rel="noreferrer" className='resource'><FaHandPointRight />React Icons</a>
                <a href='https://react-icons.github.io/react-icons/search?q=hour' target="_blank" rel="noreferrer" className='resource'><FaHandPointRight />React Icons</a>
                <a href='https://react-icons.github.io/react-icons/search?q=hour' target="_blank" rel="noreferrer" className='resource'><FaHandPointRight />React Icons</a>
              </div>
            </div>
          </div>
        )
      }

export default MyCoursePage