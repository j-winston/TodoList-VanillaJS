// domService.js
// Role: Service provider
// Responsibilities: Add/remove/listen to DOM elements. Broadcast DOM events to pubSub
import pubSub from "./pubsub";

const domService = (() => {

    const hideElement = (el) => {
        el.remove(); 
    }

  const removeProject = (id) => {
    const projectElement = document.querySelector('[data-id-project="' + id + '"]');
      hideElement(projectElement);
  };

  const createProjectElement = (name) => {
    const projectElement = document.createElement("div");
    const projectTitleElement = document.createElement("div");
    const deleteBtn = document.createElement("div");

    projectElement.className = "project";
    projectElement.setAttribute("data-id-project", name);

    projectTitleElement.className = "project-title";
    projectTitleElement.textContent = name;

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
    // Show template
    const template = document.getElementById("newProjectTemplate");
    const formNode = template.content.cloneNode(true);

    const projectContainer = document.querySelector(".project-container");
    projectContainer.appendChild(formNode);

    const confirmBtn = document.querySelector(".confirm-project-btn");
    confirmBtn.addEventListener("click", getFormData);

    const cancelBtn = document.querySelector(".cancel-project-btn");
    cancelBtn.addEventListener("click", () => {
       const formEl = document.querySelector('.new-project-form');
        formEl.remove();
    });
  };

  const displayAllTasks = (tasks) => {
    tasks.forEach((task) => {
      _renderToScreen(task);
    });
  };

  const _renderToScreen = (task) => {
    const taskViewerWindow = document.querySelector(".project-tasks");
    const taskHtmlElement = _createNewTaskNode(task);

    taskViewerWindow.appendChild(taskHtmlElement);
  };

  const _createNewTaskNode = (task) => {
    const container = document.createElement("div");
    const title = document.createElement("p");
    const description = document.createElement("p");
    const deleteBtn = document.createElement("div");

    title.textContent = task.title;
    description.textContent = task.description;

    const dataId = task.id;

    container.classList.add("task-container");
    title.classList.add("task-title");
    description.classList.add("task-description");

    container.appendChild(description);
    container.appendChild(title);
    container.setAttribute("data-id", dataId);

    return container;
  };

  const refresh = (task) => {
    const el = document.querySelector(".task-container");
    el.textContent = task;
  };

  pubSub.subscribe("tasksRetrieved", displayAllTasks);

  const startListeners = () => {
    const addProjectBtn = document.querySelector(".add-project-btn");
    addProjectBtn.addEventListener("click", showNewProjectForm);

  };

  return {
    startListeners,
  };
})();

export default domService;
