import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
        <div className="main-info">
            <h1>Amir Ahmed</h1>
            <Typed
            className="typed-text"
            strings={["Web Designer", "Web Deverloper","Software Developer"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            <a href="#" className="btn-github">Github</a>


        </div>
        
        </div>
    )
}

export default Header