// Module: taskController.js
// Role: Information provider
// Responsibilities:

import storage from "./storage";
import pubSub from "./pubsub";
import uid from "./uid";

const taskController = (() => {
  //  const Task = (formDataObj) => {
  //    const _entries = formDataObj.entries();
  //
  //    let _taskData = {};
  //
  //    const setInitialValues = (_entries) => {
  //      for (let pair of _entries) {
  //        const key = pair[0];
  //        const value = pair[1];
  //        _taskData[key] = value;
  //      }
  //
  //      _taskData["id"] = uid.create();
  //    };
  //
  //    const getValue = (key) => {
  //      if (_taskData[key]) {
  //        return _taskData[key];
  //      } else return false;
  //    };
  //
  //    const setValue = (key, value) => {
  //      if (key in _taskData) {
  //        _taskData[key] = value;
  //      } else return false;
  //    };
  //
  //    setInitialValues(_entries);
  //
  //    return {
  //      getValue,
  //      setValue,
  //    };
  //  };
  //
  //  const createNewTask = (formDataObj) => {
  //    const task = Task(formDataObj);
  //    return task;
  //  };

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
    update,
  };
})();

export default taskController;
