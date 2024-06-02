import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './styles/mobile_nav.css'

interface ListItem {
    id: number;
    text: string;
    link: string;
  }

const items: ListItem[] = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'About me', link: '/about_me'  },
    { id: 3, text: 'Projects', link: '/projects'  },
    { id: 4, text: 'Contact', link: '/contact'  },
  ];
  


const showNav = (classAdd:boolean, setMenu:React.Dispatch<React.SetStateAction<boolean>>, setClassAdd:React.Dispatch<React.SetStateAction<boolean>>) => {
    return(
         <ul className={`mobile_nav ${classAdd?'mobile_unroll':'mobile_roll'}`}>
            {generateItems(setMenu, setClassAdd)}
        </ul>
    )
}

const generateItems = (  
    setMenu: React.Dispatch<React.SetStateAction<boolean>>,
    setClassAdd: React.Dispatch<React.SetStateAction<boolean>>) => { return items.map((item)=> (<li key={item.id} onClick={()=>{
    setMenu(prev=>!prev);
    setClassAdd(prev=>!prev)
}}><Link to={item.link}>{item.text}</Link></li>))}

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