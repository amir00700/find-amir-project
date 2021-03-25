import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faTwitter,
    faGit,
    faReddit
  } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>31 Corbett drive barrie,ON</p>

                        </div>
                        <div className="d-flex">
                            <a href="tel: +1 705-331-1717"> +1 705 331 1717</a>
                        </div>
                        <div className="d-flex">
                            <p>Amir.ahmed79@outlook.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About Me</a>
                                <br/>
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Projects</a>
                                <br/>
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                        <a href="https://github.com/amir00700"
                            className="git social">
                            <FontAwesomeIcon icon={faGit} size="2x" />
                            </a>
                            <a href="https://www.facebook.com/amir.khan.7902/"
                            className="facebook social">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://twitter.com/AmirAhm05290311" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.linkedin.com/in/amir-ahmed-828478164/"
                            className="linkedin social">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <a href="https://www.reddit.com/user/Amir--Ahmed"
                            className="Reddit social">
                            <FontAwesomeIcon icon={faReddit} size="2x" />
                            </a>
                           
                            
                        </div>

                        <p className="pt-3 text-center">
                            Copyright&copy;
                            
                                {new Date().getFullYear()}&nbsp;Amir Ahmed | ALL Rights Reserved.
                            
                        </p>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Footer
