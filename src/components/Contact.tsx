import React, { useState } from "react";
import TypeWriterScript from "./TypeWriterScript";
import "./styles/contact.css"
import MainPageImgBox from "./MainPage/MainPageImgBox";
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const [name, setName] = useState(""); 
    const [mail, setMail] = useState("")
    const [text, setText] = useState("")

    const sendMessage = (e:any)=>{
        e.preventDefault(); 
        const templateParams = {
            name: name,
            mail: mail,
            message: text,
          };
          emailjs.send('service_lfqi7ey', 'template_gw0plff', templateParams, {
            publicKey: 'BjFW6sQ53ogJTLOJu',
            }).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (err) => {
      console.log('FAILED...', err);
    },
  );


    } 
    return(
        <div className="contact">
            <TypeWriterScript text={["Contact"]}/>
            <form>
                <input type="text" placeholder="Name" onChange={e=>setName(e.target.value)}/>
                <input type="text" placeholder="e-mail" onChange={e=>setMail(e.target.value)}/>
                <textarea placeholder="Message" onChange={e=>setText(e.target.value)}></textarea>
                <button className="main_btn" onClick={sendMessage}>Sent Message</button>
            </form>
            <MainPageImgBox/>
        </div>
    )

}

export default Contact;