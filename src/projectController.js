// Module: projectController.js
// Role: Coordinator
// Responsibilities: coordinate movement of project data

import pubSub from "./pubsub";
import storage from "./storage";
import Project from "./Project";

const projectController = (() => {
  const _store = (project) => {
    if (storage.saveProject(project)) {
      return true;
    }
  };

  const _getProject = (name) => {
    return storage.loadProject(name);
  };

  const create = (name) => {
    const freshProject = Project(name);
    _store(freshProject);

    pubSub.publish("projectAdded", freshProject);
  };

  const remove = (name) => {
    if (storage.deleteProject(name)) {
      pubSub.publish("projectDeleted", name);
    }
  };

  const addTask = (task) => {
    const project = _getProject(task.projName);
    project.tasks.push(task);

    if (_store(project)) {
    }
  };

  return {
    create,
    remove,
    addTask,
  };
})();

export default projectController;
