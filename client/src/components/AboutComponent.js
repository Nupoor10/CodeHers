import React from 'react'
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import './css/about.css'

function AboutComponent() {
  return (
    <div className='about-component-wrapper'>
      <div className='about-image'>
        <h1>Get Started with your Career Journey</h1>
        <img src='./images/rocket.png' alt='rocket image'></img>
      </div>     
      <div className='about-points'>
        <h3><BsFillBookmarkCheckFill />We equip you with industry relevant skills to jumpstart your career in tech</h3>
        <h3><BsFillBookmarkCheckFill />Learn at your own pace and time with our specially curated courses, mentorships and resources</h3>
        <h3><BsFillBookmarkCheckFill />Whether you are just starting out, restarting after a long break, or making a transition, we support women at all stages of their career</h3>
        <h3><BsFillBookmarkCheckFill />Connect with like minded people and build a culture of learning.</h3>
        <h3><BsFillBookmarkCheckFill />Trusted by over 10K learners who are marking their journey with us</h3>
      </div>
    </div>
  )
}

export default  AboutComponent;