import {useState, useRef} from 'react'

export default function CreateProject({setNewData, toggleWindowBack}){
    const projectTitle = useRef();
    const projectDesc = useRef();
    const dueDate = useRef();

   

    function addDetails(){
        let data = {
            title : projectTitle.current.value,
            desc : projectDesc.current.value,
            date : dueDate.current.value
        }

        setNewData(data)
        toggleWindowBack(false)
    }

    function cancelCreate(){
        toggleWindowBack(false)
    }

    return(
        <>
            <div className="project-maker flex items-center gap-4">
                <form className="mt-4 text-right">
                    <label className="text-sm font-bold uppercase text-stone-500">Title</label>
                    <input ref={projectTitle} className="w-64 px-2 py-1 rounded-sm bg-stone-200" type='text'/>
                    <label className="text-sm font-bold uppercase text-stone-500">Description</label>
                    <textarea ref={projectDesc} className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
                    <label className="text-sm font-bold uppercase text-stone-500">Due Date</label>
                    <input ref={dueDate} className="w-64 px-2 py-1 rounded-sm bg-stone-200" type='date'/>
                </form>

                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={cancelCreate}>Cancel</button>

                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={addDetails}>Save</button>
            </div>    
        </>
    )
}