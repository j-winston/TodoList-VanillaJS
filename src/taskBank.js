//Module: taskBank.js
//Role: Information provider
//Responsibilities: Add task, return task, delete task
//
import pubSub from "./pubsub";
import storage from "./storage";
import projectController from "./projectController";
import taskController from "./taskController";

const taskBank = (() => {
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

  const createTask = (userInputs) => {
    const task = taskController.create(userInputs);
    return task;
  };

  // TODO add u/addbstraction layer for form inputs
  //  for example processForm(formData)
  const addTaskToProject = (formValues) => {
    const task = createTask(formValues);
    projectController.addTask(task);
  };

  const getAllTasks = () => {
    pubSub.publish("tasksRetrieved", tasks);
  };

  // this should retrieve the entire project
  const getProject = (name) => {
    const proj = findProject(name);
    pubSub.publish("projectRetrieved", proj);
  };

  const removeProject = (project) => {
    projectController.remove(project.name);
    pubSub.publish("projectDeleted", project);
  };

  const addNewProject = (name) => {
    projectController.create(name);
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

  const loadSavedProjects = () => {
    let index = 0;

    while (localStorage.key(index)) {
      const projName = localStorage.key(index);
      const project = findProject(projName);

      index++;

      pubSub.publish("projectRetrieved", project);
    }
  };


  pubSub.subscribe("pageLoaded", loadSavedProjects);
  pubSub.subscribe("inboxClicked", getAllTasks);

  pubSub.subscribe("newProjectSubmitted", addNewProject);
  pubSub.subscribe("projectClicked", getProject);
  pubSub.subscribe("projectRemoved", removeProject);

  pubSub.subscribe("taskFormSubmitted", addTaskToProject);
  pubSub.subscribe("taskEditSubmitted", updateTask);
  pubSub.subscribe("taskDeleted", delTask);

  return {
    loadSavedProjects,
  };
})();

export default taskBank;
