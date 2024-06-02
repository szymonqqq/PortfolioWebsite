import React, {useState} from "react"
import TypeWriterScript from "./TypeWriterScript";
import "./styles/projects.css"
const worklyImg: string = require("../img/workly.png");

const infoAboutProjects = [{
    id: 0,
    name: "Workly", 
    linkImg: worklyImg,
    githubLink: "https://github.com/szymonqqq/workly",
    description: "Workly is advanced React aplication. You can plan your day, write a note, save important information, create your own flashcard and a lot more..."
},
{
    id: 0,
    name: "Workly", 
    linkImg: worklyImg,
    githubLink: "https://github.com/szymonqqq/workly",
    description: "Workly is advanced React aplication. You can plan your day, write a note, save important information, create your own flashcard and a lot more..."

}

]


interface Project {
    id: number;
    name: string;
    description: string;
    linkImg: string;
    githubLink: string,
}

interface ProjectsBoxProps {
    project: Project;
}




const ProjectBox: React.FC<ProjectsBoxProps>  = ({project}) => {
   const [moreInfo, setMoreInfo] = useState(false)
   const [styleMoreInfo, setStyleMoreInfo] = useState(false)
    return(
        <div className="project_box" key={project.id}>
            <img src={project.linkImg} alt="" />
            <h2>{project.name}</h2>
            <a href={project.githubLink}>check on Github</a>
            <div className="description_box">
                 {moreInfo &&<p className={`description ${styleMoreInfo ? "roll_dsc" : "unroll_dsc"}`}>{project.description}</p>}
            </div>
            <button onClick={()=>{     setStyleMoreInfo(prev=>!prev)
              moreInfo?setTimeout(()=>setMoreInfo(prev=>!prev), 11000):setMoreInfo(true)
           
                }
                
                }>{moreInfo?"Colapse": "See more"}</button>
           

        </div>
    )



}

const ProjectList = () => {
    return (
        <>
            {infoAboutProjects.map(project => (
                <ProjectBox key={project.id} project={project}/>
            ))}
        </>
    );
}

const Projects = ( ) => {

return(
<div className="projects">
    <TypeWriterScript text={["Projects"]}/>
    <ProjectList/>
</div>


)


};

export default Projects