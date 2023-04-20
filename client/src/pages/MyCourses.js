import React, { useEffect, useState, useContext } from 'react'
import axios from "axios"
import './css/mycourse.css'
import MyCourseCard from '../components/MyCourseCard'
import { UserContext } from '../context/UserContext'
import { BsArrowBarDown } from "react-icons/bs";

function MyCourses() {
    const [ courseData, setCourseData] = useState([])
    const { user } = useContext(UserContext);
    const email = user ? user.email : null

    useEffect(()=> {
        async function fetchMyCourses() {
            try {
                const response = await axios.get(`http://localhost:4040/api/mycourses/${email}`)
                const mycourses = await response.data.myCourseList
                setCourseData(mycourses)
            }
            catch(error) {
                console.log(error)
            }
        }
        
        fetchMyCourses()
    }, [email])
    
    if(!courseData || !user) {
        return(
            <div>Loading....</div>
        )
    }

    else {
        return (
            <div>
                <div className='my-course-text'>
                    <h1>My Courses</h1>
                    <BsArrowBarDown className='down-icon'/>
                </div>
                <h2 style={{margin: "0px 30px"}}>Here are all the course you have enrolled in : </h2>
                <div className='my-course-list'>
                    {courseData.map(function(obj) {
                        return <MyCourseCard key={obj._id} id={obj._id} name={obj.name} description={obj.description} time={obj.time} imgURL={obj.imgURL}/>
                    })}
                </div>
            </div>
          )
    }
}

export default MyCourses;
