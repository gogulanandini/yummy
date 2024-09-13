import React from 'react'
// import Navbar from '../Navbar'
import './style.css'




export default function Menu() {
  return (
    <>
    <section style={{textAlign:'center'}} id='/menu'>
      <div className="container mt-5" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12" id='demo-2'>
          <h5 className='sec-h'>Our Menu</h5>
        <h2 className='section-header-p'>Check Our <span className='section-header-span'>Yummy Menu</span></h2>
        <ul className='list-items'data-aos="fade-up" data-aos-delay="200">
        <li>
          <a>
            <h4 className='section-header-heading' style={{color:'red' }}>Staters</h4>
          </a>
        </li>
        <li>
          <a>
            <h4 className='section-header-h4'>Breakfast</h4>
          </a>
        </li>
        <li>
          <a>
            <h4 className='section-header-h4'>Lunch</h4>
          </a>
        </li>
        <li>
          <a>
            <h4 className='section-header-h4'> Dinner</h4>
          </a>
        </li>
      </ul>
          </div>
          <div className='container'data-aos="fade-up" data-aos-delay="300">
            <div className='row'>
              {/* <div className='col-lg-12'> */}
                <h5>Menu</h5>
                <h2 style={{color:'red'}}>Staters</h2>
              {/* </div> */}
              <div className='col-md-4'>
                <img src="./images/m1.png" style={{width:200,height:200}}/>
                <h4>Magnam Tiste</h4>
                <p>Lorem, deren, trataro, filede, nerada</p>
                <p style={{color:'red'}}>$5.95</p>
              </div>
              <div className='col-md-4'>
                <img src="./images/m2.png" style={{width:200,height:200}}/>
                <h4>Aut Luia</h4>
                <p>Lorem, deren, trataro, filede, nerada</p>
                <p style={{color:'red'}}>$14.95</p>
              </div>
              <div className='col-md-4'>
                <img src="./images/m3.png" style={{width:200,height:200}}/>
                <h4>Est Eligendi</h4>
                <p>Lorem, deren, trataro, filede, nerada</p>
                <p style={{color:'red'}}>$8.9</p>
              </div>
              <div className='col-md-4'>
                <img src="./images/m4.png" style={{width:200,height:200}}/>
                <h4>Eos Luibusdam</h4>
                <p>Lorem, deren, trataro, filede, nerada</p>
                <p style={{color:'red'}}>$12.95</p>
              </div>
              <div className='col-md-4'>
                <img src="./images/m5.png" style={{width:200,height:200}}/>
                <h4>Eos Luibusdam</h4>
                <p>Lorem, deren, trataro, filede, nerada</p>
                <p style={{color:'red'}}>$12.95</p>
              </div>
              <div className='col-md-4'>
                <img src="./images/m6.png" style={{width:200,height:200}}/>
                <h4>Laboriosam Direva</h4>
                <p>Lorem, deren, trataro, filede, nerada</p>
                <p style={{color:'red'}}>$9.95</p>
              </div>
            </div>

          </div>



          
        </div>
        
    
      </div>
      
      
    </section><br /><br />
    
    </>
  )
}

