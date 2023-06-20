//Module: controllerInterface.js
//
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

  //const getProject = (project) => {
  //  let name = "";

  //  if (project === "Inbox") {
  //    name = "Inbox";
  //  } else {
  //    name = project.name;
  //  }
  //  projectController.findProject(name);
  //};

    const getProject = (taskListContainer) => {
        const proj = projectController.findProject(taskListContainer.name); 

        taskListContainer.tasks = proj.tasks; 

        pubSub.publish('projectLoaded', taskListContainer); 


    }

  //const addNewProject = (form) => {
  //  const project = projectController.createNewProject(form);

  //  pubSub.publish("newProjectSaved", project);
  //};

  //const delTask = (task) => {
  //  const projName = task.getProjectName();
  //  const project = storage.loadProject(projName);
  //  const taskIndex = project.tasks.indexOf(task);

  //  project.tasks.splice(taskIndex, 1);
  //  storage.saveProject(project);
  //};

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

  const addProject = (container) => {
    const name = container.name;
    projectController.createNewProject(name);

    pubSub.publish("projectSaved", container);
  };

  const createInbox = () => {
    // START HERE
    if (projectController.createNewProject("Inbox")) {
    }
    pubSub.publish("inboxCreated");
  };

  const removeProject = (name) => {
    if (projectController.deleteProject(name)) {
      pubSub.publish("projectDeleted");
    }
  };

  const addTaskToProject = (formContainer) => {
    const projName = formContainer.projectName;
    const task = taskController.createNewTask(formContainer);

    projectController.addTask(task, projName);

    pubSub.publish("taskSaved", formContainer);
  };

  pubSub.subscribe("newProjectAdded", addProject);
  pubSub.subscribe("inboxAdded", createInbox);
  pubSub.subscribe("projectRemoved", removeProject);

  pubSub.subscribe("newTaskAdded", addTaskToProject);

  //pubSub.subscribe("newProjectSubmitted", addNewProject);
  // Subcriptions
  // pubSub.subscribe("addProjectFormSubmitted", addNewProject);
  pubSub.subscribe("projectClicked", getProject);

  //pubSub.subscribe("taskSubmitted", addTask);
  //pubSub.subscribe("taskEditSubmitted", updateTask);
  // pubSub.subscribe("taskDeleted", delTask);

  return {
    addProject,
    removeProject,
  };
})();

export default controllerInterface;
