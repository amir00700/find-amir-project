import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home"className="header-wraper">
        <div className="main-info">
            
            <Typed
            className="typed-text"
            strings={["Web Designer", "Web Deverloper","Computer Programmer"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            <a href="https://github.com/amir00700" className="btn-github">Github</a>


        </div>
        
        </div>
    )
}

export default Header
