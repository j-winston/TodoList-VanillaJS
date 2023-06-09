// Module: taskController.js
// Role: Information provider
// Responsibilities:

import storage from "./storage";
import pubSub from "./pubsub";
import uid from "./uid";

const taskController = (() => {
  const taskMaker = {
    newTask() {
      return Object.create(this.taskModel);
    },

    taskModel: {
      _id: "",
      _taskTitle: "",
      _description: "",
      _dueDate: "",
      _projectName: "",

      set setId(taskId) {
        this._id = taskId;
      },

      set setTitle(title) {
        this._taskTitle = title;
      },

      set setDueDate(taskDueDate) {
        this._dueDate = taskDueDate;
      },

      set setProjectName(taskProjectName) {
        this._projectName = taskProjectName;
      },

      set setDescription(taskDescription) {
        this._description = taskDescription;
      },

      get getProjectName() {
        return this._projectName;
      },

      get getTitle() {
        return this._taskTitle;
      },

      get getId() {
        return this._id;
      },

      get getDescription() {
        return this._description;
      },

      get getDueDate() {
        return this._dueDate;
      },
    },
  };

  const assignUid = (task) => {
    task.setId = uid.create();

    return task;
  };

  const assignTaskValues = (newTask, formKeyValuePairs) => {
    const task = assignUid(newTask);

    task.setTitle = formKeyValuePairs.name;
    task.setDescription = formKeyValuePairs.description;
    task.setDueDate = formKeyValuePairs.duedate;
    task.setProjectName = formKeyValuePairs.projName;

    return task;
  };

  const createNewTask = (formKeyValues) => {
    const newTask = taskMaker.newTask();
    const task = assignTaskValues(newTask, formKeyValues);

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
