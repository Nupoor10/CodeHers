import React, { useState, useEffect } from 'react'
import CardCarousel from '../components/CardCarousel'
import './css/popularcourses.css'
import axios from 'axios'

function PopularCoursesSlider() {
    
    const [popularCourses, setPopularCourses] = useState([])

    useEffect(()=> {
        async function fetchPopularCourses() {
            try {
                const response = await axios.get("http://localhost:4040/api/courses/popular")
                const popularCourses = await response.data.popularCourses
                setPopularCourses(popularCourses)
            }
            catch(error) {
                console.log(error)
            }
        }
        
        fetchPopularCourses()
    }, [])

    if(!popularCourses) {
        return (
            <div>Loading....</div>
        )
    }

    else {
        return (
            <div className='popular-courses-component'>
                <h1 className='popular-course-text'>Explore top courses</h1>
                <CardCarousel data={popularCourses} />
            </div>
          )
    } 
}

export default PopularCoursesSlider;