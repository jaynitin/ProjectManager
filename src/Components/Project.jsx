import {useState, useRef} from 'react'
import TaskManager from './TaskManager'

export default function Project({projectID, projectList, editProjectList}){

    let currentData = () => {
        for(let project of projectList){
            if(project.title === projectID)
            return project
        }
    }

    function deleteProject(id){
        editProjectList(id)
    }
    return(
        <> 
            {projectID !== '/0' &&  <div className="project-editor">
                <button className="btn del" onClick={()=>deleteProject(projectID)}>delete</button>
                <div className="project-details">
                    <h1>{currentData().title}</h1>
                    <h1>{currentData().date}</h1>
                    <p>{currentData().desc}</p>
                </div>
                
                <div className="task-manager">
                    <TaskManager/>
                </div>
            </div> }
           
        </>
    )
}