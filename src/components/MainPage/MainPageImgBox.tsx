import React from "react";
import '../styles/mainPageImgBox.css'
const github: string = require("../../img/github.svg").default;
const linkedin: string = require("../../img/linkedin.svg").default;
const instagram: string = require("../../img/instagram.svg").default;
const MainPageImgBox = () => {


    return(
        <div className="mainImgBox">
           <a href="https://github.com/szymonqqq"><img src={github}/></a> 
           <a href="https://www.linkedin.com/in/szymon-ekman-71734730b/"><img src={linkedin} alt="" /></a>
           <a href="https://www.instagram.com/szymonix9/"><img src={instagram} alt="" /></a>
        </div>
    )
}

export default MainPageImgBox