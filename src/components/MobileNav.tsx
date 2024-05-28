import React, { useState } from "react";

import './styles/mobile_nav.css'
const showNav = (classAdd:boolean) => {
    return(
         <ul className={`mobile_nav ${classAdd?'mobile_unroll':'mobile_roll'}`}>
        <li>About me</li>
        <li>Projects</li>
        <li>Contact</li>
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
</button>        {onMenu&&showNav(classAdd)}
    </>
)



}
export default MobileNav;