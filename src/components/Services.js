import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF,faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faDesktop, faFile, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        
        <div className="services">
            <h1 className="py-5"> My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                               <div className="circle"> <FontAwesomeIcon icon={faDesktop} size="2x"/> </div>.
                                <h3>Web Design</h3>
                                <p> I approach each project individually and always focus on the result</p>

                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"> <FontAwesomeIcon icon={faFileCode} size="2x"/> </div>.
                                <h3>Web Development</h3>
                                <p>Your Websites will be build with an new proven technologies.</p>
                                
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"> <FontAwesomeIcon icon={faFacebookF} size="2x"/> </div>.
                                <h3>Facebook Ads SMM</h3>
                                <p>Your Potential clients well see your services  or product on Facebook.</p>
                                
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"> <FontAwesomeIcon icon={faGoogle} size="2x"/> </div>.
                                <h3>Google Ads</h3>
                                <p> Your services or product will appear at the top of the Google search.</p>
                                
                            </div>
                        </div>


                    
                    </div>
                </div>

            </div>
        
    )

    
}

export default Services
