// Module: taskController.js
// Role: Information provider
// Responsibilities:

import storage from "./storage";
import pubSub from "./pubsub";
import uid from "./uid";

const taskController = (() => {
  const Task = () => {
    let id;
    let title;
    let description;
    let projectName;
    let dueDate;

    const setId = (taskId) => (id = taskId);
    const setTitle = (taskTitle) => (title = taskTitle);
    const setDescription = (descr) => (description = descr);
    const setDueDate = (date) => (dueDate = date);
    const setProjectName = (name) => (projectName = name);

    const getProjectName = () => projectName;
    const getId = () => id;
    const getTitle = () => title;
    const getDueDate = () => dueDate;
    const getDescription = () => description;

    return {
      setId,
      setTitle,
      setDescription,
      setDueDate,
      setProjectName,

      getProjectName,
      getId,
      getTitle,
      getDueDate,
      getDescription,
    };
  };

  const getUid = () => {
    return uid.create();
  };

  const assignTaskValues = (task, formKeyValuePairs) => {
    const uid = getUid();

    task.setId(uid);
    task.setTitle(formKeyValuePairs.name);
    task.setDescription(formKeyValuePairs.description);
    task.setDueDate(formKeyValuePairs.duedate);
    task.setProjectName(formKeyValuePairs.projectName);

    return task;
  };

  const createNewTask = (formKeyValues) => {
    const taskObj = Task();
    const task = assignTaskValues(taskObj, formKeyValues);
    return task;
  };

  const update = (formValues) => {
    const projName = formValues.projName;
    const id = formValues.id;

    const task = storage.loadTask(projName, id);

    // another example of non-transparency..dangerous

    for (const key in formValues) {
      if (key in task) {
        task[key] = formValues[key];
      }
    }
    // task data now needs to be saved
    // storage.saveTask(task);
    pubSub.publish("taskUpdated", task);
  };

  return {
    createNewTask,
    update,
  };
})();

export default taskController;
