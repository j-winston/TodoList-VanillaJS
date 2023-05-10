//Module: taskBank.js
//Role: Information provider
//Responsibilities: Add task, return task, delete task
import pubSub from "./pubsub";

const taskBank = (() => {
  const projects = [];

  const _getTaskIndex = (id) => {
    const index = tasks.findIndex((task) => task.id === id);

    return index;
  };

  const addTask = (task) => {
    for (const project of projects) {
      if (project.name === task.projectName) {
        project.tasks.push(task);
      }
    }

    pubSub.publish("taskAdded", task);
  };

  const deleteTask = (id) => {
    const index = _getTaskIndex(id);
    tasks.splice(index, 1);
    // pubSub.publish('task-deleted', dataindex) index will identify node later
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
    for (const project of projects) {
      if (project.name === name) {
        pubSub.publish("projectTasksRetrieved", project);
      }
    }
  };

  const deleteTasks = (projectId) => {
    tasks.forEach((task) => {
      if (task.projectName === projectId) {
        deleteTask(task.id);
      }
    });
    pubSub.publish("projectDeleted");
  };

  const deleteProject = (projName) => {
    deleteTasks(projName);
    const markedIndex = projects.indexOf(projName);
    projects.splice(markedIndex, 1);

    pubSub.publish("projectDeleted", projName);
  };

  const addProject = (projName) => {
    const project = {
      name: projName,
      tasks: [{}],
    };

    projects.push(project);
  };

  pubSub.subscribe("projectClicked", getProject);
  pubSub.subscribe("newProjectAdded", addProject);
  pubSub.subscribe("inboxClicked", getAllTasks);
  pubSub.subscribe("taskSubmitted", addTask);

  return {
    addTask,
    deleteTask,
    setCompleted,
    getAllTasks, // for testing only
  };
})();

export default taskBank;
