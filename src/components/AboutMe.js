import React from "react";
import author from "../aboutme.jpg"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..."/>

                    </div>

                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>Hellow! I am Amir. I'm Full-Stack Web Developer. Technologies I uses is Mern(MongoDB, Express, ReactJS and NodeJS).
                        I create responsive websites that are displayed on all devicec desktop and smartphones.
                        I enjoy building everything small business sites to rich interactive web sites. If you are a busines seeking or a web presence or an employee looking to hire, you can get in touch with me.</p>
                        <a href="#" className="btn-resume">Download Resume</a>
                    
                </div>
    
            </div>
            

            
        </div>
    )
}

export default AboutMe
