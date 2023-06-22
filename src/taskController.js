// Module:
// Role: Information provider
// Responsibilities:

import storage from "./storage";
import pubSub from "./pubsub";
import uid from "./uid";

const taskController = (() => {
  const Task = (entries) => {
    let _values = {};

    const setValues = (frmEntries) => {
      for (const pair of frmEntries) {
        const key = pair[0];
        const value = pair[1];

        _values[key] = value;
      }
    };

    const getValue = (key) => {
      const values = _values;
      if (key in values) {
        return values[key];
      } else {
        return `key: [${key}] not found`;
      }
    };

    setValues(entries);

    return {
      setValues,
      getValue,
    };
  };

  const createNewTask = (formEntries) => {
    const task = Task(formEntries);

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
