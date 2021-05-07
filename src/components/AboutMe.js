import React from "react";
import author from "../images/propic.jpg"
import resume from "../Documents/resume.pdf"


const AboutMe = () => {
    return (
        <div id="about" className="container py-5 about-wrapper" >
            <div className="row">
                <div className="col-lg-6 col-xm-12">

                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />

                    </div>

                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>I'm a Web Developer and programmer.I create responsive websites that are displayed on all devices desktops and smartphones. I enjoy building everything from small business sites to rich interactive websites. 
                        If you are a business seeking or a web presence or an employee looking to hire, you can get in touch with me.</p>
                    <a href={resume}  target = "_blank" className="btn-resume">Download Resume</a>

                </div>
            </div>
        </div>
    )
}

export default AboutMe
