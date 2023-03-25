import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/header.css'

function Header() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/login")
    }

  return (
    <div className='header-component-wrapper'>
        <div className='header-component-text'>
            <div className='header-greeting'>
                <h1 className='header-greeting-1'>An Inclusive Community for all Women in Tech</h1>
                <h2 className='header-greeting-2'>We <b>EMPOWER</b> women and girls for a flourishing career in technology.</h2>
                <h2 className='header-greeting-3'>Learn from the best instructors in class, Gain valuable mentorships and Attend our world class events. We're with you every step of the way.</h2>
                <div>
                    <button type='button' className='header-btn' onClick={handleClick}>GET STARTED</button>
                </div>
            </div>
        </div>
        <div className='header-component-image'>
            <div className='header-image-collage'>
                <img src='./images/image1.jpg' className='header-image1'/>
                <img src='./images/image2.jpg' className='header-image2'/>
            </div>
            <img src='./images/image3.jpg' className='header-image3'/>
        </div>
    </div>
  )
}

export default Header