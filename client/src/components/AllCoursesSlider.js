import React, {useState, useEffect } from 'react'
import CardCarousel from '../components/CardCarousel'
import axios from 'axios';
import './css/allcourses.css'
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link} from 'react-router-dom';

function AllCoursesSlider() {

    const [allCourses, setAllCourses ] = useState([])

    useEffect(()=> {
        async function fetchCourses() {
            try {
                const response = await axios.get("http://localhost:4040/api/courses/")
                const courses = await response.data.courses
                setAllCourses(courses)
            }
            catch(error) {
                console.log(error)
            }
        }

        fetchCourses()
    }, [])

    if(!allCourses) {
        return(
            <div>Loading.....</div>
        )
    }
    else {
        return (
            <div className='all-courses-slider'>
                <div className='all-courses-component'>
                    <div className='all-courses-link'>   
                        <h1 className='all-course-text' >A broad selection of courses</h1> 
                        <Link to="/courses"><BsFillArrowRightSquareFill  className='courses-btn'/></Link>
                    </div>
                    <h3>Choose from 100+ online video courses with new additions published every month</h3>
                </div>
                <div>
                    <CardCarousel data={allCourses} />
                </div>
            </div>
          )
    }
}

export default AllCoursesSlider