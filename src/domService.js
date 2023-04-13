// domService.js
// Role: Service provider
// Responsibilities: Add/remove/listen to DOM elements. Broadcast DOM events to pubSub
import pubSub from "./pubsub";

const domService = (() => {
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
})();

export default domService;
