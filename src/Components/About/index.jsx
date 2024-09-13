import React from 'react'
import Navbar from '../Navbar'
import './style.css'
import CountUp from 'react-countup';
import { BiCheckDouble } from "react-icons/bi";
import { BsClipboard2DataFill } from "react-icons/bs";
import { BsGem } from "react-icons/bs";
import { SiDatabricks } from "react-icons/si";

export default function About () {
  return (
   <>
   <section id='/about'>
    <div className="container " data-aos="fade-up">
      <div className="row">
      <div className='col-lg-12' id='demo-1' data-aos="fade-up" data-aos-delay="150"> 
          <h5 className='section-header-h1' style={{textAlign:'center'}}>About Us</h5>
          <h2 className='section-header-p' style={{textAlign:'center'}}>Learn More <span className='section-header-span'>About Us</span></h2>
        </div>
        <div className='col-lg-6' data-aos="fade-up" data-aos-delay="150">
        <img src="./images/img2.jpg" id='img'/>
        <div className='call-us-section' >
            <h4>Book A Table</h4>
            <p style={{color:'red' ,fontSize:'25px'}}>+1 5589 55488 55</p>
          </div>

        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Sit excepturi non ea! Commodi ratione amet earum quibusdam odio vel explicabo quaerat ad libero nemo. 
              Optio repudiandae inventore placeat enim aspernatur.</p>
              <ul>
               <li > <BiCheckDouble style={{color:'red',}} size={25}/>  Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li> <BiCheckDouble style={{color:'red',}} size={25}/> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><BiCheckDouble style={{color:'red',}} size={25}/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>

              </ul>
              <p> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident

              </p>
              <img src="./images/img3.jpg" id='img1'/>
        </div>
        
      </div>
    </div>
   </section>
<section id="why-us" className="why-us section-bg">
  <div className="container" data-aos="fade-up">
    <div className="row gy-4">
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
        <div className="why-box">
          <h3>Why Choose Yummy?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
          </p>
          <div className="text-center">
            <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right" /></a>
          </div>
        </div>
      </div>{/* End Why Box */}
      <div className="col-lg-8 d-flex align-items-center">
        <div className="row gy-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-box d-flex flex-column justify-content-center align-items-center">
            <div className='icon-container'>
              <BsClipboard2DataFill size={30} style={{color:'red'}}/>

              </div>
              <h4>Corporis voluptates officia eiusmod</h4>
              <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>
          </div>{/* End Icon Box */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-box d-flex flex-column justify-content-center align-items-center">
            <div className='icon-container'>
              <BsGem size={30} style={{color:'red'}}/></div>

              <h4>Ullamco laboris ladore pan</h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </div>
          </div>{/* End Icon Box */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="icon-box d-flex flex-column justify-content-center align-items-center">
            <div className='icon-container'>
              <SiDatabricks size={30} style={{color:'red'}}/></div>

              <h4>Labore consequatur incidid dolore</h4>
              <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
            </div>
          </div>{/* End Icon Box */}
        </div>
      </div>
    </div>
  </div>
</section>

   <section id="bgimg" className="stats-counter">
  <div className="container" >
    <div className="row gy-4">
      <div className="col-md-3 col-md-6" id='col-1'>
        <div className="stats-item text-center w-100 h-100">
        <h2><CountUp start={0} end={232} duration={2} delay={0}/></h2>

          <p>Clients</p>
        </div>
      </div>{/* End Stats Item */}
      <div className="col-md-3 col-md-6"id='col-1'>
        <div className="stats-item text-center w-100 h-100">
        <h2><CountUp start={0} end={521} duration={2} delay={0}/></h2>
          <p>Projects</p>
        </div>
      </div>{/* End Stats Item */}
      <div className="col-md-3 col-md-6" id='col-1'>
        <div className="stats-item text-center w-100 h-100">
        <h2><CountUp start={0} end={1453} duration={2} delay={0}/></h2>
          <p>Hours Of Support</p>
        </div>
      </div>{/* End Stats Item */}
      <div className="col-md-3 col-md-6" id='col-1'>
        <div className="stats-item text-center w-100 h-100">
        <h2><CountUp start={0} end={32} duration={2} delay={0}/></h2>
          <p>Workers</p>
        </div>
      </div>{/* End Stats Item */}
    </div>
  </div>
</section>

   </>
  )
}
