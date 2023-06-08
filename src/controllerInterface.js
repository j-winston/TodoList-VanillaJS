//Module: controllerInterface.js
//Role: Bridge
//Responsibilities: Subscribe to events pubblished from the DOM and pass on to appropriate controller.
//
import pubSub from "./pubsub";
import storage from "./storage";
import projectController from "./projectController";
import taskController from "./taskController";

const controllerInterface = (() => {
  const findProject = (name) => {
    const project = storage.loadProject(`${name}`);

    return project;
  };

  // TODO processor does this
  const getKeyValues = (formInputValues) => {
    const taskData = {};
    for (let key in formInputValues) {
      taskData[key] = formInputValues[key];
    }
    return taskData;
  };

  const requestNewTaskObj = (formKeyValues) => {
    const task = taskController.createNewTask(formKeyValues);
    return task;
  };

  const addTaskToProject = (keyValues) => {
    const task = requestNewTaskObj(keyValues);
    projectController.addTask(task);

    pubSub.publish("taskAdded", task);
  };

  const getAllTasks = () => {
    pubSub.publish("tasksRetrieved", tasks);
  };


  // this should retrieve the entire project
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

  const loadTask = (taskId, projName) => {
    const proj = storage.loadProject(projName);
    for (const task of proj.tasks) {
      if (task.id === taskId) {
        return task;
      }
    }
  };

  const saveTask = (task) => {
    const proj = storage.loadProject(task.projName);
    proj.tasks.push(task);

    storage.saveProject(proj);
  };

  const updateTask = (formValues) => {
    taskController.update(formValues);
  };

  const getAllSavedProjects = () => {
    const projArr = projectController.loadAllProjects();
    pubSub.publish("allSavedProjectsRetrieved", projArr);
  };

  // Subcriptions

  pubSub.subscribe("pageLoaded", getAllSavedProjects);
  pubSub.subscribe("inboxClicked", getAllTasks);

  pubSub.subscribe("addProjectFormSubmitted", addNewProject);
  pubSub.subscribe("projectClicked", getProject);
  pubSub.subscribe("projectRemoved", removeProject);

  pubSub.subscribe("taskSubmitted", addTaskToProject);
  pubSub.subscribe("taskEditSubmitted", updateTask);
  pubSub.subscribe("taskDeleted", delTask);

  return {};
})();

export default controllerInterface;
