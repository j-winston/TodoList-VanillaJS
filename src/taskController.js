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
      id: "",
      name: "",
      description: "",
      duedate: "",
      projName: "",
        caca: '', 

      set setId(taskId) {
        this.id = taskId;
      },

      set setTitle(taskTitle) {
        this.name = taskTitle;
      },

      set setDueDate(taskDueDate) {
        this.duedate = taskDueDate;
      },

      set setProjectName(taskProjectName) {
        this.projName = taskProjectName;
      },

      set setDescription(taskDescription) {
        this.description = taskDescription;
      },

      get getProjectName() {
        return this.projName;
      },

      get getTitle() {
        return this.name;
      },

      get getId() {
        return this.id;
      },

      get getDescription() {
        return this.description;
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
      alert(newTask);
    const task = assignTaskValues(newTask, formKeyValues);

    return task;
  };

  const update = (formValues) => {

    const projName = formValues.projName;
    const id = formValues.id;

    const task = storage.loadTask(projName, id);
      alert(Object.getOwnPropertyNames(task))

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
