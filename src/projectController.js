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

  const newProject = (name) => {
    let _id;
    let _name;
    let _tasks = [];

    return {
      set name(name) {
        _name = name;
      },
      get name() {
        return _name;
      },

      set id(id) {
        _id = id;
      },
      get id() {
        return _id;
      },
      set tasks(task) {
        _tasks.push(task);
      },
      get tasks() {
        return _tasks;
      },
    };
  };

  //const _getProject = (name) => {
  //  return storage.loadProject(name);
  //};

  //const assignProjectValues = (newProject, projName) => {
  //  // iterating over non-transparent keys of two
  //  // objects(one not transparent) is a horrible horrible
  //  // idea that should never be repeated

  //  //for (let key in formKeyValuePairs) {
  //  //  if (key in newProject) {
  //  //    newProject[key] = formKeyValuePairs[key];
  //  //  } else {
  //  //    console.log("KeyError:" + key + " not found");
  //  //  }
  //  newProject.id = uid.create();
  //  newProject.name = projName;

  //  return newProject;
  //};

  //const getValues = (form) => {
  //  const inputElements = form.querySelectorAll("input");
  //  const formValues = {};

  //  inputElements.forEach((input) => {
  //    formValues[input.id] = input.value;
  //  });

  //  return formValues;
  //};

  //const loadAllProjects = () => {
  //  const projArr = storage.loadAllProjects();
  //  return projArr;
  //};

  const deleteProject = (name) => {
    if (storage.deleteProject(name)) {
      return true;
    }
  };

  //const removeAll = () => {
  //  storage.deleteAllProjects();
  //};

  //const getLastTask = () => {
  //  return storage.getLastTaskAdded();
  //};

  const addTask = (task, projName) => {
    let proj = findProject(projName);

    if (!proj) {
      proj = createNewProject(projName);
    }


    proj.tasks.push(task);
  };

  //  //START HERE--> get tasks to work :)
  //  const values = getValues(form);
  //  const task = getNewTask(values);
  //  const projName = task.getProjName();
  //  let project = _getProject(projName);
  //  if (!project) {
  //    project = createNewProject(projName);
  //  }
  //  project.tasks.push(task);
  //  _store(project);
  //  return project;
  //};
  const findProject = (projectName) => {
    const proj = storage.loadProject(projectName);
    return proj;
  };

  const createNewProject = (name) => {
    const project = newProject(name);

    if (_store(project)) {
      return project;
    }
  };

  return {
    createNewProject,
    deleteProject,
    addTask,
    //loadAllProjects,
    //remove,
    //removeAll,
    findProject,
  };
})();

export default projectController;
