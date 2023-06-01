// domService.js
// Role: Service provider
// Responsibilities: Add/remove/listen to DOM elements. Broadcast DOM related events to pubSub

import pubSub from "./pubsub";
import taskController from "./taskController";

window.onload = (event) => {
  pubSub.publish("pageLoaded");
};
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

  const updateProjectList = (project) => {
    if (
      !document.querySelector("[data-id=" + CSS.escape(project.id) + "]") &&
      project.name != "Inbox"
    ) {
      const projectEl = createProjectElement(project);
      const projectListContainer = document.querySelector(".project-container");

      projectListContainer.appendChild(projectEl);
    }
  };

  const clearTaskViewer = () => {
    document
      .querySelectorAll(".task-container")
      .forEach((task) => removeElement(task));
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
    const calendarBtn = form.querySelector(".date-picker");

    // Populate the form inputs initially with current values
    form.getElementById("title").value = titleEl.textContent;
    form.getElementById("duedate").value = dueDateEl.textContent;
    form.getElementById("description").value = descriptionEl.textContent;

    cancelBtn.addEventListener("click", () => {
      const formEl = document.querySelector(".edit-task-form");
      removeElement(formEl);
    });

    // TODO we need to add a datepicker input to edit date
    const datePicker = document.querySelector(".date-picker");
    // TODO add event listener not working
    //

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

  const _createNewTaskNode = (task) => {
    const newTaskContainer = document.createElement("div");
    newTaskContainer.setAttribute("data-id", task.id);
    newTaskContainer.classList.add("task-container");

    const taskCompleteBtn = document.createElement("input");
    taskCompleteBtn.classList.add("task-complete-btn");
    taskCompleteBtn.setAttribute("type", "checkbox");

    taskCompleteBtn.addEventListener("click", () => {
      removeElement(newTaskContainer);
    });

    const nameEl = document.createElement("p");
    nameEl.classList.add("task-title");
    nameEl.textContent = task.name;

    const descriptionEl = document.createElement("p");
    descriptionEl.classList.add("task-description");
    descriptionEl.textContent = task.description;

    const dueDateEl = document.createElement("p");
    dueDateEl.classList.add("task-due-date");
    dueDateEl.textContent = task.duedate;

    const taskBtnContainer = document.createElement("div");
    taskBtnContainer.classList.add("task-btn-container");

    const deleteBtnEl = document.createElement("div");
    deleteBtnEl.classList.add("delete-btn");
    deleteBtnEl.textContent = "Del";

    deleteBtnEl.addEventListener("click", () => {
      removeElement(newTaskContainer);
      pubSub.publish("taskDeleted", task);
    });

    const editBtnEL = document.createElement("div");
    editBtnEL.classList.add("edit-btn");
    editBtnEL.textContent = "Edit";

    editBtnEL.addEventListener("click", () => {
      showTaskEditMenu(newTaskContainer);
    });

    const taskInfoContainer = document.createElement("div");
    taskBtnContainer.append(deleteBtnEl, editBtnEL);
    taskInfoContainer.append(nameEl, descriptionEl, dueDateEl);

    newTaskContainer.append(
      taskCompleteBtn,
      taskInfoContainer,
      taskBtnContainer
    );

    return newTaskContainer;
  };

  const showTask = (task) => {
    const taskViewer = document.querySelector(".project-tasks");

      // TODO i dont like this down here, buried
    const taskEl = _createNewTaskNode(task);
    taskViewer.appendChild(taskEl);
  };

  const showAllTasks = (project) => {
    for (const task of project.tasks) {
      showTask(task);
    }
  };
  const showProject = (project) => {
    updateProjectList(project);
    updateTaskViewerTitle(project.name);

    clearTaskViewer();
    showAllTasks(project);
  };

  const removeProject = (project) => {
    const projectElement = document.querySelector(
      "[data-id=" + CSS.escape(project.id) + "]"
    );

    removeElement(projectElement);
    clearTaskViewer();
    pubSub.publish("projectRemoved", project);
  };

  const getProjectFormData = () => {
    const input = document.querySelector(".new-project-form input");
    const projName = input.value;
    input.value = "";

    const form = document.querySelector(".new-project-form");
    form.remove();
    return projName;
  };

  const createProjectElement = (project) => {
    const projectElement = document.createElement("div");
    const projectTitleElement = document.createElement("div");
    const deleteBtn = document.createElement("div");

    projectElement.className = "project";
    projectElement.setAttribute("data-id", project.id);

    projectTitleElement.className = "project-title";

    projectTitleElement.addEventListener("click", () => {
      showProject(project);
      updateTaskViewerTitle(project.name);
    });
    projectTitleElement.textContent = project.name;

    deleteBtn.className = "project-delete-btn";
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", () => {
      removeProject(project);
    });

    projectElement.appendChild(projectTitleElement);
    projectElement.appendChild(deleteBtn);

    return projectElement;
  };

  const showInProjectListViewer = (form) => {
    const projectContainer = document.querySelector(".project-container");
    projectContainer.appendChild(form);
  };

  const showAddProject = () => {
    const form = createForm("new-project-template");
    // A generic form is created. However, project links
    // are not conveyed
    //TODO consider making showInViewer a single method
    showInProjectListViewer(form);

    const addProjectBtn = document.querySelector(".add-project-btn");
    addProjectBtn.addEventListener("click", () => {
      const formValues = getFormValues(form);

      pubSub.publish("newProjectSubmitted", formValues);
    });

    const cancelBtn = document.querySelector(".cancel-project-btn");
    cancelBtn.addEventListener("click", () => {
        removeElement(form); 
    });
  };

  const updateTaskViewerTitle = (projName) => {
    const title = document.querySelector(".project-viewer-title");
      title.textContent = projName; 
  };

  const addNewProject = () => {
    showAddProject();
  };

  const parseDate = (dateVal) => {
    const pickerValue = dateVal.value;
    const strDate = dateVal.split("-");
    const date = strDate[1] + "/" + strDate[2] + "/" + strDate[0];

    return date;
  };

  const getTemplateClone = (templateId) => {
    const template = document.getElementById(templateId);
    const clone = template.content.cloneNode(true);

    return clone;
  };


  const createForm = (templateId) => {
    const template = getTemplateClone(templateId);
    const form = template.querySelector("form");
    form.setAttribute("data-id", getCurrentProjectName());

    return form;
  };

  const showAddTask = () => {
    const form = createForm("new-task-template");

    const projectName = getCurrentProjectName();
    form.setAttribute("data-id", projectName);

    const projectViewer = document.querySelector(".project-viewer");
    projectViewer.appendChild(form);

    const dueDateBtn = form.querySelector(".due-date-btn-text");
    dueDateBtn.addEventListener("click", () => {
      const datePicker = document.getElementById("duedate");
      datePicker.addEventListener("change", () => {
        const date = parseDate(datePicker.value);

        dueDateBtn.textContent = date;
      });

      datePicker.showPicker();
    });

    const cancelBtn = document.querySelector(".cancel-task-btn");
    cancelBtn.addEventListener("click", () => {
      form.remove();
    });

    const saveBtn = document.querySelector(".save-task-btn");
    saveBtn.addEventListener("click", () => {
      const formKeyValues = getFormValues(form);

      pubSub.publish("taskSubmitted", formKeyValues);
    });
    //
  };

  const addNewTask = () => {
    hideElement(document.querySelector(".add-task-btn"));
    showAddTask();
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
    showElement(document.querySelector("add-task-btn"));
    updateTaskViewerTitle("Inbox");

    pubSub.publish("projectClicked", "Inbox");
  };

  const getTaskContainer = (taskId) => {
    // Return the div container for the task
    const container = document.querySelector(
      "[data-id=" + CSS.escape(taskId) + "]"
    );

    return container;
  };

  const showUpdatedTask = (task) => {
    const name = task.name;
    const description = task.description;
    const dueDate = task.duedate;
    const container = getTaskContainer(task.id);

    container.querySelector(".task-title").textContent = name;
    container.querySelector(".task-description").textContent = description;

    container.querySelector(".task-due-date").textContent = dueDate;
  };

  const initializeUi = () => {
    startTaskEvents();
    createInbox();
  };

  pubSub.subscribe("taskAdded", showTask);
  pubSub.subscribe("taskUpdated", showUpdatedTask);

  pubSub.subscribe("projectRetrieved", showProject);
  pubSub.subscribe("projectAdded", showProject);

  pubSub.subscribe("projectDeleted", showInbox);

  return {
    initializeUi,
  };
})();

export default domService;
