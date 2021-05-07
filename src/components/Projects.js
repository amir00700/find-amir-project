import React from "react";
import reactTaskTracker from "../images/Task-tracker.jpg";
import reactMusicPlayer from "../images/React-music.jpg";
import triggerApp from "../images/Trigger-App.jpg";
import Project4 from "../images/propic.jpg";
// import Project5 from "../images/portfolio.jpg";
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
                <img  className="project-image-popupbox"src={reactTaskTracker} alt="react Task Tracker App"/>
                <p>Technolgy used: React.js</p>
                <b>Github:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/amir00700/React-Task-Tracker-App")}>
                Source Code
                </a>
                </>
                )
                PopupboxManager.open({ content });
                PopupboxManager.update({
                    content,
                    config: {
                        titleBar:{
                        text:" React Task Tracker"
                        },
                    },
                })
            }
            const popupboxConfigTaskTracker = {
                titleBar: {
                    enable: true,
                    text: "Project"
                },
                fadeIn: true,
                fadeInSpeed: 500 

            }

            //projec2
            const openPopupboxProject2 = () => {
            const content = (
            <>
            <img  className="project-image-popupbox"src={reactMusicPlayer} alt="react music player "/>
            <p>Technolgy used: React.js</p>
            <b>Demo</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/amir00700/React-Music-player")}>
            Source Code </a>
            <br/>
            <b>Github:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/amir00700/React-Music-player")}>
            Source Code
            </a>
            </>
            )
            PopupboxManager.open({ content })
            PopupboxManager.update({
                content,
                config: {
                    titleBar:{
                    text:" React Music Player App"
                    },
                },
            })
        }
            const popupboxConfigProject2 ={
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
            <img  className="project-image-popupbox"src={triggerApp} alt=" Project3"/>
            <p>Technology used:React,Redux</p>
            <b>Demo</b> <a className="hyper-link" onClick={()=> window.open("https://adoring-boyd-b83e43.netlify.app")}>
            Live Link </a> 
            
            <br/>
            <b>Github:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/amir00700/Trigger-App")}>
            Source code
            
            </a>
             </>

                )
            PopupboxManager.open({ content })
            PopupboxManager.update({
                content,
                config: {
                    titleBar:{
                    text:" Trigger App"
                    },
                },
            })

            }
             const popupboxConfigProject3= {
                titleBar: {
                enable: true,
                text: "Project3"
            },
             fadeIn: true,
            fadeInSpeed: 500,
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
                PopupboxManager.update({
                    content,
                    config: {
                        titleBar:{
                        text:" React Task Tracker App"
                        },
                    },
                })

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
        <div  id="project" className="project-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Work</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="project-image-box" onClick={openPopupboxProject1}>
                    <img className="project-image" src={reactTaskTracker} alt="project1.."/>
                    <div className="overflow"> </div>
                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                </div>
                {/* -*/}
                <div className="project-image-box" onClick={openPopupboxProject2}>
                    <img className="project-image" src={reactMusicPlayer} alt="project2.."/>
                    <div className="overflow"> </div>
                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                </div>
                {/* -*/}
                <div className="project-image-box" onClick={openPopupboxProject3}>
                    <img className="project-image" src={triggerApp} alt="project3.."/>
                    <div className="overflow"> </div>
                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                </div>
                {/* -*/}
                <div className="project-image-box" onClick={openPopupboxProject4}>
                    <img className="project-image" src={Project4} alt="project4 .."/>
                    <div className="overflow"> </div>
                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                </div>
            </div>
            </div>
            
            <PopupboxContainer {...popupboxConfigTaskTracker} />
            <PopupboxContainer {...popupboxConfigProject2} />
            <PopupboxContainer {...popupboxConfigProject3} />
            

           
        </div>
        
    )
}

export default Projects;

