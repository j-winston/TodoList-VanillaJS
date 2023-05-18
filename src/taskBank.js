//Module: taskBank.js
//Role: Information provider
//Responsibilities: Add task, return task, delete task
import pubSub from "./pubsub";

const taskBank = (() => {
  const projects = [];

  const findProject = (name) => {
    for (const project of projects) {
      if (project.name === name) {
        return project;
      }
    }
  };

  const _getTaskIndex = (id) => {
    const index = tasks.findIndex((task) => task.id === id);

    return index;
  };

  const addTask = (task) => {
    const project = findProject(task.projName);
    task.id = project.tasks.length;
    project.tasks.push(task);

    pubSub.publish("projectRetrieved", project); // TODO change to taskAdded
  };

  const setCompleted = (id) => {
    const index = _getTaskIndex(id);
    tasks[index].completed = true;
    // pubSub.publish('task-updated',)
  };

  const getAllTasks = () => {
    pubSub.publish("tasksRetrieved", tasks);
  };

  // this should retrieve then entire project
  const getProject = (name) => {
    const proj = findProject(name);
    pubSub.publish("projectRetrieved", proj);
  };

  const deleteProject = (projName) => {
    const proj = findProject(projName);
    const index = projects.indexOf(proj);

    projects.splice(index, 1);
    pubSub.publish("projectDeleted", projName);
  };

  const addProject = (projName) => {
    const project = {
      name: projName,
      tasks: [],
    };

    projects.push(project);
  };

  const delTask = (task) => {
    const proj = findProject(task.projName);
    const taskIndex = proj.tasks.indexOf(task);

    proj.tasks.splice(taskIndex, 1);
    alert("task deleted");
  };

  const updateTask = (taskUpdates) => {
    const curProject = findProject(taskUpdates.projName);
    const task = curProject.tasks.filter(
      (task) => task.id === taskUpdates.id
    );

    task.name = taskUpdates.name;
    task.description = taskUpdates.description;
    task.duedate = taskUpdates.duedate;
    task.completed = false;

    pubSub.publish("taskUpdated", task);
  };

  // Subscriptions
  pubSub.subscribe("inboxClicked", getAllTasks);

  pubSub.subscribe("newProjectSubmitted", addProject);
  pubSub.subscribe("projectClicked", getProject);
  pubSub.subscribe("projectRemoved", deleteProject);

  pubSub.subscribe("taskSubmitted", addTask);
  pubSub.subscribe("taskDeleted", delTask);
  pubSub.subscribe("taskModified", updateTask);
})();

export default taskBank;
