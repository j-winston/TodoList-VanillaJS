//Module: taskBank.js
//Role: Information provider
//Responsibilities: Add task, return task, delete task
import pubSub from "./pubsub";

const taskBank = (() => {
  const tasks = [];

  const _getTaskIndex = (id) => {
    const index = tasks.findIndex((task) => task.id === id);

    return index;
  };

  const setTaskId = (task) => {
    task.id = tasks.length;
    return task;
  };

  const addTask = (taskData) => {
    const task = setTaskId(taskData);
    tasks.push(task);
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

  const getProjectTasks = (projName) => {
    const projTasks = tasks.filter((task) => task.projectName === projName);

    pubSub.publish("projectTasksRetrieved", projTasks);
  };

  const deleteTasks = (projectId) => {
    tasks.filter((task) => task.id);
  };
  pubSub.subscribe("projectDeleted", deleteTasks);
  pubSub.subscribe("inboxClicked", getAllTasks);
  pubSub.subscribe("projectClicked", getProjectTasks);
  pubSub.subscribe("taskSubmitted", addTask);

  return {
    addTask,
    deleteTask,
    setCompleted,
    getAllTasks, // for testing only
  };
})();

export default taskBank;
