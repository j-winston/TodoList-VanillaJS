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

    const getProjectModel = () => {
        const projectModel = {
            // Here we create a project model that can be changed.  this gets checked everytime a new project is added to ensure it doesnt break if data keys dont match 

        }
    }
  const _getProject = (name) => {
    return storage.loadProject(name);
  };

    const getFormValues = (formInputs) => {

        // logic here to get form data 
        
    }

  const create = (formValues) => {
      const values = getFormValues(formValues);

     const getFormValues(formValues);  

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
