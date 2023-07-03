// Module: projectController.js
// Role: Coordinator
// Responsibilities: coordinate movement of project data

import pubSub from "./pubsub";
import storage from "./storage";
import taskController from "./taskController";
import uid from "./uid";

const projectController = (() => {
  const store = (project) => {
    if (storage.saveProject(project)) {
      return true;
    }
  };
  //
  //
  //
  //  const assignProjectValues = (newProject, formKeyValuePairs) => {
  //    for (let key in formKeyValuePairs) {
  //      if (key in newProject) {
  //        newProject[key] = formKeyValuePairs[key];
  //      } else {
  //        console.log("KeyError:" + key + " not found");
  //      }
  //    }
  //    return newProject;
  //  };
  //
  //  const loadAllProjects = () => {
  //    const allSavedProjects = storage.loadAllProjects();
  //
  //    return allSavedProjects;
  //  };
  //
  //
  const removeProject = (name) => {
    if (storage.deleteProject(name)) {
      return true;
    }
    return false;
  };

  //
  //  const removeAll = () => {
  //    storage.deleteAllProjects();
  //  };
  //
  //
  //
  const getProject = (name) => {
    return storage.loadProject(name);
  };

  const Project = (projName) => {
    let name = projName;
    let id = uid.create();
    let tasks = [];

    return {
      name,
      id,
      tasks,
    };
  };

  //const newTask = (formDataObj) => {
  //  const task = taskController.createNewTask(formDataObj);

  //  saveTask(task);
  //};

  const removeTask = (task) => {
    const id = task.id;
    const name = task.projectName;

    storage.deleteTask(id, name);
  };

  //const newEmptyProject = (name) => {
  //  const project = Project(name);

  //  store(project);

  //  return project;
  //};
  const saveTask = (task) => {
    const projName = task.projectName;
    const proj = storage.loadProject(projName);
    proj.tasks.push(task);

    store(proj);
  };

  const createNewProject = (name) => {
    if (storage.loadProject(name)) {
      return false;
    } else {
      const project = Project(name);

      store(project);

      return project;
    }
  };

  const getAllTasks = () => {
    const projects = storage.loadAllProjects();
    const taskArr = [];

    for (let prj of projects) {
      const tasks = prj.tasks;
      for (let tsk of tasks) {
        taskArr.push(tsk);
      }
    }

    return taskArr;
  };

  return {
    createNewProject,
    getProject,
    removeTask,
    saveTask,
    removeProject,
    getAllTasks,
  };
})();

export default projectController;
