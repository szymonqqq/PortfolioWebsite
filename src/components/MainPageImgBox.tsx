import React from "react";
import './styles/mainPageImgBox.css'
const github: string = require("../img/github.svg").default;
const linkedin: string = require("../img/linkedin.svg").default;
const instagram: string = require("../img/instagram.svg").default;
const MainPageImgBox = () => {


    return(
        <div className="mainImgBox">
            <img src={github} alt="" />
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
        </div>
    )
}

export default MainPageImgBox