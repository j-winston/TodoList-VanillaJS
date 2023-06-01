// Module: taskController.js
// Role: Information provider
// Responsibilities:

import storage from "./storage";
import pubSub from "./pubsub";
import uid from "./uid";

const taskController = (() => {
  const getTaskModel = () => {
    const taskModel = {
      id: "",
      name: "",
      description: "",
      duedate: "",
      projName: "",
    };

    return taskModel;
  };

  const assignUid = (task) => {
    task.id = uid.create();

    return task;
  };

  const assignTaskValues = (newTask, formKeyValuePairs) => {
    for (let key in formKeyValuePairs) {
      if (key in newTask) {
        newTask[key] = formKeyValuePairs[key];
      } else {
        console.log("KeyError: " + key + " not found");
      }
    }
    const task = assignUid(newTask);

    return task;
  };

  const createNewTask = (formKeyValues) => {
    const emptyTask = getTaskModel();
    const task = assignTaskValues(emptyTask, formKeyValues);

    return task;
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
    createNewTask,
    update,
  };
})();

export default taskController;
