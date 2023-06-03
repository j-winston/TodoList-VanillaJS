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

  const getTask = (formKeyValues) => {
    const task = taskController.createNewTask(formKeyValues);
    return task;
  };

  // TODO add u/addbstraction layer for form inputs
  //  for example processForm(formData)
  const addTaskToProject = (keyValues) => {
    const task = getTask(keyValues);
    projectController.addTask(task);

    pubSub.publish("taskAdded", task);
  };

  const getAllTasks = () => {
    pubSub.publish("tasksRetrieved", tasks);
  };

  const errorHandler = (() => {
    const undefinedValues = [];

    const logUndefinedKeys = (key) => {
      undefinedValues.push(key);
    };

    const getUndefinedValues = () => {
      return undefinedValues;
    };

    const isEmpty = (arr) => {
      arr.length === 0 ? true : false;
    };

    const undefinedExists = () => {
      undefinedValues.length === 0 ? false : true;
    };

    const hasUndefinedValues = (project) => {
      for (let key in project) {
        if (project[key] === undefined) {
          logUndefinedKeys(key);
        }
      }
      if (undefinedExists()) {
        return true;
      }
    };

    return {
      hasUndefinedValues,
      getUndefinedValues,
    };
  })();

  // this should retrieve the entire project
  const getProject = (name) => {
    const proj = findProject(name);
    pubSub.publish("projectRetrieved", proj);
  };

  const removeProject = (project) => {
    projectController.remove(project.name);
    pubSub.publish("projectDeleted", project);
  };

  const addNewProject = (formValues) => {
    const project = projectController.createNewProject(formValues);

    if (errorHandler.hasUndefinedValues(project)) {
      console.log(error.getUndefinedValues);
    } else {
      pubSub.publish("newProjectAdded", project);
    }
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
