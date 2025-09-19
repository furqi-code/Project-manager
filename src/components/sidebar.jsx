import { useState } from "react";
import { ProjectCard } from "./projectCard";

export function Sidebar({ setProjectform, setProjectList, ProjectSearchbar, projectList }) {
  const [searchTextProject, setSearchTextProject] = useState("");

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

  const renderProjects = () => {
    if (projectList.length === 0)
      return <h5 className="text-center p-2">Zero Project added</h5>;
    const filteredArray = projectList.filter((project) => {
      if (searchTextProject === "") return true;
      const regex = new RegExp(searchTextProject, "i");
      return regex.test(project.title);
    });
    if (filteredArray.length !== 0) {
      filteredArray.sort((a, b) => a.title.localeCompare(b.title));
      return filteredArray.map((project) => (
        <li>
          <ProjectCard
            key={project.id}
            {...project}
            deleteProject={removeProject}
            updateProject={editProject}
          ></ProjectCard>
        </li>
      ));
    } else {
      return (
        <>
          <p className="text-center p-2">
            Project not found!!!! <br /> click to add ?
          </p>
          <button
            className={"btn btn-outline-success"}
            onClick={() => {
              setProjectform(true);
              setSearchTextProject("");
            }}
          >
            Add Project
          </button>
        </>
      );
    }
  };

  return (
    <>
      <div
        class="d-flex align-items-center flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "450px", height: "100vh" }}
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg
            class="bi pe-none me-2"
            width="40"
            height="32"
            aria-hidden="true"
          ></svg>
          <span class="fs-4">Projects</span>
        </a>
        <hr />
        <ProjectSearchbar
          searchTextProject={searchTextProject}
          setSearchTextProject={setSearchTextProject}
        ></ProjectSearchbar>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <button class="btn text-white" onClick={() => setProjectform(true)}>
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Create new
            </button>
          </li>
          {renderProjects()}
        </ul>
        <hr />
      </div>
    </>
  );
}
