import React from "react";
import Project1 from "../images/ipad.jpg";
import Project2 from "../images/iphone5.jpg";
import Project3 from "../images/iphone12.jpg";
import Project4 from "../images/macbook.jpg";
import Project5 from "../images/portfolio.jpg";
//fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//React popupbox
import{ PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Projects = () => {
    
        //project1
    const openPopupboxProject1 = () => {
    
            const content = (
        <>
        <img  className="project-image-popupbox"src={Project1} alt=" project 1 "/>
        <p>Hellow! I am Amir. I'm Full-Stack Web Developer.</p>
        <b>Github:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/amir00700/Comp2068-LAB1-")}>
        https://github.com/amir00700/Comp2068-LAB1-
        </a>

        </>

        )
        PopupboxManager.open({ content })

    }

    const popupboxConfigProject1 = {
        titleBar: {
            enable: true,
            text: "project1"

        },

        fadeIn: true,
        fadeInSpeed: 500 

    }

    //projec2
    const openPopupboxProject2 = () => {
    
        const content = (
    <>
    <img  className="project-image-popupbox"src={Project2} alt=" project 1 "/>
    <p>ggg</p>
    <b>Github:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/amir00700/Comp2068-LAB1-")}>
    https://github.com/amir00700/Comp2068-LAB1-
    </a>

    </>

    )
    PopupboxManager.open({ content })

}

const popupboxConfigProject2 = {
    titleBar: {
        enable: true,
        text: "Project2"

    },

    fadeIn: true,
    fadeInSpeed: 500 

}

 //project3

  const openPopupboxProject3 = () => {
    
    const content = (
<>
<img  className="project-image-popupbox"src={Project3} alt=" Project3"/>
<p>ggg</p>
<b>Github:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/amir00700/Comp2068-LAB1-")}>
https://github.com/amir00700/Comp2068-LAB1-
</a>

</>

)
PopupboxManager.open({ content })

}

const popupboxConfigProject3= {
titleBar: {
    enable: true,
    text: "Project3"

},

fadeIn: true,
fadeInSpeed: 500 

}

//project4

const openPopupboxProject4 = () => {
    
    const content = (
<>
    < img className="project-image-popupbox"src={Project4} alt=" Project4..."/>
<p>lorem200
</p>
<b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/amir00700/Comp2068-LAB1-")}>
https://github.com/amir00700/Comp2068-LAB1</a>

</>

)
PopupboxManager.open({ content })

}

const popupboxConfigProject4= {
titleBar: {
    enable: true,
    text: "Project4"

},

fadeIn: true,
fadeInSpeed: 500 

}


    return (
        <div id="project" className="project-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="project-image-box" onClick={openPopupboxProject1}>
                    <img className="project-image" src={Project1} alt="project1.."/>
                    <div className="overflow"> </div>
                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                </div>
                {/* -*/}
                <div className="project-image-box" onClick={openPopupboxProject2}>
                    <img className="project-image" src={Project2} alt="project2.."/>
                    <div className="overflow"> </div>
                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                </div>
                {/* -*/}
               
                <div className="project-image-box" onClick={openPopupboxProject3}>
                    <img className="project-image" src={Project3} alt="project3.."/>
                    <div className="overflow"> </div>
                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                </div>
                
                {/* -*/}
            
                <div className="project-image-box" onClick={openPopupboxProject4}>
                    <img className="project-image" src={Project4} alt="project3.."/>
                    <div className="overflow"> </div>
                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                </div>
                
                
{/* 
                {/* -*/}
                
                {/* {/* <div className="project-image-box">
                    <img className="project-image" src={Project5} alt="Portfolio React Project...."/>
                    <div className="overflow"> </div>
                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                
                </div>  */}
                
            



            </div>
            </div>
            <PopupboxContainer {...popupboxConfigProject1}/>
            <PopupboxContainer {...popupboxConfigProject2}/>
            <PopupboxContainer {...popupboxConfigProject3}/>
            <PopupboxContainer {...popupboxConfigProject4}/>

            </div>
            
        
    )
}

export default Projects
