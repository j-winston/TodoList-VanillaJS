import controllerInterface from "./controllerInterface";
import projectController from "./projectController";
import pubSub from "./pubsub";
import Container from "./container";
const domService = (() => {
  const hideElement = (el) => {
    el.style.visibility = "hidden";
  };

  const showElement = (hiddenElement) => {
    const element = document.querySelector(hiddenElement);

    element.style.visibility = "visible";
  };

  const removeElement = (el) => {
    el.remove();
  };

  const createForm = (templateId) => {
    const template = getTemplateClone(templateId);
    const form = template.querySelector("form");

    return form;
  };

  const findProjectEl = (projectId) => {
    const projEl = document.querySelector(
      "[data-id=" + CSS.escape(projectId) + "]"
    );

    return projEl;
  };

  const removeProject = (el) => {
    removeElement(el);
    clearTaskViewer();
    showInbox();
  };

  const getFormValues = (form) => {
    const inputElements = form.querySelectorAll("input");
    const formValues = {};

    inputElements.forEach((input) => {
      formValues[input.id] = input.value;
    });

    return formValues;
  };
  const getCurrentProjectName = () => {
    const name = document.querySelector(".project-viewer-title").textContent;
    return name;
  };

  const projectExists = (projectId) => {
    if (document.querySelector("[data-id=" + CSS.escape(projectId) + "]")) {
      return true;
    }
    return false;
  };

  const clearTaskViewer = () => {
    document
      .querySelectorAll(".task-container")
      .forEach((task) => removeElement(task));
  };
  const updateTaskViewerTitle = (projName) => {
    const title = document.querySelector(".project-viewer-title");
    title.textContent = projName;
  };

  const showTaskEditMenu = (taskContainer) => {
    // We can use the current task info to autofill the edit fields
    const titleEl = taskContainer.querySelector(".task-title");
    const dueDateEl = taskContainer.querySelector(".task-due-date");
    const descriptionEl = taskContainer.querySelector(".task-description");

    // When user clicks edit, show the edit form
    const template = document.getElementById("editTaskTemplate");
    const form = template.content.cloneNode(true);

    const cancelBtn = form.querySelector(".cancel-btn");
    const saveBtn = form.querySelector(".save-btn");

    // Populate the form inputs initially with current values
    form.getElementById("title").value = titleEl.textContent;
    form.getElementById("duedate").value = dueDateEl.textContent;
    form.getElementById("description").value = descriptionEl.textContent;

    cancelBtn.addEventListener("click", () => {
      const formEl = document.querySelector(".edit-task-form");
      removeElement(formEl);
    });

    saveBtn.addEventListener("click", () => {
      // We grab all the input values once they click save
      const editTaskForm = document.querySelector(".edit-task-form .inputs");
      const titleEl = editTaskForm.querySelector('input[class="title"]');
      const dueDateEl = editTaskForm.querySelector('input[type="date"]');
      const descriptionEl = editTaskForm.querySelector(
        'input[class="description"]'
      );

      // Finally, broadcast all the stored edits along unique
      // task id
      const taskEditFormValues = {};
      const taskId = taskContainer.getAttribute("data-id");

      taskEditFormValues.id = taskId;
      taskEditFormValues.projName = getCurrentProjectName();
      taskEditFormValues.name = titleEl.value;
      taskEditFormValues.duedate = dueDateEl.value;
      taskEditFormValues.description = descriptionEl.value;

      pubSub.publish("taskEditSubmitted", taskEditFormValues);

      // Once saved, remove the edit form
      editTaskForm.remove();
    });

    taskContainer.appendChild(form);
  };

  const showTask = (taskContainer) => {
    const taskViewer = document.querySelector(".project-tasks");
    const taskEl = taskContainer.getElement(); 

    taskViewer.appendChild(taskEl);
  };

  const addProjectToViewer = (projectEl) => {
    const projectListContainer = document.querySelector(".project-container");
    projectListContainer.appendChild(projectEl);
  };

  const showAddProjectDialog = () => {
    const form = createForm("new-project-template");
    appendFormToViewer(form, ".project-container");

    const saveProjBtn = document.querySelector(".confirm-project-btn");
    saveProjBtn.addEventListener("click", () => {
      const projContainer = Container.getNewProjectContainer(form);

      pubSub.publish("newProjectAdded", projContainer);

      removeElement(form);
    });

    const cancelNewProjectBtn = document.querySelector(".cancel-project-btn");
    cancelNewProjectBtn.addEventListener("click", () => {
      removeElement(form);
    });
  };

  const showNewProject = (container) => {
    const projEl = container.getElement();
    const title = container.name;

    addProjectToViewer(projEl);
    updateTaskViewerTitle(title);
  };

  const parseDate = (dateVal) => {
    const strDate = dateVal.split("-");
    const date = strDate[1] + "/" + strDate[2] + "/" + strDate[0];

    return date;
  };

  const getTemplateClone = (templateId) => {
    const template = document.getElementById(templateId);
    const clone = template.content.cloneNode(true);

    return clone;
  };

  const appendFormToViewer = (form, el) => {
    const viewer = document.querySelector(el);

    viewer.appendChild(form);
  };

  const submitTask = (formKeyValues) => {
    controllerInterface.addTask(formKeyValues);
  };

  const showAddTaskDialog = () => {
    const form = createForm("new-task-template");
    appendFormToViewer(form, ".project-viewer");

    form.elements["project-name"].value = getCurrentProjectName();

    // Event handlers
    const dueDateBtn = form.querySelector(".due-date-btn-text");
    dueDateBtn.addEventListener("click", () => {
      const datePicker = form.querySelector("[name=due-date]");
      datePicker.addEventListener("change", () => {
        const dueDate = parseDate(datePicker.value);

        dueDateBtn.textContent = dueDate;
      });

      datePicker.showPicker();
    });

    const cancelBtn = document.querySelector(".cancel-task-btn");
    cancelBtn.addEventListener("click", () => {
      form.remove();
    });

    const saveBtn = document.querySelector(".save-task-btn");
    saveBtn.addEventListener("click", () => {
      const taskContainer = Container.getNewTaskContainer(form);

      pubSub.publish("newTaskAdded", taskContainer);

      showElement(".add-task-btn");
      removeElement(form);
    });
  };

  const addNewTask = () => {
    hideElement(document.querySelector(".add-task-btn"));
    showAddTask();
  };

  const startTaskEvents = () => {
    const addProjectBtn = document.querySelector(".add-project-btn");
    addProjectBtn.addEventListener("click", showAddProjectDialog);

    const addTaskBtn = document.querySelector(".add-task-btn");
    addTaskBtn.addEventListener("click", showAddTaskDialog);
  };

  const submitProject = (name) => {
    controllerInterface.addNewProject(name);
  };

  const createInbox = () => {
    updateTaskViewerTitle("Inbox");

    const inboxBtn = document.querySelector(".inbox-nav-link");
    inboxBtn.textContent = "Inbox";
    submitProject("Inbox");
    inboxBtn.addEventListener("click", () => {
      updateTaskViewerTitle("Inbox");
    });
  };

  const showInbox = () => {
    updateTaskViewerTitle("Inbox");
    clearTaskViewer();

    pubSub.publish("inboxAdded");
  };

  const getTaskContainer = (taskId) => {
    // Return the div container for the task
    const container = document.querySelector(
      "[data-id=" + CSS.escape(taskId) + "]"
    );

    return container;
  };

  const showProject = (project) => {
    updateTaskViewerTitle(project.name);
    clearTaskViewer();

    for (let task of project.tasks) {
      showTask(task);
    }
  };

  const showAllProjects = (projectsArr) => {
    for (const proj of projectsArr) {
      if (projectExists(proj) || proj.name === "Inbox") {
        showProject(proj);
      } else {
        showNewProject(proj);
      }
    }
  };

  const showUpdatedTask = (task) => {
    const name = task.getProjectName();
    const description = task.getDescription();
    const dueDate = task.getDueDate();
    const container = getTaskContainer(task.getId());

    container.querySelector(".task-title").textContent = name;
    container.querySelector(".task-description").textContent = description;

    container.querySelector(".task-due-date").textContent = dueDate;
  };

  const loadFromLocalStorage = () => {
    //controllerInterface.getAllProjects();
  };

  const initializeUi = () => {
    startTaskEvents();
    showInbox();
  };

  window.onload = (event) => {
    loadFromLocalStorage();
  };

  pubSub.subscribe("projectSaved", showNewProject);
  pubSub.subscribe("taskSaved", showTask);
  pubSub.subscribe("projectDeleted", showInbox);

  //pubSub.subscribe("allProjectsRetrieved", showAllProjects);
  // pubSub.subscribe("projectDeleted", showInbox);
  // pubSub.subscribe("projectRetrieved", showProject);

  //pubSub.subscribe("newProjectSaved", showNewProject);
  // pubSub.subscribe('projectDeleted', showInbox);

  // pubSub.subscribe("taskAdded", showTask);
  // pubSub.subscribe("taskUpdated", showUpdatedTask);

  return {
    initializeUi,
  };
})();

export default domService;
