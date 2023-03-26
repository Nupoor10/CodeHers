import React, {useState, useEffect } from 'react'
import CardCarousel from '../components/CardCarousel'
import axios from 'axios';
import './css/allcourses.css'
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link} from 'react-router-dom';

function AllCoursesSlider() {

    const [data, setData ] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:4040/api/courses/").then(
            res => {
                setData(res.data.courses)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }, [])

    if(!data) {
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
                    <CardCarousel data={data} />
                </div>
            </div>
          )
    }
}

export default AllCoursesSlider