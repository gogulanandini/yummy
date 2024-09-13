import React from 'react'
import './style.css'
import { Link } from 'react-scroll'




export default function Navbar() {
  return (
   <>

<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
  <div className="container">
    <Link className="navbar-brand" to="/"><b>Yummy<span style={{color:'red'}}>.</span></b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home" activeClass='active'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about"  activeClass='active'>About </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/menu"  activeClass='active'>Menu</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact"  activeClass='active'>Contact</Link>
        </li>
     
      
      </ul>
      <form className="d-flex">
        <button className="btn btn-danger" type="submit">Book A Table</button>
      </form>
    </div>
  </div>
</nav>



   
   </>
  )
}
