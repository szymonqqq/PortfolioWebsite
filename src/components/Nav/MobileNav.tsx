import React, { useState } from "react";

import '../styles/mobile_nav.css'
import GenerateItems from "./GenerateItems";



const showNav = (classAdd:boolean, setMenu:React.Dispatch<React.SetStateAction<boolean>>, setClassAdd:React.Dispatch<React.SetStateAction<boolean>>) => {
    return(
         <ul className={`mobile_nav ${classAdd?'mobile_unroll':'mobile_roll'}`}>
            {GenerateItems("mobile", setMenu, setClassAdd)}
            {/* {<GenerateItems device="mobile" setMenu={setMenu} setClassAdd={setClassAdd}/>} */}
        </ul>
    )
}



const MobileNav:React.FC = () => {
const [onMenu, setMenu] = useState(false);
const [classAdd, setClassAdd] = useState(false);
return(
    <>
<button onClick={() => {
    if (onMenu) {
        setTimeout(() => {
            setMenu(false);
        }, 500);
    } else {
        setMenu(!onMenu);
    }
    setClassAdd(!classAdd)
}} className="turn_menu">
    {<div className={classAdd?"on_menu":"off_menu"}><span></span><span></span></div>}
</button>        {onMenu&&showNav(classAdd, setMenu, setClassAdd)}
    </>
)



}
export default MobileNav;