//Module: taskBank.js
//Role: Information provider
//Responsibilities: Add task, return task, delete task
import pubSub from "./pubsub";

const taskBank = (() => {
  const createUid = () => {
    const uid =
      Date.now().toString(32) + Math.random(16).toString(16).replace(/\./g, "");
    return uid;
  };

  const saveProject = (project) => {
    localStorage.setItem(`${project.name}`, JSON.stringify(project));
  };

  const loadProject = (name) => {
    const jsnData = localStorage.getItem(`${name}`);
    const project = JSON.parse(jsnData);
    return project;
  };

  const addToProject = (task) => {
    const project = loadProject(`${task.projName}`);
    project.tasks.push(task);

    saveProject(project);
  };

  const findProject = (name) => {
    const project = loadProject(`${name}`);

    return project;
  };

  const addTask = (formValues) => {
    const task = {};
    const id = createUid();
    task.id = id;

    for (const field in formValues) {
      task[field] = formValues[field];
    }

    addToProject(task);

    pubSub.publish("taskAdded", task);
  };

  const getAllTasks = () => {
    pubSub.publish("tasksRetrieved", tasks);
  };

  // this should retrieve the entire project
  const getProject = (name) => {
    const proj = findProject(name);
    pubSub.publish("projectRetrieved", proj);
  };

  const removeProject = (name) => {
    localStorage.removeItem(`${name}`);

    pubSub.publish("projectDeleted", name);
  };

  const addProject = (projName) => {
    const project = {
      id: createUid(),
      name: projName,
      tasks: [],
    };

    saveProject(project);
  };

  const delTask = (task) => {
    const projName = task.projName;
    const project = loadProject(projName);
    const taskIndex = project.tasks.indexOf(task);

    project.tasks.splice(taskIndex, 1);
    saveProject(project);
  };

  const loadTask = (taskId, projName) => {
    const proj = loadProject(projName);
    for (const task of proj.tasks) {
      if (task.id === taskId) {
        return task;
      }
    }
  };

  const saveTask = (task) => {
    const proj = loadProject(task.projName);
    proj.tasks.push(task);

    saveProject(proj);
  };

  const updateTask = (formValues) => {
    const projName = formValues.projName;
    const taskId = formValues.id;
    const task = loadTask(taskId, projName);

    for (const inputEntry in task) {
      task[inputEntry] = formValues[inputEntry];
    }

    saveTask(task);
    pubSub.publish("taskUpdated", task);
  };

  const loadSavedProjects = () => {
    let index = 0;

    while (localStorage.key(index)) {
      const projName = localStorage.key(index);
      findProject(projName);

      index++;

      pubSub.publish("savedProjectLoaded", projName);
    }
  };

  //const clearAllData = ()=> {
  //   localStorage.clear();
  // }

  // Subscriptions
  pubSub.subscribe("inboxClicked", getAllTasks);

  pubSub.subscribe("newProjectSubmitted", addProject);
  pubSub.subscribe("projectClicked", getProject);
  pubSub.subscribe("projectRemoved", removeProject);

  pubSub.subscribe("taskFormSubmitted", addTask);
  pubSub.subscribe("taskEditSubmitted", updateTask);
  pubSub.subscribe("taskDeleted", delTask);

  return {
    loadSavedProjects,
  };
})();

export default taskBank;
