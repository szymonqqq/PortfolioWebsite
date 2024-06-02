import React, { useEffect, useState } from "react";
import './styles/type_writer.css'
import TypeWriterScript from "./TypeWriterScript";



const TypeWriter= () =>{
  
return(
<div className="text_box">
   
{/* <TypeWriterScript text={} */}
     <TypeWriterScript text={["Hi,", "I'm Szymon", "Full Stack Developer.", "I'm passionate about", "crafting beautiful", "and intuitive, ", "user interfaces.", "About me ->","Projects ->"]}/>
     {/* <TypeWriterScript text={["Hi, I'm Szymon Full Stack Developer. I'm passionate about crafting beautiful and intuitive, user interfaces. ", "About me ->", " Projects ->"]}/> */}

    
    
    {/* {genE}   */}
     {/* <p>Hi,</p> 
    <p>I'm Szymon</p> 
    <p>Full Stack Developer.</p>
    <p>I'm passionate about</p> 
    <p>crafting beautiful</p>
    <p>and intuitive</p>
    <p>user interfaces.</p>
   
    <p>About me {"->"}</p>
    <p>Projects{"->"}</p>  */}
</div>
)



}
export default TypeWriter;