//Module: controllerInterface.js
//Role: Bridge
//Responsibilities: Subscribe to events pubblished from the DOM and pass on to appropriate controller.
//
import pubSub from "./pubsub";
import storage from "./storage";
import projectController from "./projectController";
import taskController from "./taskController";
import domService from "./domService";

const controllerInterface = (() => {
  //const addTask = (form) => {
  //    projectController.addTaskToProject(form);
  //
  //

  //};

  const getProject = (projContainer) => {
    const name = projContainer.name;
    projectController.findProject(name);

    pubSub.publish("projectFound", projContainer);
  };

  //const addNewProject = (form) => {
  //  const project = projectController.createNewProject(form);

  //  pubSub.publish("newProjectSaved", project);
  //};

  const delTask = (taskId) => {
    projectController.deleteTask(taskId);

    pubSub.publish("taskRemoved", taskId);
  };

  //const updateTask = (formValues) => {
  //  taskController.update(formValues);
  //};

  //const getAllProjects = () => {
  //  const projectsArr = projectController.loadAllProjects();
  //  // maybe error checking here?

  //  pubSub.publish("allProjectsRetrieved", projectsArr);
  //};

  //const renderInbox = () => {
  //  projectController.createNewProject({
  //    name: "Inbox",
  //    id: "djas939u234asd",
  //  });
  //};

  //const getFormData = (formEl) => {
  //  const inputValues = document.querySelectorAll("input");
  //};

  const addProject = (projContainer) => {
    const name = projContainer.name;

    projectController.createNewProject(name);

    pubSub.publish("newProjectSaved", projContainer);
  };

  const removeProject = (name) => {
    if (projectController.deleteProject(name)) {
      pubSub.publish("projectDeleted");
    }
  };

  const addTaskToProject = (projContainer) => {
    const projName = projContainer.name;
    const taskEntries = projContainer.lastTaskValues;

    const taskEl = projContainer.lastTaskEl;
    projectController.addTask(projName, taskEntries);

    pubSub.publish("taskSaved", taskEl);
  };

  pubSub.subscribe("newProjectAdded", addProject);
  pubSub.subscribe("projectClicked", getProject);
  pubSub.subscribe("projectRemoved", removeProject);

  pubSub.subscribe("newTaskAdded", addTaskToProject);

  //pubSub.subscribe("newProjectSubmitted", addNewProject);
  // Subcriptions
  // pubSub.subscribe("addProjectFormSubmitted", addNewProject);
  //pubSub.subscribe("projectClicked", getProject);

  //pubSub.subscribe("taskSubmitted", addTask);
  //pubSub.subscribe("taskEditSubmitted", updateTask);
  pubSub.subscribe("taskDeleted", delTask);

  return {
    addProject,
    removeProject,
  };
})();

export default controllerInterface;
