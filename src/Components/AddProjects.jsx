import {useState, useRef} from 'react'

export default function AddProjects({projectList, toggleWindow, editProject}){
    

    return(
        <>
            <div className="your-projects">
                <h3 className="text-xl font-bold text-stone-700 my-4">Your Projects</h3>
                <button onClick={toggleWindow} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+Add Project</button>
                <ul>

                    {projectList.length>0? projectList.map((project)=>(
                        <li key={project.title}>
                        <button onClick={()=>editProject(project.title)} className="btn">{project.title}</button>
                        </li>
                    )) : <p>No Projects Yet.</p>}
                </ul>
            </div>
        </>
    )
}