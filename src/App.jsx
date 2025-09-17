import { useState } from "react";
import { Input } from "./components/input";
import { Sidebar } from "./components/sidebar";
import { Card } from "./components/card";

export function App() {
    const [showForm, setShowform] = useState(false) ;
    const [projectList, setProjectList] = useState([]) ;
    console.log(projectList) ;

    const addProjects = (project) => {
        setProjectList([...projectList, {...project, id: projectList.length + 1}])
    }

  return (
    <>
      <div className="row">
        <div className="col-lg-3 me-5">
          <Sidebar setShowform={setShowform}></Sidebar>
        </div>
        <div className="col-lg-4 ms-5">
          <Input showForm={showForm} setShowform={setShowform} addProjects={addProjects}></Input>
          {projectList.map((project) => <Card {...project}></Card>)}
        </div>
      </div>
    </>
  );
}
