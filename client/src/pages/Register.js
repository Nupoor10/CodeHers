import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import './css/register.css'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [about, setAbout] = useState('');
    const [links, setLinks] = useState([]);
    const navigate = useNavigate();

    function handleName(e) {
        const name = e.target.value;
        setName(name);
    }

    function handleEmail(e) {
        const email = e.target.value;
        setEmail(email);
    }

    function handlePassword(e) {
        const password = e.target.value;
        setPassword(password);
    }

    function handleBio(e) {
        const bio = e.target.value;
        setBio(bio);
    }

    function handleFbLink(e) {
        setLinks(links => ([
            ...links,
            e.target.value.toString()
        ]))
    }

    function handleYtLink(e) {
        setLinks(links => ([
            ...links,
            e.target.value.toString()
        ]))
    }

    function handleOtherLink(e) {
        setLinks(links => ([
            ...links,
            e.target.value.toString()
        ]))
    }

    function handleAbout(e) {
        const about = e.target.value;
        setAbout(about);
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            const response = await axios.post("http://localhost:4040/api/register", {
                name,
                email,
                password,
                bio,
                links,
                about
            })
            alert("Successfully Registered!!")
            navigate("/login")
        }
        catch(error) {
            console.log(error)
        } 
    }

    

  return (
    <div className='register-page bg'>
        <form onSubmit={handleSubmit} className="register-form">
            <h1 className='register-title'>SIGN UP TO CONTINUE <BsFillArrowRightCircleFill /></h1>
            <div className='register-part-1'>
                <div className='register-form-1'>
                    <label>Enter your full name : </label>
                    <input name='name' type="text" id="name" placeholder="Enter your full name" onChange={handleName} value={name}></input>
                    <br />
                    <label>Enter your email : </label>
                    <input name='email' type="email" id="email" placeholder="Enter your email" onChange={handleEmail} value={email}></input>
                    <br />
                    <label>Enter your password : </label>
                    <input name='password' type="password" id="password" placeholder="Enter your password" onChange={handlePassword} value={password}></input>
                    <br />
                </div>
                <div className='register-form-2'>
                    <label>Enter your GitHub profile link : </label>
                    <input name='fblink' type="text" id="fblink" placeholder="Enter your GitHub profile link" onChange={handleFbLink} defaultValue={links[0]}></input>
                    <br />
                    <label>Enter your LinkedIn profile link : </label>
                    <input name='ytlink' type="text" id="ytlink" placeholder="Enter your LinkedIn profile link" onChange={handleYtLink} defaultValue={links[1]}></input>
                    <br />
                    <label>Enter your Portfolio link : </label>
                    <input name='otherlink' type="text" id="otherlink" placeholder="Enter your Portfolio link" onChange={handleOtherLink} defaultValue={links[2]}></input>
                    <br />
                </div>
            </div>
            <div className='register-part-2'>
                <label>Enter a bio : </label>
                <textarea  rows="7" cols="100" className='big' name='bio' type="text" id="bio" placeholder="Enter a bio" onChange={handleBio} value={bio}></textarea>
                <br />
                <label>Enter some brief information about yourself : </label>
                <br />
                <textarea  rows="10" cols="50" className='big' name='about' id='about' placeholder='Enter some brief information about yourself' onChange={handleAbout} value={about}></textarea>
            </div>
            <button type='button' className='register-btn' onClick={handleSubmit}>REGISTER</button>
            <h1 className='login-link'>Already a user? <Link className="link" to="/login">LOGIN HERE</Link></h1>
        </form>
    </div>
  )
}

export default Register;