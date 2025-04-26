import {useState, useRef} from 'react'


export default function TaskManager(){
    const [taskList, setTaskList] = useState([]);
    const newTask = useRef();

    function addTask(task){
        setTaskList((prevList)=>{
            return [...prevList, task]
        })
    }

    function clearTask(task){
        setTaskList((prevList)=>{
            return prevList.filter(item => item!==task)
        })
    }

    return(
        <>
            <h1>Task Manager</h1>
            <div className="task-contain">
                <div className="add-tasks">
                    <label className="text-sm font-bold uppercase text-stone-500">Task</label>
                    <input ref={newTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200" type='text'/>
                    <button className="btn" onClick={()=>addTask(newTask.current.value)}>Add</button>
                </div>
                <div className="task-list">
                    <ul>
                        {taskList.map((task)=>(
                            <li key={task}>{task}
                            <button className='btn' onClick={()=>clearTask(task)}>clear</button></li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}