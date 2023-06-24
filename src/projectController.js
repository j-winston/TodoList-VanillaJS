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
  const remove = (name) => {
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
  //  const removeTask = (id, projName) => {
  //    const proj = projectController.getProject(projName);
  //
  //    storage.deleteTask(id, projName);
  //  };
  //
  //  const newEmptyProject = (name) => {
  //    const project = Project(name);
  //
  //    store(project);
  //
  //    return project;
  //  };
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

  const saveTask = (task) => {
    const projName = task.projectName;
    const proj = storage.loadProject(projName);
    proj.tasks.push(task);

    store(proj);
  };

  const createNewProject = (name) => {
    const project = Project(name);

    store(project);

    return project;
  };

  return {
    createNewProject,
    getProject,
    remove,
    saveTask,
  };
})();

export default projectController;
