import React from "react";
import "../styles/pc_nav.css"
import GenerateItems from "./GenerateItems";


const PcNav=()=>{

return(
    <ul className="pc_nav">
     {GenerateItems("pc")}
    </ul>
)


}

export default PcNav;