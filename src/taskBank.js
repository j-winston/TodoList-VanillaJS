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

  const addTask = (title, description, dueDate, projectName = "inbox") => {
    const task = {
      projectName: projectName,
      title: title,
      description: description,
      dueDate: dueDate,
      completed: false,
      id: tasks.length,
    };
    tasks.push(task);
    //pubSub.publish('task-added', taskBank.task)
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

  const getProjectTasks = (dataIdProject) => {
    pubSub.publish(
      "projectRetrieved",
      tasks.filter((task) => task.projectName === dataIdProject)
    );
  };

  pubSub.subscribe("inboxClicked", getAllTasks);
  pubSub.subscribe("projectClicked", getProjectTasks);

  return {
    addTask,
    deleteTask,
    setCompleted,
    getAllTasks, // for testing only
  };
})();

export default taskBank;
