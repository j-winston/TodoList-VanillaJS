//Module: taskBank.js
//Role: Information provider
//Responsibilities: Add task, return task, delete task

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
  };

  const deleteTask = (id) => {
    const index = _getTaskIndex(id);
    tasks.splice(index, 1);
  };

  const setCompleted = (id) => {
    const index = _getTaskIndex(id);
    tasks[index].completed = true;
  };

  const getTask = (id) => {
    const index = _getTaskIndex(id);
    if (tasks[index]) {
      return Object.values(tasks[index]);
    } else {
      return false;
    }
  };

  return {
    addTask,
    deleteTask,
    setCompleted,
    getTask, // for testing only
  };
})();

export default taskBank;
