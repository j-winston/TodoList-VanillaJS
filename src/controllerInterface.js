//Module: controllerInterface.js
//Role: Bridge
//Responsibilities: Subscribe to events pubblished from the DOM and pass on to appropriate controller.
//
import pubSub from "./pubsub";
import storage from "./storage";
import projectController from "./projectController";
import taskController from "./taskController";

const controllerInterface = (() => {


  const addTaskToProject = (formValues) => {
    const task = taskController.createNewTask(formValues);
    projectController.addTask(task);
  };

  const getProject = (project) => {
    let name = "";

    if (project === "Inbox") {
      name = "Inbox";
    } else {
      name = project.name;
    }
    projectController.findProject(name);
  };

  const removeProject = (project) => {
    projectController.remove(project.name);
  };

  const addNewProject = (formValues) => {
    projectController.createNewProject(formValues);
  };

  const delTask = (task) => {
    const projName = task.projName;
    const project = storage.loadProject(projName);
    const taskIndex = project.tasks.indexOf(task);

    project.tasks.splice(taskIndex, 1);
    storage.saveProject(project);
  };

  const updateTask = (formValues) => {
    taskController.update(formValues);
  };

  const getAllSavedProjects = () => {
    projectController.loadAllProjects();
  };

  // Subcriptions

  pubSub.subscribe("pageLoaded", getAllSavedProjects);

  pubSub.subscribe("addProjectFormSubmitted", addNewProject);
  pubSub.subscribe("projectClicked", getProject);
  pubSub.subscribe("projectRemoved", removeProject);

  pubSub.subscribe("taskSubmitted", addTaskToProject);
  pubSub.subscribe("taskEditSubmitted", updateTask);
  pubSub.subscribe("taskDeleted", delTask);

  return {};
})();

export default controllerInterface;
