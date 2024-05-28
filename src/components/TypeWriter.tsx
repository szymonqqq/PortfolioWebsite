import React, { useEffect, useState } from "react";
import './styles/type_writer.css'




const TypeWriter = () =>{
    const [unvisibleBorder, setuUnvisibleBorder] = useState([])
    const [text, setText] = useState("h isss")
    const [show, setShowText] = useState("")
    let i =0



useEffect(()=>{
    const pp = setInterval(()=>{
        // setShowText((prev) => prev + text[i])
        
       i++
    }, 1000)
    return () => clearInterval(pp); 
   
},[])
console.log(show)
return(
<div className="text_box">
    <p>{show}</p>
    {/* <p>Hi,</p> */}
    {/* <p>I'm Szymon</p> 
    <p>Full Stack Developer.</p>
    <p>I'm passionate about</p> 
    <p>crafting beautiful</p>
    <p>and intuitive</p>
    <p>user interfaces.</p>
   
    <p>About me {"->"}</p>
    <p>Projects{"->"}</p> */}
</div>
)



}
export default TypeWriter;