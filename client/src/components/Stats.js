import React from 'react'
import './css/stats.css'

function Stats() {
  return (
    <div className='stats-wrapper'>
        <h1>Our Impact</h1>
        <h2>So far we have impacted and changed the lives of over 10K + women all across the country</h2>
        <div className='stats-card-wrapper'>
            <div className='stats-card'>
                <img className='stats-img' src='./images/women4.jpg'></img>
                <h1>50+</h1>
                <h3>Programs Posted</h3>
            </div>
            <div className='stats-card'>
                <img className='stats-img' src='./images/women3.jpg'></img>
                <h1>30+</h1>
                <h3>Opportunities Offered</h3>
            </div>
            <div className='stats-card'>
                <img className='stats-img' src='./images/women2.jpg'></img>
                <h1>20+</h1>
                <h3>Courses Created</h3>
            </div>
            <div className='stats-card'>
                <img className='stats-img' src='./images/women1.jpg'></img>
                <h1>5K+</h1>
                <h3>Stories Shared</h3>
            </div>
        </div>
    </div>
  )
}

export default Stats