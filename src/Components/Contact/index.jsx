import React from 'react'
import Navbar from '../Navbar'
import './style.css'
import { FaMap } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { RiTwitterLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
export default function Contact() {
  return (
  <>
  

        
  <section id="/contact" className="contact">
  <div className="container" data-aos="fade-up">
    <div className="section-header" style={{textAlign:'center'}} id='demo-3'>
      <h5>Contact</h5>
      <h2>Need Help? <span style={{color:'red'}}>Contact Us</span></h2>
    </div>
    <div className="mb-3">
      <iframe style={{border: 0, width: '100%', height: 350}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen />
    </div>
   
    <div className="row gy-4">
      <div className="col-md-6">
        <div className="info-item  d-flex align-items-center" style={{background: '#f4f4f4', padding: 30, height: 100}}>
          <div className='icon-container2'>
          <FaMap size={30} style={{color:'white'}}/> 

          </div>
          <div  style={{paddingLeft:20}}>
            <h3>Our Address</h3>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>
      </div>{/* End Info Item */}
      <div className="col-md-6">
        <div className="info-item d-flex align-items-center" style={{background: '#f4f4f4', padding: 30, height: 100}}>
          <div className='icon-container2'>
        <MdEmail size={30} style={{color:'white'}}/> 

          </div>
          <div  style={{paddingLeft:20}}>
            <h3>Email Us</h3>
            <p>contact@example.com</p>
          </div>
        </div>
      </div>{/* End Info Item */}
      <div className="col-md-6">
        <div className="info-item  d-flex align-items-center" style={{background: '#f4f4f4', padding: 30, height: 100}}>
          <div className='icon-container2'>
        <IoCall size={30} style={{color:'white'}} />

          </div>

          <div  style={{paddingLeft:20}}>
            <h3>Call Us</h3>
            <p>+1 5589 55488 55</p>
          </div>
        </div>
      </div>{/* End Info Item */}
      <div className="col-md-6">
        <div className="info-item  d-flex align-items-center" style={{background: '#f4f4f4', padding: 30, height: 100}}>
          <div className='icon-container2'>
        <FaShareAlt size={30} style={{color:'white'}}/>

          </div>
          <div style={{paddingLeft:20}}>
            <h3>Opening Hours</h3>
            <div><strong>Mon-Sat:</strong> 11AM - 23PM;
              <strong>Sunday:</strong> Closed
            </div>
          </div>
        </div>
      </div>{/* End Info Item */}
    </div>
    

    
  </div>


      <form action="">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <input type="text" className='form-control' placeholder='Your Name'id='Name' required/>
            </div>
            <div className="col-md-6">
              <input type="email" className='form-control' placeholder='Your Email'id='email' required/>
            </div><br /><br /><br />
            <div className="col-md-12">
              <input type="text" className='form-control' placeholder='Subject'id='Subject' required/>
            </div><br /><br />
            <div className="col-md-12">
              <textarea className="form-control" id="Message" rows={5} placeholder='Message' required></textarea>
            </div>
            <div style={{textAlign:'center'}} className='button mt-3'>
              <button type='submit' className='btn btn-danger btn rounded-pill'>Send Message</button>
            </div>
          </div>
        </div>
      </form>
 
    
    </section><br /><br />
   <footer id="footer" className="footer">
  <div className="container">
    <div className="row gy-3">
      <div className="col-lg-3 col-md-6 d-flex">
      <IoLocationOutline size={35} />&nbsp;&nbsp;
        <div>
          <h4>Address</h4>
          <p >
            A108 Adam Street <br />
            New York, NY 535022 - US<br />
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 footer-links d-flex">
      <IoCallOutline size={35} />&nbsp;&nbsp;
        <div>
          <h4>Reservations</h4>
          <p >
            <strong>Phone:</strong> +1 5589 55488 55<br />
            <strong>Email:</strong> info@example.com<br />
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 footer-links d-flex">
      <MdAccessTime size={35}/>&nbsp;&nbsp;
        <div>
          <h4>Opening Hours</h4>
          <p >
            <strong>Mon-Sat: 11AM</strong> - 23PM<br />
            Sunday: Closed
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Follow Us</h4>
        <div className="social-links d-flex">
          <a href="#" className="twitter"><RiTwitterLine size={25}/></a>&nbsp;
          <a href="#" className="facebook"><FaFacebook size={25}/></a>&nbsp;
          <a href="#" className="instagram"><IoLogoInstagram size={25}/></a>&nbsp;
          <a href="#" className="linkedin"><AiOutlineLinkedin size={25}/></a>&nbsp;
        </div>
      </div>
    </div>
  </div>
  <hr style={{width:1200,marginLeft:'95px'}}/>
  <div className="container" style={{textAlign:'center'}}>
    <div className="copyright">
      © Copyright <strong><span>Yummy</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
     
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</footer>


    </>
  )
}
