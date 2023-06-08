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
    const task = assignTaskValues(newTask, formKeyValues);

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
