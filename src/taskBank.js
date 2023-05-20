//Module: taskBank.js
//Role: Information provider
//Responsibilities: Add task, return task, delete task
import pubSub from "./pubsub";

const taskBank = (() => {
  const createUid = () => {
      const UID = Date.now().toString(32) + Math.random(16).toString(16).replace(/\./g, "") ;
      alert(UID);
  };

  const projects = [];

  const findProject = (name) => {
    for (const project of projects) {
      if (project.name === name) {
        return project;
      }
    }
  };

  const _getTaskIndex = (id) => {
    const index = tasks.findIndex((task) => task.id === id);

    return index;
  };

  const addTask = (formValues) => {
    const task = {};
    const id = createUid();
    task.id = id;

    for (const field in formValues) {
      task[field] = formValues[field];
    }

    const project = findProject(formValues.projName);
    project.tasks.push(task);


    pubSub.publish("taskAdded", task); // TODO change to taskAdded
  };

  const setCompleted = (id) => {
    const index = _getTaskIndex(id);
    tasks[index].completed = true;
    // pubSub.publish('task-updated',)
  };

  const getAllTasks = () => {
    pubSub.publish("tasksRetrieved", tasks);
  };

  // this should retrieve then entire project
  const getProject = (name) => {
    const proj = findProject(name);
    pubSub.publish("projectRetrieved", proj);
  };

  const deleteProject = (projName) => {
    const proj = findProject(projName);
    const index = projects.indexOf(proj);

    projects.splice(index, 1);
    pubSub.publish("projectDeleted", projName);
  };

  const addProject = (projName) => {
    const project = {
      id: createUid(),
      name: projName,
      tasks: [],
    };

    projects.push(project);
  };

  const delTask = (task) => {
    const proj = findProject(task.projName);
    const taskIndex = proj.tasks.indexOf(task);

    proj.tasks.splice(taskIndex, 1);
  };

  const updateTask = (formValues) => {
    projects.forEach((project) => {
      for (const task of project.tasks) {
        if (task.id === formValues.id) {
            for(const taskField in task){
                task[taskField] = formValues[taskField]
            }
          pubSub.publish("taskUpdated", task);
        }
      }
    });
  };

  // Subscriptions
  pubSub.subscribe("inboxClicked", getAllTasks);

  pubSub.subscribe("newProjectSubmitted", addProject);
  pubSub.subscribe("projectClicked", getProject);
  pubSub.subscribe("projectRemoved", deleteProject);

  pubSub.subscribe("taskFormSubmitted", addTask);
  pubSub.subscribe("taskDeleted", delTask);
  pubSub.subscribe("taskEditSubmitted", updateTask);
})();

export default taskBank;
