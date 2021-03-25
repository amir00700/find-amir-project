import React, { useState } from "react";
import emailjs from "emailjs-com";

import {useForm} from "react-hook-form";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const {register,handleSubmit, errors}= useForm();
    const serviceID= "service_ID";
    const templateID="template_ID";
    const userID="user_C6siuBbsI6bK6hhyen6lK";

    const onSubmit =(data,r) => {
        sendEmail(
            serviceID, 
            templateID,
            {
                name: data.name,
                phone: data.name,
                email: data.email,
                subject: data.subject,
                description: data.description

            
        }, 
        userID
        )
        r.target.reset();
    }


    const sendEmail= (serviceID, templateID, variables, userID) => {
       emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form Sent successfully! I'll contact you as soon as possible.");
          }, (error) => {
              console.log(error.text);
          }).catch(err => console.error('Someting went wrong ${err}'));
      }


    return (
        <div className="contacts">
            <div className="text-center">
            <h1>Contact Me</h1>
            <p>Please fill out the form and describe your Project needs and i'll contact 
                you as soon as possible.</p>
                <span className="success-message">{successMessage}</span>
                </div>
                
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">

                            {/* name input */}
                            <div className="text-center">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            ref={
                                register({
                                    required:"Please enter your name",
                                    maxLength:20,
                                    message:"please enter a name with fewer than 20 chracters"
                                })
                            }
                           />
                           <div className="line"></div>
                           </div>
                           <span className="error-message">
                               {
                                   errors.name && errors.name.message}
                               

                           </span>

                            {/* Phone input */}
                            <div className="text-center"> 
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            ref={
                                register({
                                    required:"Please add your phone number",
                                    
                                })
                            }
                           />
                           
                        
                            <div className="line"></div>
                            </div>
                            <span className="error-message">
                               {
                                   errors.phone && errors.phone.message}
                           </span>
                        
                           {/* Email input */}
                           <div className="text-center">
                           <input
                           type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            ref={
                                register({
                                    required:"Please add your Email",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message:"invalid Email"
                                    }
                                    
                                })
                            }
                            
                           />
                           <div className="line"></div>
                           </div>

                            <span className="error-message">
                               {
                                   errors.email && errors.email.message}
                           </span>


                           {/*  Subject input */}
                           <div className="text-center">
                           <input
                           type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                            ref={
                                register({
                                    required:"OOPS! You forget your subject"
                                    
                                    
                                })
                            }
                           />
                           <div className="line"></div>
                           </div>
                           <span className="error-message">
                               {
                                   errors.subject && errors.subject.message}
                           </span>

                        </div>
                        <div className="col-md-6 col-xs-12">
                            
                            {/*  Description */}
                            <div className="text-center">
                           <textarea
                           type="text"
                            className="form-control"
                            placeholder="Please describe shortly your project...."
                            name="description"
                            ref={
                                register({
                                    required:"Please describe your project needs..."
                                })
                            }>
                            </textarea> 
                           <div className="line"></div>
                           </div>
                           <span className="error-message">
                               {
                                   errors.description && errors.description.message}
                           </span>
                        

                           <button className="btn-main-offer contact-btn" type="submit">
                               Contact Me
                           </button>


                            </div>

                    </div>
                    </form>

                </div>

            
        </div>
    )
}

export default Contacts
