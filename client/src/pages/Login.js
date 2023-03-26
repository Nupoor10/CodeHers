import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './css/login.css'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
      e.preventDefault();
      alert("You have sucessfully logged in!")
      navigate("/")
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