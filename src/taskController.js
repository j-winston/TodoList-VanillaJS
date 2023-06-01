// Module: taskController.js
// Role: Information provider
// Responsibilities:

import uid from "./uid";
import storage from "./storage";
import pubSub from "./pubsub";

const taskController = (() => {
  const getTaskModel = () => {
    const taskModel = {
      id: "",
      name: "",
      description: "",
      dueDate: "",
      projName: "",
    };

    return taskModel;
  };

  const setUid = (task) => {
    task.id = uid.create();
    return task;
  };

  const create = (taskData) => {
    const task = getTaskModel();
    task.id = setUid();

    // this is a common method with getTaskValues(inputElements)

    for (let key in taskData) {
      if (key in task) {
        task[key] = taskData[key];
      }
    }

    return task;
  };

  const getTaskValues = (inputElements) => {
    const taskKeys = getTaskKeys();
  };

  const update = (taskUpdate) => {
    // 'taskify' data goes here
    // TODO fix delete bug and move on
    const projName = taskUpdate.projName;
    const id = taskUpdate.id;

    const task = storage.loadTask(projName, id);

    for (const key in taskUpdate) {
      if (key in task) {
        task[key] = taskUpdate[key];
      }
    }
    // task data now needs to be saved
    // storage.saveTask(task);
    pubSub.publish("taskUpdated", task);
  };

  return {
    create,
    update,
  };
})();

export default taskController;
