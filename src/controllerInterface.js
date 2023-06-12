//Module: controllerInterface.js
//Role: Bridge
//Responsibilities: Subscribe to events pubblished from the DOM and pass on to appropriate controller.
//
import pubSub from "./pubsub";
import storage from "./storage";
import projectController from "./projectController";
import taskController from "./taskController";

const controllerInterface = (() => {
  const addTask = (formValues) => {
    const task = projectController.addTaskToProject(formValues);

    if (task) {
      pubSub.publish("taskAdded", task);
    }
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

  const addNewProject = (name) => {
    const project = projectController.createNewProject(name);
    pubSub.publish("newProjectSaved", project);
  };

  const deleteProject = (projId) => {
    if (projectController.remove(projId)) {
      return true;
    }
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

  const getAllProjects = () => {
    const projectsArr = projectController.loadAllProjects();
    // maybe error checking here?

    pubSub.publish("allProjectsRetrieved", projectsArr);
  };

  const renderInbox = () => {
    projectController.createNewProject({
      name: "Inbox",
      id: "djas939u234asd",
    });
  };

  // Subcriptions
  // pubSub.subscribe("addProjectFormSubmitted", addNewProject);
  //pubSub.subscribe("projectClicked", getProject);
  //pubSub.subscribe("projectRemoved", removeProject);

  //pubSub.subscribe("taskSubmitted", addTaskToProject);
  //pubSub.subscribe("taskEditSubmitted", updateTask);
  // pubSub.subscribe("taskDeleted", delTask);

  return {
    getAllProjects,
    addNewProject,
    addTask,
    deleteProject,
  };
})();

export default controllerInterface;
