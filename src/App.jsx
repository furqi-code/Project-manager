import { useState } from "react";
import { ProjectSearchbar } from "./components/project/project_searchbar";
import { TaskSearchbar } from "./components//task/task_searchbar";
import { ProjectInput } from "./components/project/project_input";
import { TaskInput } from "./components/task/task_input";
import { TaskCard } from "./components/task/taskCard";
import { Sidebar } from "./components/project/sidebar";

export function App() {
  const [showProjectForm, setProjectform] = useState(false);
  const [showTaskForm, setTaskform] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTextTask, setSearchTextTask] = useState("");
  console.log("ProjectList: \n", projectList);

  const addProject = (project) => {
    setProjectList([
      ...projectList,
      { ...project, id: projectList.length + 1 },
    ]);
  };

  const removeTask = (id) => {
    setProjectList(
      projectList.map((project) => {
        if (project.id !== selectedProject) {
          return project;
        }
        return {
          ...project,
          tasks: project.tasks.filter((task) => task.id !== id),
        };
      })
    );
  };

  // The projectList array is getting updated, but the task of that particular project
  //  only shows up because the showTaskForm state is being changed
  const addTask = (task) => {
    const clickedProject = projectList.filter(
      (project) => project.id === selectedProject
    );
    clickedProject[0].tasks.push({
      ...task,
      id: clickedProject[0].tasks.length + 1,
    });
    console.log("adding task of selectedProject: \n", clickedProject);
  };

  const renderTasks = () => {
    const clickedProject = projectList.filter(
      (project) => project.id === selectedProject
    );
    if (clickedProject.length === 0)
      // first check kro ki project pe click hua ki nhi ? and does it exist ?
      return (
        <h5 className="text-center p-2">
          click on any project to see their tasks
        </h5>
      );
    if (clickedProject[0].tasks.length === 0)
      return (
        <h5 className="text-center p-2">
          Zero task added to {clickedProject[0].title} project
        </h5>
      );

    const filteredArray = clickedProject[0].tasks.filter((task) => {
      if (searchTextTask === "") return true;
      const regex = new RegExp(searchTextTask, "i");
      return regex.test(task.title);
    });
    if (filteredArray.length !== 0) {
      filteredArray.sort((a, b) => a.title.localeCompare(b.title));
      return filteredArray.map((task) => (
        <TaskCard
          key={task.id}
          {...task}
          deleteTask={removeTask}
          updateTask={editTask}
        ></TaskCard>
      ));
    } else {
      return (
        <>
          <p className="text-center p-2">
            Task not found!!!! <br /> click to add ?
          </p>
          <button
            className={"btn btn-outline-success"}
            onClick={() => {
              setTaskform(true);
              setSearchTextTask("");
            }}
          >
            Add card
          </button>
        </>
      );
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <Sidebar
            setProjectform={setProjectform}
            setProjectList={setProjectList}
            setTaskform={setTaskform}
            setSelectedProject={setSelectedProject}
            ProjectSearchbar={ProjectSearchbar}
            projectList={projectList}
          ></Sidebar>
        </div>
        <div className="col-lg-3 me-5 mt-4">
          <TaskSearchbar
            searchTextTask={searchTextTask}
            setSearchTextTask={setSearchTextTask}
          ></TaskSearchbar>
          {renderTasks()}
        </div>
        <div className="col-lg-4 ms-5">
          <ProjectInput
            showProjectForm={showProjectForm}
            setProjectform={setProjectform}
            addProject={addProject}
          ></ProjectInput>
          <TaskInput
            showTaskForm={showTaskForm}
            setTaskform={setTaskform}
            addTask={addTask}
          ></TaskInput>
        </div>
      </div>
    </>
  );
}
