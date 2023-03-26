import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/services.css'

function Services() {
  const navigate = useNavigate();

  return (
    <div className='services-wrapper'>
      <h1>What we Offer</h1>
      <h2>We are on a mission to help women and girls establish a successful career in tech. 
      Women in our country lack access to quality education services and opportunites despite their potential.
      Especially in the technology sector, women are an underepresented group and more and more companies and pushing towards being more inclusive.
      We want to bridge this gap between the industry demand and candidates by helping them progress in their journey towards a thriving career.</h2>
      <div className='services-card-wrapper'>
        <div className='services-card' onClick={() => {navigate("/courses")}}>
          <img className='services-img' src='./images/webinar (1).png'></img>
          <h2>Courses</h2>
        </div>
        <div className='services-card' onClick={() => {navigate("/events")}}>
          <img className='services-img' src='./images/events.png'></img>
          <h2>Events</h2>
        </div>   
        <div className='services-card' onClick={() => {navigate("/opportunity")}}>
          <img className='services-img' src='./images/opportunity.png'></img>
          <h2>Opportunites</h2>
        </div>  
        </div>
    </div>
  )
}

export default Services