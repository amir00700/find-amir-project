import React from "react";
import{Link} from  "react-scroll";
//react fontawesome imports
import  { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';




const Navbar = ({}) => {
  const [open, setOpen]= useState(false);

  const handleclick = (e) => {
    e.preventDefault();
    const hideMenu =document.getElementById("navbarSupportedContent");
    hideMenu.classList.remove("show");
    const handleToggler = document.getElementById("toggler");
    handleToggler.classList.add("collapsed")
  }

  const handleState =(e) =>{
    e.preventDefault();
    if(open){
      setOpen(false)
    }
    else{
      setOpen(true)
    }
  }
  
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-dark">
         <nav className="navbar  navbar-custom navbar-expand-lg fixed-top">

        <div className="container custom-container">
          
  <Link smooth={true} to="home" className="navbar-brand" href="#">Amir Ahmed</Link >
  <button  id="toggler"  onClick={handleState} className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
    
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
    <ul className="navbar-nav ml-auto" >
      <li className="nav-item active" >
        <Link  onClick={handleclick}
        smooth={true} to="home" offset={-110} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link onClick={handleclick} 
        smooth={true} to="about"  offset={-105} className="nav-link" href="#">About Me</Link>
      </li>
      
      <li className="nav-item">
        <Link onClick={handleclick} 
         smooth={true} to="project" offset={-110}  className="nav-link" href="#">Work</Link>
      </li>
      <li className="nav-item">
         <Link onClick={handleclick} 
          smooth={true} to="contacts" offset={-110} className="nav-link" href="#">Contact Me</Link>
      </li>
      
    </ul>
    
  </div>
  </div>
    </nav>
    )
}

export default Navbar
