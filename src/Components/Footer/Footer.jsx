import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
    
  return (
    <div className='footer'id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                   <img src={assets.logo}alt=''/>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vero esse nisi ea repellendus rem, similique est deleniti quis temporibus vitae dolorem aperiam dignissimos enim tempore tenetur voluptatem voluptatibus doloribus!</p>
                      <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                      </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                  <Link to='/' ><li>Home</li></Link>  
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+1-222-456-7746</li>
                <li>company@gmail.com</li>
             </ul>
            </div>
           
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024&copy; Delivery.com-All right Reserved &#174;</p>
    </div>
    
  )
}

export default Footer