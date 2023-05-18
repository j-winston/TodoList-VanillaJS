// domService.js
// Role: Service provider
// Responsibilities: Add/remove/listen to DOM elements. Broadcast DOM related events to pubSub

import pubSub from "./pubsub";

const hideElement = (el) => {
  el.style.visibility = "hidden";
};

const showElement = (el) => {
  el.style.visibility = "visible";
};

const domService = (() => {
  const removeElement = (el) => {
    el.remove();
  };

  const getCurrentProjectName = () => {
    const name = document.querySelector(".project-viewer-title").textContent;
    return name;
  };

  const updateProjectList = (projectEl) => {
    const projectListContainer = document.querySelector(".project-container");
    projectListContainer.appendChild(projectEl);
  };

  const clearTaskViewer = () => {
    document
      .querySelectorAll(".task-container")
      .forEach((task) => removeElement(task));
  };

  const showTaskEditMenu = (taskContainer) => {
    taskContainer.id = "active-container";
    const titleEl = taskContainer.querySelector(".task-title");
    const descriptionEl = taskContainer.querySelector(".task-description");
    const dueDateEl = taskContainer.querySelector(".task-due-date");

    // TODO create function showForm(editTask), showForm(newTask);
    const template = document.getElementById("editTaskTemplate");
    //this is the form that shows when you click edit
    const form = template.content.cloneNode(true);

    const cancelBtn = form.querySelector(".cancel-btn");
    const saveBtn = form.querySelector(".save-btn");

    form.getElementById("title").value = titleEl.textContent;
    form.getElementById("description").value = descriptionEl.textContent;
    form.getElementById("duedate").value = dueDateEl.textContent;

    cancelBtn.addEventListener("click", () => {
      const formEl = document.querySelector(".edit-task-form");
      removeElement(formEl);
    });

    saveBtn.addEventListener("click", () => {
      const editTaskForm = document.querySelector(".edit-task-form");

      const titleEl = editTaskForm.querySelector('input[class="title"]');
      const descriptionEl = editTaskForm.querySelector(
        'input[class="description"]'
      );
      const dueDateEl = editTaskForm.querySelector('input[type="date"]');

      const updatedTask = {};
      updatedTask.projName = getCurrentProjectName();
      updatedTask.name = titleEl.value;
      updatedTask.description = descriptionEl.value;
      updatedTask.duedate = dueDateEl.value;

      pubSub.publish("taskModified", updatedTask);

      editTaskForm.remove();
    });

    taskContainer.appendChild(form);
  };

  const setActiveContainer = (newContainer) => {
    // get old container and remove active
    document.getElementById("active-container").id = "inactive-container";
    newContainer.id = "active-container";
  };

  const _createNewTaskNode = (task) => {
    const newTaskContainer = document.createElement("div");

    const nameEl = document.createElement("p");
    const descriptionEl = document.createElement("p");
    const dueDateEl = document.createElement("p");

    const taskBtnContainer = document.createElement("div");
    const deleteBtnEl = document.createElement("div");
    const editBtnEL = document.createElement("div");

    taskBtnContainer.classList.add("task-btn-container");

    editBtnEL.classList.add("edit-btn");
    editBtnEL.textContent = "Edit";

    deleteBtnEl.classList.add("delete-btn");
    deleteBtnEl.textContent = "Del";
    deleteBtnEl.addEventListener("click", () => {
      removeElement(newTaskContainer);
      pubSub.publish("taskDeleted", task);
    });

    taskBtnContainer.appendChild(editBtnEL);
    taskBtnContainer.appendChild(deleteBtnEl);

    newTaskContainer.classList.add("task-container");

    nameEl.classList.add("task-title");
    nameEl.textContent = task.name;

    descriptionEl.classList.add("task-description");
    descriptionEl.textContent = task.description;

    dueDateEl.classList.add("task-due-date");
    dueDateEl.textContent = task.duedate;

    newTaskContainer.appendChild(nameEl);
    newTaskContainer.appendChild(descriptionEl);
    newTaskContainer.appendChild(dueDateEl);
    newTaskContainer.appendChild(taskBtnContainer);

    editBtnEL.addEventListener("click", () => {
      showTaskEditMenu(newTaskContainer);
    });

    return newTaskContainer;
  };

  const showTask = (task) => {
    const taskViewer = document.querySelector(".project-tasks");

    const taskEl = _createNewTaskNode(task);
    taskViewer.appendChild(taskEl);
  };

  const showProject = (project) => {
    clearTaskViewer();
    updateTaskViewerTitle(project.name);

    for (const task of project.tasks) {
      showTask(task);
    }
  };

  const removeProject = (projName) => {
    const projectElement = document.querySelector(
      '[data-id-project-name="' + projName + '"]'
    );

    removeElement(projectElement);
    clearTaskViewer();
    pubSub.publish("projectRemoved", projName);
  };

  const getProjectFormData = () => {
    const input = document.querySelector(".new-project-form input");
    const projName = input.value;
    input.value = "";

    const form = document.querySelector(".new-project-form");
    form.remove();
    return projName;
  };

  const createProjectElement = (projectName) => {
    const projectElement = document.createElement("div");
    const projectTitleElement = document.createElement("div");
    const deleteBtn = document.createElement("div");

    projectElement.className = "project";
    projectElement.setAttribute("data-id-project-name", projectName);

    projectTitleElement.className = "project-title";

    projectTitleElement.addEventListener("click", () => {
      pubSub.publish("projectClicked", projectName);
      updateTaskViewerTitle(projectName);
    });
    projectTitleElement.textContent = projectName;

    deleteBtn.className = "project-delete-btn";
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", () => {
      removeProject(projectName);
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
      clearTaskViewer();
      pubSub.publish("newProjectSubmitted", projName);
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

    task.projName = getCurrentProjectName();

    const form = document.querySelector(".new-task-form");
    removeElement(form);

    pubSub.publish("taskSubmitted", task);
  };

  const showNewTaskForm = () => {
    const template = document.getElementById("newTaskTemplate");
    const formNode = template.content.cloneNode(true);

    const projectViewer = document.querySelector(".project-viewer");
    projectViewer.appendChild(formNode);

    const cancelBtn = document.querySelector(".cancel-task-btn");
    cancelBtn.addEventListener("click", () => {
      const formEl = document.querySelector(".new-task-form");
      formEl.remove();
      showElement(addTaskBtn);
    });

    const confirmBtn = document.querySelector(".confirm-task-btn");
    confirmBtn.addEventListener("click", (event) => {
      //TODO change to getFormData
      getTaskFormData(event);
      showElement(document.querySelector(".add-task-btn"));
    });
  };

  const addNewTask = () => {
    hideElement(document.querySelector(".add-task-btn"));
    showNewTaskForm();
  };

  const startTaskEvents = () => {
    const addProjectBtn = document.querySelector(".add-project-btn");
    addProjectBtn.addEventListener("click", addNewProject);

    const addTaskBtn = document.querySelector(".add-task-btn");
    addTaskBtn.addEventListener("click", addNewTask);
  };

  const createInbox = () => {
    updateTaskViewerTitle("Inbox");

    const inboxBtn = document.querySelector(".inbox-nav-link");
    inboxBtn.textContent = "Inbox";

    inboxBtn.addEventListener("click", () => {
      updateTaskViewerTitle("Inbox");
      pubSub.publish("projectClicked", "Inbox");
    });

    pubSub.publish("newProjectSubmitted", "Inbox");
  };

  const showInbox = () => {
    updateTaskViewerTitle("Inbox");

    pubSub.publish("projectClicked", "Inbox");
  };

  const initializeUi = () => {
    startTaskEvents();
    createInbox();
  };

  const getCurrentContainer = () => {
    const taskContainer = document.getElementById("active-container");

    return taskContainer;
  };

  const showUpdatedTask = (task) => {
    const name = task.name;
    const description = task.description;
    const dueDate = task.duedate;
    alert(task.duedate);

    const activeContainer = getCurrentContainer();
    activeContainer.querySelector(".task-title").textContent = name;

    activeContainer.querySelector(".task-description").textContent =
      description;

    activeContainer.querySelector(".task-due-date").textContent = dueDate;
  };

  pubSub.subscribe("taskAdded", showTask);
  // get a hold of actual DOM element and modify it
  pubSub.subscribe("taskUpdated", showUpdatedTask);

  pubSub.subscribe("projectRetrieved", showProject);
  pubSub.subscribe("projectDeleted", showInbox);

  return {
    initializeUi,
  };
})();

export default domService;
