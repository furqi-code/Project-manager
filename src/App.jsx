import { useState } from "react";
import { Searchbar } from "./components/searchbar";
import { Input } from "./components/input";
import { Sidebar } from "./components/sidebar";
import { Card } from "./components/card";

export function App() {
  const [showForm, setShowform] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(projectList);
  console.log("searching: ", searchText);

  const removeProject = (id) => {
    setProjectList(projectList.filter((project) => project.id !== id));
  };

  const editProject = (updatedProject) => {
    setProjectList(
      projectList.map((project) =>
        project.id !== updatedProject.id ? project : updatedProject
      )
    );
  };

  const addProject = (project) => {
    setProjectList([
      ...projectList,
      { ...project, id: projectList.length + 1 },
    ]);
  };

  const renderProjects = () => {
    if (projectList.length === 0)
      return <h5 className="text-center p-2">Zero Project added</h5>;
    const filteredArray = projectList.filter((project) => {
      if (searchText === "") return true;
      const regex = new RegExp(searchText, "i");
      return regex.test(project.title);
    });
    filteredArray.sort((a, b) => a.title.localeCompare(b.title));
    return filteredArray.map((project) => (
      <Card
        key={project.id}
        {...project}
        deleteProject={removeProject}
        updateProject={editProject}
      ></Card>
    ));
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-3">
          <Sidebar setShowform={setShowform}></Sidebar>
        </div>
        <div className="col-lg-3 me-5 mt-4">
          <Searchbar
            searchText={searchText}
            setSearchText={setSearchText}
          ></Searchbar>
          {renderProjects()}
        </div>
        <div className="col-lg-4 ms-5">
          <Input
            showForm={showForm}
            setShowform={setShowform}
            addProject={addProject}
          ></Input>
        </div>
      </div>
    </>
  );
}
