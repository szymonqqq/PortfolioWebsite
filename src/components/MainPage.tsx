import React from "react";
import MobileNav from "./MobileNav";
import TypeWriter from "./TypeWriter";
import MainPageImgBox from "./MainPageImgBox";
import AboutMe from "./AboutMe";


const MainPage = () => {

    return(
        <>
        <MobileNav/>
        {/* <TypeWriter text={["Hi,", "I'm Szymon", "Full Stack Developer.", "I'm passionate about", "crafting beautiful", "and intuitive, ", "user interfaces.", "About me ->","Projects ->"]}
        


        
        /> */}
        {/* <MainPageImgBox/> */}
        <AboutMe/>
        
        
        
        </>
    )


}
export default MainPage;