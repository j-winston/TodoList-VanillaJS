// domService.js
// Role: Service provider
// Responsibilities: Add/remove/listen to DOM elements. Broadcast DOM events to pubSub
import pubSub from "./pubsub";

const hideElement = (el) => {
  el.style.display = "hidden";
};

const showElement = (el) => {
  el.style.display = "visible";
};
const domService = (() => {
  const removeElement = (el) => {
    el.remove();
  };

  const getCurrentProjectName = () => {
    const name = document.querySelector(".project-viewer-title").textContent;
    return name;
  };

  const removeProject = (id) => {
    const projectElement = document.querySelector(
      '[data-id-project="' + id + '"]'
    );

    removeElement(projectElement);
    pubSub.publish("projectDeleted", id);
  };


  const updateProjectList = (projectEl) => {
    const projectListContainer = document.querySelector(".project-container");
    projectListContainer.appendChild(projectEl);
  };


    const getProjectFormData = () => {
      const input = document.querySelector(".new-project-form input");
      const projName = input.value;
      input.value = "";

      const form = document.querySelector(".new-project-form");
      form.remove();
        return projName;

    }

  const createProjectElement = (name) => {
    const projectElement = document.createElement("div");
    const projectTitleElement = document.createElement("div");
    const deleteBtn = document.createElement("div");
    const dataIdProject = name;

    projectElement.className = "project";
    projectElement.setAttribute("data-id-project", dataIdProject);

    projectTitleElement.className = "project-title";

    projectTitleElement.addEventListener("click", () => {
      pubSub.publish("projectClicked", name);
    });

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

  const showNewProjectForm = () => {
    const template = document.getElementById("newProjectTemplate");
    const formNode = template.content.cloneNode(true);

    const projectContainer = document.querySelector(".project-container");
    projectContainer.appendChild(formNode);

    const submitBtn = document.querySelector(".confirm-project-btn");

    submitBtn.addEventListener("click", () => {
        const projName = getProjectFormData();

        const projEl = createProjectElement(projName);

        updateProjectList(projEl);
        updateTaskViewerTitle(projName);

      updateProjectList(projEl);
    });

    const cancelBtn = document.querySelector(".cancel-project-btn");
    cancelBtn.addEventListener("click", () => {
      const formEl = document.querySelector(".new-project-form");
      formEl.remove();
    });
  };

  const updateTaskViewerTitle = (projName) => {
    const title = document.querySelector(".project-viewer-title");
    title.textContent = projName; 
  };

  const addNewProject = () => {
    showNewProjectForm();
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

  const showTask = (tasks) => {
    tasks.forEach((task) => {
      const taskHtmlElement = _createNewTaskNode(task);

      taskViewer.appendChild(taskHtmlElement);
    });
  };

  const getTaskFormData = (event) => {
    // START HERE Get all task form data and publish it
    // along with current project
    event.preventDefault();
    const task = {};

    const formInputs = document.querySelectorAll(
      ".new-task-form .form-inputs input"
    );
    formInputs.forEach((inputEl) => {
      //-> task[description] = 'sweep up the kitchen'
      task[inputEl.id] = inputEl.value;
    });

    task.projectName = getCurrentProjectName();

    const form = document.querySelector(".new-task-form");
    removeElement(form);

    pubSub.publish("taskSubmitted", task);
  };

  const showNewTaskForm = () => {
    const addTaskBtn = document.querySelector(".add-task-btn");
    hideElement(addTaskBtn);

    const template = document.getElementById("newTaskTemplate");
    const formNode = template.content.cloneNode(true);

    const taskContainer = document.querySelector(".project-viewer");
    taskContainer.appendChild(formNode);

    const confirmBtn = document.querySelector(".confirm-task-btn");
    confirmBtn.addEventListener("click", (event) => {
      getTaskFormData(event);
      showElement(addTaskBtn);
    });

    const cancelBtn = document.querySelector(".cancel-task-btn");
    cancelBtn.addEventListener("click", () => {
      const formEl = document.querySelector(".new-task-form");
      formEl.remove();
    });
  };

  const addNewTask = () => {
    showNewTaskForm();
  };

  const startEventListeners = () => {
    const addProjectBtn = document.querySelector(".add-project-btn");
    addProjectBtn.addEventListener("click", addNewProject);

    const addTaskBtn = document.querySelector(".add-task-btn");
    addTaskBtn.addEventListener("click", addNewTask);
  };


  pubSub.subscribe("taskAdded", showTask);
  pubSub.subscribe("projectTasksRetrieved", showTask);
  return {
    startEventListeners,
  };
})();

export default domService;
