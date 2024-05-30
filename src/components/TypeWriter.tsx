import React, { useEffect, useState } from "react";
import './styles/type_writer.css'


interface TypeWriterProps {
    text: string[];
}

const TypeWriter: React.FC<TypeWriterProps>= ({text}) =>{
    const [unvisibleBorder, setuUnvisibleBorder] = useState([])
    const [show, setShowText] = useState<string[]>(text.map(()=>""))
    let i = 0
    let j=0
  
useEffect(()=>{
    const pp = setInterval(()=>{
        
   
     
        if(i<=text[j].length-1){
            let txt = show[j] + text[j][i]
            show[j] = txt
       
            setShowText(prev =>{
                let updatedShow = [...prev]; 
                updatedShow[j]=txt
                return updatedShow;
            }
          
            )
            i++
        }
           else if(j<text.length-1){
            j++
            i=0
            
           }
        
       
    }, 100)
   
    return () => clearInterval(pp); 
 
   
    
},[text])
const genE = show.map((txt, index) => (
    <p key={index} style={txt!==text[index]&&txt!==""?{borderRight: "1px solid black"}:{}}> {txt}</p>
));
return(
<div className="text_box">
   

    {genE}  
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