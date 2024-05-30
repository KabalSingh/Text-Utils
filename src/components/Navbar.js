import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";



export default function Navbar(props) {



  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/About">{props.aboutText}</Link>
            </li>
          </ul>
          <div className='mx-3'>
            <p>Select color from pallete to
              <br />  change background color</p>
          </div>
          <div className='pallete mx-2' style={{height:'50px',width:'150px',backgroundColor:'black' ,display:'block', justifyContent:'center'}}>
            <div className="container1" style={{height:'25px',width:'150px',display:'flex'}}>
              <div className="a1"  style={{ height: '25px', width: '50px', backgroundColor: 'white' }} onClick={() => {props.backColor('white')}}></div>
              <div className="a2" style={{height:'25px',width:'50px',backgroundColor:'red'}} onClick={() => {props.backColor('red')}}></div>
              <div className="a3" style={{height:'25px',width:'50px',backgroundColor:'blue'}} onClick={() => {props.backColor('blue')}}></div>
            </div>
            <div className="container2" style={{height:'25px',width:'150px',display:'flex'}}>
              <div className="a4" style={{height:'25px',width:'50px',backgroundColor:'yellow'}} onClick={() => {props.backColor('yellow')}}></div>
              <div className="a5" style={{height:'25px',width:'50px',backgroundColor:'grey'}} onClick={() => {props.backColor('grey')}}></div>
              <div className="a6" style={{height:'25px',width:'50px',backgroundColor:'orange'}} onClick={() => {props.backColor('orange')}}></div>
            </div>
          </div>
          <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      </nav>
     
  )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About',
};
