import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import  { useState } from 'react';


function App() {
 
  return (
    
    <>
    <Particles
    className="particles-canvas"
    params={{
      particles:{
        number:{
          value:30,
          density:{
            enable: true,
            value_area: 900
          }
        },
        shape: {
          type: "star",
          stroke:{
            width: 6,
            color: "#DC143C"
          }
        }
      }

    }}
      />
    <Navbar />
    <Header/>
    <AboutMe/>
    <Services/>
    <Projects/>
    <Contacts/>
    <Footer/>
    </>
  );
}

export default App;
