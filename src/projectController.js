// Module: projectController.js
// Role: Coordinator
// Responsibilities: coordinate movement of project data

import pubSub from "./pubsub";
import storage from "./storage";
import taskController from "./taskController";
import uid from "./uid";

const projectController = (() => {
  const _store = (project) => {
    if (storage.saveProject(project)) {
      return true;
    }
  };

  const getProjectModel = () => {
    const projectModel = {
      id: uid.create(),
      name: "",
      lastTask: "",
      tasks: [],

      set lastTask(task) {
        this.lastTask = task;
      },

      get lastTask() {
        return this.last;
      },
    };
    return projectModel;
  };

  const _getProject = (name) => {
    return storage.loadProject(name);
  };

  const assignProjectValues = (newProject, projName) => {
    // iterating over non-transparent keys of two
    // objects(one not transparent) is a horrible horrible
    // idea that should never be repeated

    //for (let key in formKeyValuePairs) {
    //  if (key in newProject) {
    //    newProject[key] = formKeyValuePairs[key];
    //  } else {
    //    console.log("KeyError:" + key + " not found");
    //  }
    newProject.id = uid.create();
    newProject.name = projName;

    return newProject;
  };

  const loadAllProjects = () => {
    const projArr = storage.loadAllProjects();
    return projArr;
    //    pubSub.publish("allSavedProjectsRetrieved", projArr);
  };

  const createNewProject = (projectName) => {
    const project = getProjectModel();

    project.name = projectName;

    if (_store(project)) {
      return project;
    }
  };

  const remove = (name) => {
    if (storage.deleteProject(name)) {
      return true;
    }
  };

  const removeAll = () => {
    storage.deleteAllProjects();
  };

  const getNewTask = (formKeyValues) => {
    return taskController.createNewTask(formKeyValues);
  };

  const getLastTask = () => {
    return storage.getLastTaskAdded();
  };

  const addTaskToProject = (formKeyValuePairs) => {
    const task = getNewTask(formKeyValuePairs);
    const projName = task.getProjectName;
    let project = _getProject(projName);

    if (!project) {
        project = createNewProject(projName);
    }
    project.tasks.push(task);
    _store(project);

    return task;
  };

  const findProject = (projectName) => {
    const proj = storage.loadProject(projectName);
    pubSub.publish("projectRetrieved", proj);

    return proj;
  };

  return {
    loadAllProjects,
    createNewProject,
    remove,
    removeAll,
    addTaskToProject,
    findProject,
  };
})();

export default projectController;
