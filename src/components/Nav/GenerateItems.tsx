import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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



const GenerateItems = (device:String, setMenu?: React.Dispatch<React.SetStateAction<boolean>>,setClassAdd?: React.Dispatch<React.SetStateAction<boolean>>)=>{
if(device==="mobile" && setMenu && setClassAdd) return GenerateItemsMobile(setMenu, setClassAdd)
else if(device==="pc") return GenerateItemsPc()
}

const GenerateItemsMobile = (setMenu: React.Dispatch<React.SetStateAction<boolean>>, setClassAdd: React.Dispatch<React.SetStateAction<boolean>>) => { return items.map((item)=> (<li key={item.id} onClick={()=>{
    setMenu(prev=>!prev);
    setClassAdd(prev=>!prev)
}}><Link to={item.link}>{item.text}</Link></li>))}

const GenerateItemsPc = () => { return items.map((item)=> (<li key={item.id}><Link to={item.link}>{item.text}</Link></li>))}


export default GenerateItems
