import React from 'react'
import './css/home.css'
import AllCoursesSlider from '../components/AllCoursesSlider'
import AboutComponent from '../components/AboutComponent'
import PopularCoursesSlider from '../components/PopularCoursesSlider'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Stats from '../components/Stats'
import Services from '../components/Services'

function Home() {
  return (
    <div className='home-wrapper'>
      <Header />
      <AboutComponent />
      <br />
      <Stats />
      <br />
      <Services />
      <br />
      <AllCoursesSlider />
      <br />
      <Categories />
      <br />
      <PopularCoursesSlider />
      <br />
    </div>

  )
}

export default Home