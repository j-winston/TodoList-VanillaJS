//Module: controllerInterface.js
//Role: Bridge
import uid from "./uid";
import storage from "./storage";
import projectController from "./projectController";

const controllerInterface = (() => {
  const newTaskObj = (formDataObj) => {
    let taskData = {};
    const entries = formDataObj.entries();

    for (let pair of entries) {
      const key = pair[0];
      const value = pair[1];
      taskData[key] = value;
    }

    const newTaskValues = {
      id: uid.create(),
      name: taskData["name"],
      description: taskData["description"],
      projectName: taskData["projectName"],
      dueDate: taskData["dueDate"],
    };

    return {
      get id() {
        return newTaskValues.id;
      },

      set id(newId) {
        newTaskValues.id = newId;
      },

      get name() {
        return newTaskValues.name;
      },

      get description() {
        return newTaskValues.description;
      },

      get projectName() {
        return newTaskValues.projectName;
      },
      get dueDate() {
        return newTaskValues.dueDate;
      },
    };
  };

  const addTaskToProject = (formDataObj) => {
    let task = newTaskObj(formDataObj);

    projectController.saveTask(task);

    return task;
  };

  const delProject = (name) => {
    if (projectController.removeProject(name)) {
      return true;
    }
    return false;
  };

  const emptyProjName = (projName) => {
    if (projName.length <= 0) {
      return true;
    }
  };

  const addNewProject = (projName) => {
    if (emptyProjName(projName)) {
      return false;
    }

    const getNewProjObj = (project) => {
      return {
        name: project.name,
        tasks: project.tasks,
        id: project.id,
      };
    };
    const project = projectController.createNewProject(projName);

    if (!project) {
      return false;
    } else {
      const newProject = getNewProjObj(project);
      //let newProject = { name: project.name,
      //  tasks: project.tasks,
      //  id: project.id,

      return newProject;
    }
  };

  const delTask = (task) => {
    projectController.removeTask(task);
  };

  const loadTask = (taskId, projName) => {
    const proj = storage.loadProject(projName);
    for (const task of proj.tasks) {
      if (task.id === taskId) {
        return task;
      }
    }
  };

  const getUpdatedTask = (formDatObj, oldTask) => {
    let newTask = newTaskObj(formDatObj);
    newTask.id = oldTask.id;

    projectController.removeTask(oldTask);
    projectController.saveTask(newTask);

    return newTask;
  };

  const getProject = (name) => {
    const proj = projectController.getProject(name);
    if (proj) {
      return proj;
    }
    return false;
  };

  const projectExists = (name) => {
    if (storage.loadProject(name)) {
      return true;
    } else return false;
  };

  const getAllProjects = () => {
    return storage.loadAllProjects();
  };

  const getTasksByDate = (date) => {
    const allTasks = projectController.getAllTasks();
    const tasksByDate = [];

    for (let task of allTasks) {
      const dueDate = task.dueDate;
      if (dueDate === date) {
        tasksByDate.push(task);
      }
    }

    return tasksByDate;
  };

  return {
    getAllProjects,
    addNewProject,
    getProject,
    delProject,
    projectExists,
    addTaskToProject,
    delTask,
    getUpdatedTask,
    getTasksByDate,
  };
})();

export default controllerInterface;
