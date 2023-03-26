import React, {useContext, useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { EnrolledCoursesContext } from '../context/EnrolledCoursesContext'
import './css/login.css'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext)
    const { setEnrolledCourses} = useContext(EnrolledCoursesContext)
    // We are destructuring our dispatch function and user object from our custom hook that stores our context

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:4040/api/login", {
            email,
            password
        }).then(
            res => {
                const data = res.data.userInfo
                const courses = res.data.enrolledCourseList
                localStorage.setItem('userInfo', JSON.stringify(data))
                localStorage.setItem('userCourses', JSON.stringify(courses))
                setUser(data)
                setEnrolledCourses(courses)
                //Here is use the dispatch function, specifying an action as well as the payload which is user data
                // this dispatch function provides the action to our reducer function which will them make the necessary changes
                alert("Login Successfull!")
                navigate("/")
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }

  return (
    <div className='login-form-wrapper'>
        <div className='login-form-component'>
            <form className="login-form" onSubmit={handleSubmit}>
                <h1 className='login-title'>Login Page</h1>
                <label>Enter your email : </label>
                <input name='email' type="email" id="email" placeholder="Enter your email" value={email} onChange={handleEmail}></input>
                <br />
                <label>Enter your password : </label>
                <input name='password' type="password" id="password" placeholder="Enter your password" value={password} onChange={handlePassword}></input>
                <div className='login-btn-wrapper'>
                    <button type='submit' className='login-btn' onClick={handleSubmit}>LOGIN</button>
                </div>
                <h1 className='register-link'>Not a user? <Link className="link" to="/register">REGISTER HERE</Link></h1>
            </form>
        </div>
    </div>
  )
}

export default Login;