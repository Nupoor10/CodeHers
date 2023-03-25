import React, { useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './css/navbar.css'
import { FaCode } from "react-icons/fa";

function Navbar() {

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
                <Link to="/about" className='nav-link'>About</Link>
            </div>
            <div>
                <Link to="/login" className='nav-link'>Login</Link>
            </div>
            <div>
                <Link to="/register" className='nav-link'>Register</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;