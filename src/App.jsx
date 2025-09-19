import { useState } from "react";
import { ProjectSearchbar } from "./components/project_searchbar";
import { TaskSearchbar } from "./components/task_searchbar";
import { ProjectInput } from "./components/project_input";
import { Sidebar } from "./components/sidebar";

export function App() {
  const [showProjectForm, setProjectform] = useState(false);
  const [projectList, setProjectList] = useState([]);
  console.log("ProjectList: \n", projectList);

  const addProject = (project) => {
    setProjectList([
      ...projectList,
      { ...project, id: projectList.length + 1 },
    ]);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <Sidebar
            setProjectform={setProjectform}
            setProjectList={setProjectList}
            ProjectSearchbar={ProjectSearchbar}
            projectList={projectList}
          ></Sidebar>
        </div>
        <div className="col-lg-3 me-5 mt-4">
          <TaskSearchbar></TaskSearchbar>
        </div>
        <div className="col-lg-4 ms-5">
          <ProjectInput
            showProjectForm={showProjectForm}
            setProjectform={setProjectform}
            addProject={addProject}
          ></ProjectInput>
        </div>
      </div>
    </>
  );
}
