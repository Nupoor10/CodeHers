import React from 'react'
import './css/coursecard.css'
import { MdTimelapse } from "react-icons/md";
import { Link } from 'react-router-dom';

function CourseCard(props) {

  const id = props.id;

  return (
    <div className='course-card-wrapper'>
      <div>
          <img src={props.src} className='course-card-image'></img>
      </div>
      <div className='course-card-details'>
        <h1 className='course-heading'>{props.name}</h1>
        <p className='course-description'>{props.description}</p>
        <p className='course-duration'> <MdTimelapse /> {props.time}</p>
        <button type='button' className='view-course-btn'>
          <Link className='btn-link' to={"/"}>VIEW COURSE</Link>
        </button>
      </div>
    </div>
    
  )
}

export default CourseCard;
