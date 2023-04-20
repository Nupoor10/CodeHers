import React from 'react'
import { Link } from 'react-router-dom';
import './css/mycoursecard.css'
import { MdTimelapse } from "react-icons/md";

function MyCourseCard(props) {

  const { id, name, description, time, imgURL } = props

  return (
    <div className='my-course-card-wrapper'>
      <div>
          <img src={imgURL} className='my-course-card-image'></img>
      </div>
      <div className='my-course-card-details'>
        <h1 className='my-course-heading'>{name}</h1>
        <p className='my-course-description'>{description}</p>
        <p className='my-course-duration'> <MdTimelapse /> {time}</p>
        {/* <div className='my-course-completion'>
          <p className='my-completed-text-1'>Completed : 38% complete</p>
          <div className='my-complete-counter'></div>
        </div>  */}
      </div>
      <button type='button' className='my-view-course-btn'>
        <Link className='btn-link' to={`/mycourses/${id}`}>GO TO COURSE</Link>
        </button>
    </div>
  )
}



export default MyCourseCard;
