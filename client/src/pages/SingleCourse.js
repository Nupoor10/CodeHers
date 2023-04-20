import React, {useState, useEffect, useContext } from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { EnrolledCoursesContext } from '../context/EnrolledCoursesContext'
import './css/singlecourse.css'
import { BsFillChatTextFill, BsFillBookmarksFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

function SingleCourse() {
  let { id } = useParams()
  const [course, setCourse] = useState(null)
  const { user } = useContext(UserContext)
  const { enrolledCourses, setEnrolledCourses } = useContext(EnrolledCoursesContext)
  const navigate = useNavigate();

  useEffect(() => {
    async function getCourse() {
      try {
        const response = await axios.get(`http://localhost:4040/api/courses/${id}`)
        const data = await response.data
        setCourse(data.course)
      }
      catch(error) {
        console.log(error)
      }
    }
   
    getCourse()
  }, [id])

  if(!course) {
    return <div>Loading....</div>
  }
    const email = user ? user.email : null
    const cid = parseInt(course._id);
    const bool = enrolledCourses.includes(cid)

    async function handleEnroll(e) {
      try {
        if(!user) {
          alert("You must login to enroll")
        }

        e.preventDefault();
        const response = await axios.post("http://localhost:4040/api/mycourses/enroll", {
          cid,
          email
        })
        const courseList = await response.data.courses
        setEnrolledCourses(courseList)
        alert("Successfully Enrolled!!")
        let updatedList = JSON.parse(localStorage.getItem('userCourses'))
        updatedList = courseList
        localStorage.setItem('userCourses', JSON.stringify(updatedList));
      }
      catch(error) {
        console.log(error)
      }
      } 
      
      function handleClick() {
        navigate("/mycourses")
      }
    
      const { imgURL, name, description, time, isPopular, learning, topics, instructor } = course
    return (
      <div>
          <div className='single-course-header'>
          <div className='course-header-img'>
            <img src={imgURL} alt="course-image" className='course-image'></img>
          </div>
          <div className='course-header-text'>
            <h1 className='course-name'>{name}</h1>
            <p className='course-desc'><BsFillChatTextFill/>{description}</p>
            <h3 className='course-time'><AiOutlineFieldTime />{time}</h3>
            <span>{ isPopular ? <b>🔥POPULAR</b> : ""}</span>
            {bool ? <button type='button' className='course-btn' onClick={handleClick}>GO TO COURSE</button> : <button type='submit' className='course-btn' onClick={handleEnroll}>ENROLL</button>}
          </div>
        </div>
        <div className='single-course-learning'>
          <div className='learning-heading'>
            <h1>What You Will Learn</h1>
            <img className='learning-img' src='https://i.ibb.co/LdVSG8T/learning.png' alt='learning-img'></img>
          </div>
          <div className='learning-text'>
            {learning.map( (l) => {
              return <h3 className='learning-points'><TiTick/>{l}</h3>
            })}
          </div>
        </div> 
        <div className='single-course-topics'>
          <div className='topics-heading'>
            <h1>Topics Covered </h1>
          </div>
          <div className='topics-text'>
            {topics.map( (t) => {
                return <div className='topics-modal'><BsFillBookmarksFill className='minus'/><h4 className='topics-points'>{t}</h4></div>
              })}
          </div>
        </div>
        <div className='course-instructor-wrapper'>
          <p className='inst'>Instructor</p>
          <div className='course-instructor'>
            <div>
              <img src={instructor.img} alt="instrcutor" className='instructor-img'></img>
            </div>
            <div className='instructor-details'>
              <h3 className='instructor-name'>{instructor.name}</h3>
              <h3 className='instructor-qual'>{instructor.qualifications}</h3>
              <h3 className='instructor-desc'>{instructor.description}</h3>
            </div>
        </div>  
        </div>
      </div>  
    )
  } 

export default SingleCourse;