import React, { useState, useEffect } from 'react'
import CardCarousel from '../components/CardCarousel'
import './css/popularcourses.css'
import axios from 'axios'

function PopularCoursesSlider() {
    
    const [data, setData] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:4040/api/courses/popular").then(
            res => {
                setData(res.data.popularCourses)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }, [])

    if(!data) {
        return (
            <div>Loading....</div>
        )
    }

    else {
        return (
            <div className='popular-courses-component'>
                <h1 className='popular-course-text'>Explore top courses</h1>
                <CardCarousel data={data} />
            </div>
          )
    } 
}

export default PopularCoursesSlider;