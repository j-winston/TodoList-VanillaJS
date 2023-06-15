// Module: taskController.js
// Role: Information provider
// Responsibilities:

import storage from "./storage";
import pubSub from "./pubsub";
import uid from "./uid";

const taskController = (() => {
  const Task = () => {
    let id;
    let name;
    let description;
    let projectName;
    let dueDate;

    const setId = (taskId) => (id = taskId);
    const setTitle = (taskTitle) => (name = taskTitle);
    const setDescription = (descr) => (description = descr);
    const setDueDate = (date) => (dueDate = date);
    const setProjectName = (name) => (projectName = name);

    const getProjectName = () => projectName;
    const getId = () => id;
    const getTitle = () => title;
    const getDueDate = () => dueDate;
    const getDescription = () => description;

    const keys = () => {
      const props = {
        id: "",
        name: "",
        description: "",
        projectName: "",
        dueDate: "",
      };
      return props;
    };

    return {
      keys,
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

  const assignTaskValues = (task, formDataArray) => {
    const uid = getUid();

    const taskValues = {};

    for (const pair of formDataArray) {
      const key = pair[0];
      const value = pair[1];
      alert(pair);

      if (key in task.keys()) {
        taskValues[key] = value;
      } else {
        taskValues[key] = "field not found";
      }
    }

    task.setId(uid);
    task.setTitle(taskValues.name);
    task.setDescription(taskValues.description);
    task.setDueDate(taskValues.duedate);
    task.setProjectName(taskValues.projectName);


    return task;
  };

  const createNewTask = (formDataEntries) => {
    const taskObj = Task();
    const task = assignTaskValues(taskObj, formDataEntries);
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
