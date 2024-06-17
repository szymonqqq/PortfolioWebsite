import React, { useEffect, useState } from "react";
import "./styles/typeWriterScript.css"

interface TypeWriterScriptProps {
    text: string[],
    nameClass?: String|undefined;
}

const TypeWriterScript: React.FC<TypeWriterScriptProps> = ({text, nameClass=""}) => {
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

const generateSpan = (txt:String, index:number) => {
    const span = <span style={txt!==text[index]?{borderRight: "2px solid black"}:{borderRight: "2px solid black", animation: "flashSpan .8s 5", animationFillMode: "forwards"}}></span>
   return text.length>1?(txt!==text[index]&&txt!==""?span:""):span

}

const genE = show.map((txt, index,) => (
    
    <p key={index} className={`${nameClass!==undefined?nameClass:""}`} onClick={()=>{
        if(nameClass==="link"){
        if(index==show.length-2) window.location.href = "/about_me";
        else if(index==show.length-1) window.location.href = "/projects";
        }
    }
        }> {txt} {generateSpan(txt, index)}</p>
));





// style={txt!==text[index]&&txt!==""?{borderRight: "1px solid black"}:{}}
// {txt!==text[index]&&txt!==""?<span style={txt!==text[index]?{borderRight: "2px solid black"}:{borderRight: "2px solid black", animation: "flashSpan .8s 5", animationFillMode: "forwards"}}></span>:""}
return(<>
{genE}

</>)

}

export default TypeWriterScript;