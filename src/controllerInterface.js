//Module: controllerInterface.js
//Role: Bridge
//Responsibilities: Subscribe to events pubblished from the DOM and pass on to appropriate controller.
//
import pubSub from "./pubsub";
import storage from "./storage";
import projectController from "./projectController";
import taskController from "./taskController";

const controllerInterface = (() => {
  //const findProject = (name) => {
  //  const project = storage.loadProject(`${name}`);

  //  return project;
  //};

  //const addTaskToProject = (formDataObj, projName) => {
  //  const task = projectController.addTask(formDataObj, projName);

  //  const newTaskValues = {
  //    id: task.getValue("id"),
  //    name: task.getValue("name"),
  //    description: task.getValue("description"),
  //    projectName: task.getValue("projectName"),
  //    dueDate: task.getValue("dueDate"),
  //  };

  //  return {
  //    get id() {
  //      return newTaskValues.id;
  //    },

  //    get name() {
  //      return newTaskValues.name;
  //    },

  //    get description() {
  //      return newTaskValues.description;
  //    },

  //    get projectName() {
  //      return newTaskValues.projectName;
  //    },
  //    get dueDate() {
  //      return newTaskValues.dueDate;
  //    },
  //  };
  //};

  //const getAllTasks = () => {
  //  pubSub.publish("tasksRetrieved", tasks);
  //};

  //// this should retrieve the entire project

  const delProject = (name) => {
    if (projectController.remove(name)) {
      return true;
    }
    return false;
  };

  const addNewProject = (projName) => {
    const project = projectController.createNewProject(projName);

    let newProject = {
      name: project.name,
      tasks: project.tasks,
      id: project.id,
    };

    return newProject;
  };

  //const newEmptyProject = (name) => {
  //  return projectController.newEmptyProject(name);
  //};

  //const delTask = (id, projName) => {
  //  projectController.removeTask(id, projName);
  //};

  //const loadTask = (taskId, projName) => {
  //  const proj = storage.loadProject(projName);
  //  for (const task of proj.tasks) {
  //    if (task.id === taskId) {
  //      return task;
  //    }
  //  }
  //};

  //const saveTask = (task) => {
  //  const proj = storage.loadProject(task.projName);
  //  proj.tasks.push(task);

  //  storage.saveProject(proj);
  //};

  //const updateTask = (formValues) => {
  //  taskController.update(formValues);
  //};

  //const getAllSavedProjects = () => {
  //  const projArr = projectController.loadAllProjects();
  //  pubSub.publish("allSavedProjectsRetrieved", projArr);
  //};

  //// Subcriptions

  ////pubSub.subscribe("pageLoaded", getAllSavedProjects);
  ////pubSub.subscribe("inboxClicked", getAllTasks);

  ////pubSub.subscribe("addProjectFormSubmitted", addNewProject);
  ////pubSub.subscribe("projectClicked", getProject);
  ////pubSub.subscribe("projectRemoved", removeProject);

  ////pubSub.subscribe("taskSubmitted", addTaskToProject);
  ////pubSub.subscribe("taskEditSubmitted", updateTask);
  ////pubSub.subscribe("taskDeleted", delTask);

  //return {
  //  addTaskToProject,
  //  getProject,
  //  newEmptyProject,
  //  delTask,
  //  addNewProject,
  //};

  const getProject = (name) => {
    const proj = projectController.getProject(name);

    return proj;
  };
  const getAllProjects = () => {
    return storage.loadAllProjects();
  };
  return {
    getAllProjects,
    addNewProject,
    getProject,
    delProject,
  };
})();

export default controllerInterface;
