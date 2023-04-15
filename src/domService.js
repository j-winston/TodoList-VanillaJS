// domService.js
// Role: Service provider
// Responsibilities: Add/remove/listen to DOM elements. Broadcast DOM events to pubSub
import pubSub from "./pubsub";

const domService = (() => {
  const removeElement = (el) => {
    el.remove();
  };

  const removeProject = (id) => {
    const projectElement = document.querySelector(
      '[data-id-project="' + id + '"]'
    );
    removeElement(projectElement);
  };

  const createProjectElement = (name) => {
    const projectElement = document.createElement("div");
    const projectTitleElement = document.createElement("div");
    const deleteBtn = document.createElement("div");
    const dataIdProject = name;

    projectElement.className = "project";
    projectElement.setAttribute("data-id-project", dataIdProject);

    projectTitleElement.className = "project-title";
    projectTitleElement.textContent = name;
    projectElement.addEventListener("click", () => {
      const projectViewerTitle = document.querySelector(
        ".project-viewer-title"
      );
      projectViewerTitle.textContent = name;
      pubSub.publish("projectClicked", dataIdProject);
    });

    deleteBtn.className = "project-delete-btn";
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
      removeProject(projectElement.getAttribute("data-id-project"));
    });

    projectElement.appendChild(projectTitleElement);
    projectElement.appendChild(deleteBtn);

    return projectElement;
  };

  const updateProjectList = (name) => {
    const projectElement = createProjectElement(name);
    const container = document.querySelector(".project-container");

    container.appendChild(projectElement);
  };

  const getFormData = (ev) => {
    ev.preventDefault();

    const input = document.querySelector(".new-project-form input");
    const name = input.value;
    input.value = "";

    const form = document.querySelector(".new-project-form");
    form.remove();

    updateProjectList(name);
  };

  const showNewProjectForm = () => {
    const template = document.getElementById("newProjectTemplate");
    const formNode = template.content.cloneNode(true);

    const projectContainer = document.querySelector(".project-container");
    projectContainer.appendChild(formNode);

    const confirmBtn = document.querySelector(".confirm-project-btn");
    confirmBtn.addEventListener("click", getFormData);

    const cancelBtn = document.querySelector(".cancel-project-btn");
    cancelBtn.addEventListener("click", () => {
      const formEl = document.querySelector(".new-project-form");
      formEl.remove();
    });
  };

  const displayAllTasks = (tasks) => {
    tasks.forEach((task) => {
      _renderToScreen(task);
    });
  };

  const renderToProjectViewer = (task) => {
    const mainContainer = document.querySelector(".project-tasks");
    const taskHtmlElement = _createNewTaskNode(task);

    mainContainer.appendChild(taskHtmlElement);
  };

  const _createNewTaskNode = (task) => {
    const newTaskContainer = document.createElement("div");

    const nameEl = document.createElement("p");
    const descriptionEl = document.createElement("p");
    const dueDateEl = document.createElement("p");
    const deleteBtnEl = document.createElement("div");

    newTaskContainer.classList.add("task-container");

    nameEl.classList.add("task-title");
    nameEl.textContent = task.name;

    descriptionEl.classList.add("task-description");
    descriptionEl.textContent = task.description;

    dueDateEl.classList.add("task-due-date");
    dueDateEl.textContent = task.duedate;

    const dataId = task.id;

    newTaskContainer.appendChild(nameEl);
    newTaskContainer.appendChild(descriptionEl);
    newTaskContainer.appendChild(dueDateEl);

    newTaskContainer.setAttribute("data-id", dataId);

    return newTaskContainer; 
  };

  const refresh = (task) => {
    const el = document.querySelector(".task-container");
    el.textContent = task;
  };

  const displayProjectTasks = (tasks) => {
    tasks.forEach((task) => _renderToScreen(task));
  };

  const getTaskFormData = (ev) => {
    // dont forget about completed status
    ev.preventDefault();
    const task = {};

    const inputElements = document.querySelectorAll(
      ".new-task-form .form-inputs input"
    );
    inputElements.forEach((el) => {
      task[el.id] = el.value;
    });
    const form = document.querySelector(".new-task-form");
    removeElement(form);

    pubSub.publish("taskSubmitted", task);
  };

  const hideElement = (el) => {
    el.style.display = "hidden";
  };

  const showElement = (el) => {
    el.style.display = "visible";
  };
  const showNewTaskForm = () => {
    const addTaskBtn = document.querySelector(".add-task-btn");
    hideElement(addTaskBtn);

    const template = document.getElementById("newTaskTemplate");
    const formNode = template.content.cloneNode(true);

    const taskContainer = document.querySelector(".project-viewer");
    taskContainer.appendChild(formNode);

    const confirmBtn = document.querySelector(".confirm-task-btn");
    confirmBtn.addEventListener("click", (e) => {
      getTaskFormData(e);
      showElement(addTaskBtn);
    });

    const cancelBtn = document.querySelector(".cancel-task-btn");
    cancelBtn.addEventListener("click", () => {
      const formEl = document.querySelector(".new-task-form");
      formEl.remove();
    });
  };

  const startEventListeners = () => {
    const addProjectBtn = document.querySelector(".add-project-btn");
    addProjectBtn.addEventListener("click", showNewProjectForm);

    const addTaskBtn = document.querySelector(".add-task-btn");
    addTaskBtn.addEventListener("click", showNewTaskForm);
  };

  pubSub.subscribe("projectRetrieved", displayProjectTasks);
  pubSub.subscribe("taskAdded", renderToProjectViewer);

  return {
    startEventListeners,
  };
})();

export default domService;
