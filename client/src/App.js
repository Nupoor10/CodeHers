import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Stats from "./components/Stats";
import Services from "./components/Services";
import PopularCoursesSlider from "./components/PopularCoursesSlider";
import Course from './pages/Course'
import SingleCourse from './pages/SingleCourse'
import Categories from "./components/Categories";
import SingleCategory from './pages/SingleCategory'
import MyCourses from './pages/MyCourses'
import MyCoursePage from './pages/MyCoursePage'
import Opportunities from "./pages/Opportunities";
import Events from './pages/Events'

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element = {<Home />}></Route>
              <Route path="/about" element = {<About/>}></Route>          
              <Route path="/register" element = {<Register/>}></Route>          
              <Route path="/login" element = {<Login/>}></Route>         
              <Route path="/profile" element = {<Profile/>}></Route>         
              <Route path="/impact" element = {<Stats/>}></Route>         
              <Route path="/services" element = {<Services/>}></Route>         
              <Route path="/popular" element = {<PopularCoursesSlider/>}></Route>         
              <Route path="/courses" element = {<Course/>}></Route>
              <Route path="/courses/:id" element = {<SingleCourse/>}></Route>
              <Route path="/category" element = {<Categories/>}></Route>
              <Route path="/category/:id" element = {<SingleCategory/>}></Route>   
              <Route path="/opportunity" element = {<Opportunities/>}></Route>   
              <Route path="/events" element = {<Events/>}></Route>   
              <Route path="/mycourses" element = {<MyCourses/>}></Route>
              <Route path="/mycourses/:id" element = {<MyCoursePage/>}></Route>        
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
