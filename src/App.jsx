import {useState,useRef} from 'react'
import AddProjects from './Components/AddProjects';
import CreateProject from './Components/CreateProject';
import Project from './Components/Project';
import NoProject from './Components/NoProject';

let component;

function App() {
  const [projectList, setProjectList] =useState([]);
  const [isCreating, setCreating] = useState(false);
  const [editProject, setEditProject] = useState(false);
  const [projectID, setProjectID] = useState("");
  

  function setNewData(data){
    setProjectList(prevlist => [...prevlist, data]);
  }

  function toggleWindow(){
    setCreating(true)
  }

  function toggleWindowBack(){
    setCreating(false)
  }

  function toggleEditor(id){
    setProjectID(id)
    setEditProject(true)
  }

  function editProjectList(id){
    setProjectList((prevList)=>prevList.filter(item => item.title !== id))
    setProjectID("/0")
  }

  function setDisplayStat(){
    if(isCreating){
      return 'create'
    }
    if(editProject && projectID !== '/0'){
      return 'edit'
    }
    return 'noprojects'
  }

    let stat = setDisplayStat();

    switch(stat){
      case 'create':
        component = <CreateProject  setNewData={setNewData} toggleWindowBack = {toggleWindowBack}/>
        break;
      case 'edit':
        component = <Project projectID = {projectID} projectList={projectList} editProjectList={editProjectList}/>
        break;
      default:
        component = <NoProject toggleWindow = {toggleWindow}/>
    }

  
  
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Project Manager</h1>
      <AddProjects projectList={projectList} toggleWindow = {toggleWindow} editProject = {toggleEditor} />
      {component}
    </>
  );
}

export default App;
