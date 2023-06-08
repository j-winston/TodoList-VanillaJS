// Module: projectController.js
// Role: Coordinator
// Responsibilities: coordinate movement of project data

import pubSub from "./pubsub";
import storage from "./storage";
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
      tasks: [],
    };
    return projectModel;
  };

  const _getProject = (name) => {
    return storage.loadProject(name);
  };

  const assignProjectValues = (newProject, formKeyValuePairs) => {
    for (let key in formKeyValuePairs) {
      if (key in newProject) {
        newProject[key] = formKeyValuePairs[key];
      } else {
        console.log("KeyError:" + key + " not found");
      }
    }
    return newProject;
  };

  const loadAllProjects = () => {
    const projArr = storage.loadAllProjects();
      pubSub.publish('allSavedProjectsRetrieved', projArr); 


  };

  const createNewProject = (formKeyValues) => {
    const emptyProject = getProjectModel();
    const project = assignProjectValues(emptyProject, formKeyValues);

    if(_store(project)){
      pubSub.publish('newProjectAdded', project); 

    }

    return project;
  };

  const remove = (name) => {
    if (storage.deleteProject(name)) {
      pubSub.publish("projectDeleted", name);
    }
  };


  const removeAll = () => {
    storage.deleteAllProjects();
  };

  const addTask = (task) => {

    const project = _getProject(task.getProjectName);
    project.tasks.push(task);

    _store(project);
  };


    const findProject = (projectName) => {
        const proj = storage.loadProject(projectName); 
       pubSub.publish('projectRetrieved', proj);  
        
        return proj; 

    }


  return {
    loadAllProjects,
    createNewProject,
    remove,
    removeAll,
    addTask,
      findProject, 
  };
})();

export default projectController;
