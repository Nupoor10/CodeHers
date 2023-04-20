import React, { useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'
import { EnrolledCoursesContext } from '../context/EnrolledCoursesContext';
import './css/navbar.css'
import { FaCode } from "react-icons/fa";

function Navbar() {
    const { user, setUser } = useContext(UserContext);
    const { enrolledCourses, setEnrolledCourses } = useContext(EnrolledCoursesContext);
    const navigate = useNavigate()

    function handleLogout()  {
        console.log("Logged Out");
        localStorage.removeItem('userInfo')
        localStorage.removeItem('userCourses')
        setUser(null)
        setEnrolledCourses([])
        alert("Logged Out")
        navigate("/login")
      }

  return (
    <div className='navbar-wrapper'>
        <div className='navbar-logo-wrapper'>
            <h2>C<span><FaCode className='logo'/></span>DEHERS</h2>
        </div>
        <div className='navbar-component'>
            <div>
                <Link to="/" className='nav-link'>Home</Link>
            </div>
            <div>
                <Link to="/events" className='nav-link'>Events</Link>
            </div>
            <div>
                <Link to="/opportunity" className='nav-link'>Opportunities</Link>
            </div>
            <div>
                <Link to="/resources" className='nav-link'>Resources</Link>
            </div>
            <div>
                <Link to="/courses" className='nav-link'>Courses</Link>
            </div>
            { user && (
                <div>
                    <Link to="/mycourses" className='nav-link'>My Courses</Link>
                </div>)}
           { user && (
                <div>
                    <Link onClick={handleLogout} className='nav-link'>LOGOUT</Link>
                </div>)}
            {!user && (
                <div>
                    <Link to="/login" className='nav-link'>GET STARTED</Link>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar;