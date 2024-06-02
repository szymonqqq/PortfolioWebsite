import React from "react";
import './styles/about_me.css'
import TypeWriter from "./TypeWriter";
import TypeWriterScript from "./TypeWriterScript";
const myImg: string = require("../img/myimg.png");
const ts: string = require("../img/ts.svg").default;
const css: string = require("../img/css3-alt.svg").default;
const html5: string = require("../img/html5.svg").default;
const java: string = require("../img/java.svg").default;
const node: string = require("../img/node.svg").default;
const react: string = require("../img/react.svg").default;
const js: string = require("../img/js.svg").default;
const php: string = require("../img/php.svg").default;

const AboutMe = () => {

return(<div className="about_me">
{/* <h1>About me</h1> */}
<TypeWriterScript text={["About me"]}/>
<div className="profile_photo">
    <div className="my_img"></div>
    <div></div>
</div>
<TypeWriterScript text={["My name is Szymon i live in Poland. For 4 years I create website and aplication. All time I keep growing and trying new things."]}/>



<TypeWriterScript text={["Technologies"]} nameClass={"technologies"}/>
<div className="technologies_img">
    <img src={ts} alt="" />
    <img src={css} alt="" />
    <img src={html5} alt="" />
    <img src={java} alt="" />
    <img src={node} alt="" />
    <img src={react} alt="" />
    <img src={js} alt="" />
    <img src={php} alt="" />
</div>

</div>)



}

export default AboutMe