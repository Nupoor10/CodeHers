import React, { useEffect, useState, useContext } from 'react'
import axios from "axios"
import './css/mycourse.css'
import MyCourseCard from '../components/MyCourseCard'
import { UserContext } from '../context/UserContext'
import { BsArrowBarDown } from "react-icons/bs";

function MyCourses() {
    const [ courseData, setCourseData] = useState([])
    const { user } = useContext(UserContext);
    const email = user.email

    // const queryString = `?myArray=${encodeURIComponent(JSON.stringify(localStorage.getItem('userCourses')))}`;

    useEffect(()=> {
        axios.get(`http://localhost:4040/api/mycourses/${email}`,
        ).then( 
            res => { 
                // console.log(docs.data)
                setCourseData(res.data.myCourseList)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
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
                        return <MyCourseCard key={obj._id} id={obj._id} name={obj.name} description={obj.description} time={obj.time}/>
                    })}
                </div>
            </div>
          )
    }
}

export default MyCourses;
