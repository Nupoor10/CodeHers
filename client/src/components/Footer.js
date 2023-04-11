import React from 'react'
import './css/footer.css'
import { FaCode } from "react-icons/fa";
import { AiFillFacebook, AiOutlineGithub } from "react-icons/ai";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer-distributed">
			<div className="footer-left">
                <h1>C<span><FaCode className='logo'/></span>DEHERS</h1>
				<p className="footer-links">
					<a href="#" className="link-1">Home</a>				
					<a href="#">Services</a>
				
					<a href="#">Courses</a>
				
					<a href="#">Events</a>
					
					<a href="#">Opportunities</a>
					
					<a href="#">Categories</a>
				</p>

				<p className="footer-company-name">CODEHERS © 2015</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@codehers.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					We are on a mission to help women and girls establish a successful career in tech. 
				</p>

				<div className="footer-icons">
					<a href="https://www.facebook.com/"><AiFillFacebook /></a>
					<a href="https://twitter.com/"><BsTwitter /></a>
					<a href="https://www.instagram.com/"><FiInstagram /></a>
					<a href="https://github.com/"><AiOutlineGithub /></a>
					<a href="https://www.youtube.com/"><BsYoutube /></a>
				</div>

			</div>

</footer>
  )
}

export default Footer