// domService.js Role: Service provider Responsibilities: Add/remove/listen to DOM elements. Broadcast DOM related events to pubSub
import pubSub from "./pubsub";
import controllerInterface from "./controllerInterface";
import projectController from "./projectController";
import storage from "./storage";

const domService = (() => {
  let defaultProjects = ["Inbox", "Today"];

  const hideElement = (el) => {
    el.style.visibility = "hidden";
  };

  const showElement = (el) => {
    el.style.visibility = "visible";
  };

  const addProjBtn = (() => {
    const el = document.querySelector(".add-project-btn");

    const hide = () => {
      hideElement(el);
    };

    const show = () => {
      showElement(el);
    };

    return {
      hide,
      show,
    };
  })();

  const addTaskBtn = (() => {
    const el = document.querySelector(".add-task-btn");

    const hide = () => {
      hideElement(el);
    };

    const show = () => {
      showElement(el);
    };

    return {
      hide,
      show,
    };
  })();

  const delTask = (task) => {
    controllerInterface.delTask(task);
  };
  const removeElement = (el) => {
    el.remove();
  };
  //
  //
  //  const removeProject = (project) => {
  //    const projectElement = document.querySelector(
  //      "[data-id=" + CSS.escape(project.id) + "]"
  //    );
  //    removeElement(projectElement);
  //
  //    clearTaskViewer();
  //
  //    pubSub.publish("projectRemoved", project);
  //  };
  //
  //  const getFormValues = (form) => {
  //    const inputElements = form.querySelectorAll("input");
  //    const formValues = {};
  //
  //    inputElements.forEach((input) => {
  //      formValues[input.id] = input.value;
  //    });
  //
  //    return formValues;
  //  };
  //
  //
  const selTaskContainerEl = (id) => {
    const tskContainer = document.querySelector(
      "[data-id-task-id= " + CSS.escape(id) + "]"
    );

    return tskContainer;
  };

  const hideTaskCard = (taskId) => {
    const container = selTaskContainerEl(taskId);

    container.querySelector(".task-info-container").style.display = "none";
    container.querySelector(".task-btn-container").style.display = "none";
    container.querySelector(".task-complete-btn").style.display = "none";
  };

  const showTaskCard = (taskId) => {
    const container = selTaskContainerEl(taskId);

    container.querySelector(".task-info-container").style.display = "";
    container.querySelector(".task-btn-container").style.display = "";
    container.querySelector(".task-complete-btn").style.display = "";
  };

  const showTaskEditMenu = (task) => {
    addTaskBtn.hide();

    hideTaskCard(task.id);

    const taskContainer = selTaskContainerEl(task.id);
    const titleEl = taskContainer.querySelector(".task-title");
    const dueDateEl = taskContainer.querySelector(".task-due-date");
    const descriptionEl = taskContainer.querySelector(".task-description");

    const template = document.getElementById("editTaskTemplate");
    const formClone = template.content.cloneNode(true);

    taskContainer.appendChild(formClone);
    const editTaskForm = document.querySelector(".edit-task-form");

    taskContainer.appendChild(editTaskForm);

    // Populate the form inputs initially with current values
    editTaskForm.elements["name"].value = titleEl.textContent;
    editTaskForm.elements["description"].value = descriptionEl.textContent;
    editTaskForm.elements["dueDate"].value = dueDateEl.textContent;

    const cancelBtn = editTaskForm.querySelector(".cancel-btn");
    cancelBtn.addEventListener("click", () => {
      showTaskCard(task.id);

      removeElement(editTaskForm);

      addTaskBtn.show();
    });

    const saveBtn = editTaskForm.querySelector(".save-btn");
    saveBtn.addEventListener("click", () => {
      const formData = new FormData(editTaskForm);
      formData.set("projectName", task.projectName);

      const updatedTask = controllerInterface.getUpdatedTask(formData, task);

      editTaskForm.remove();

      removeElement(taskContainer);
      showTask(updatedTask);
    });

    //saveBtn.addEventListener("click", () => {
    //    const formData = new FormData(taskEditForm);

    //  // We grab all the input values once they click save
    //  const editTaskForm = document.querySelector(".edit-task-form .inputs");
    //  const titleEl = editTaskForm.querySelector('input[class="title"]');
    //  const dueDateEl = editTaskForm.querySelector('input[type="date"]');
    //  const descriptionEl = editTaskForm.querySelector(
    //    'input[class="description"]'
    //  );

    //  // Finally, broadcast all the stored edits along unique
    //  // task id
    //  const taskEditFormValues = {};
    //  const taskId = taskContainer.getAttribute("data-id");

    //  taskEditFormValues.id = taskId;
    //  taskEditFormValues.projName = getCurrentProjectName();
    //  taskEditFormValues.name = titleEl.value;
    //  taskEditFormValues.duedate = dueDateEl.value;
    //  taskEditFormValues.description = descriptionEl.value;

    //  // Once saved, remove the edit form
    //  editTaskForm.remove();
    //});
  };
  //

  //
  //
  //
  //
  const parseDate = (dateVal) => {
    const strDate = dateVal.split("-");
    const date = strDate[1] + "-" + strDate[2] + "-" + strDate[0];

    return date;
  };
  //
  //
  //
  //
  //
  //
  //  const createInbox = () => {
  //    updateTaskViewerTitle("Inbox");
  //
  //    const inboxBtn = document.querySelector(".inbox-nav-link");
  //    inboxBtn.textContent = "Inbox";
  //
  //    let inbox = getProject();
  //    if (!inbox) {
  //      inbox = newEmptyProject("Inbox");
  //    }
  //
  //    inboxBtn.addEventListener("click", () => {
  //      showProject(inbox);
  //    });
  //  };
  //
  //  const newEmptyProject = (name) => {
  //    return projectController.newEmptyProject(name);
  //  };
  //
  //  const showInbox = () => {
  //    updateTaskViewerTitle("Inbox");
  //  };
  //
  //  const getTaskContainer = (taskId) => {
  //    // Return the div container for the task
  //    const container = document.querySelector(
  //      "[data-id=" + CSS.escape(taskId) + "]"
  //    );
  //
  //    return container;
  //  };
  //

  //
  //  const showUpdatedTask = (task) => {
  //    const name = task.name;
  //    const description = task.description;
  //    const dueDate = task.duedate;
  //    const container = getTaskContainer(task.id);
  //
  //    container.querySelector(".task-title").textContent = name;
  //    container.querySelector(".task-description").textContent = description;
  //
  //    container.querySelector(".task-due-date").textContent = dueDate;
  //  };
  //
  const getProject = (name) => {
    const proj = controllerInterface.getProject(name);
    if (proj) {
      return proj;
    }
    return false;
  };

  const _createNewTaskNode = (task) => {
    const newTaskContainer = document.createElement("div");
    newTaskContainer.setAttribute("data-id-task-id", task.id);
    newTaskContainer.classList.add("task-container");

    const taskCompleteBtn = document.createElement("input");
    taskCompleteBtn.classList.add("task-complete-btn");
    taskCompleteBtn.setAttribute("type", "checkbox");

    taskCompleteBtn.addEventListener("click", () => {
      removeElement(newTaskContainer);
      delTask(task);
    });

    const nameEl = document.createElement("p");
    nameEl.classList.add("task-title");
    nameEl.textContent = task.name;

    const descriptionEl = document.createElement("p");
    descriptionEl.classList.add("task-description");
    descriptionEl.textContent = task.description;

    const dueDateEl = document.createElement("p");
    dueDateEl.classList.add("task-due-date");
    dueDateEl.textContent = task.dueDate;
    dueDateEl.style.display = "none";

    const taskBtnContainer = document.createElement("div");
    taskBtnContainer.classList.add("task-btn-container");

    const deleteBtnEl = document.createElement("div");
    deleteBtnEl.classList.add("delete-btn");

    deleteBtnEl.addEventListener("click", () => {
      removeElement(newTaskContainer);

      controllerInterface.delTask(task);
    });

    const editBtnEL = document.createElement("div");
    editBtnEL.classList.add("edit-btn");
    editBtnEL.textContent = "Edit";

    editBtnEL.addEventListener("click", () => {
      showTaskEditMenu(task);
    });

    const taskInfoContainer = document.createElement("div");
    taskInfoContainer.classList.add("task-info-container");
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
    const taskEl = _createNewTaskNode(task);

    taskViewer.appendChild(taskEl);
    addTaskBtn.show();
  };

  const showAllTasks = (tasks) => {
    if (tasks.length > 0) {
      for (const task of tasks) {
        showTask(task);
      }
    }
  };

  const showProject = (project) => {
    clearTaskViewer();
    updateTaskViewerTitle(project.name);

    showAllTasks(project.tasks);
  };

  const showAllLoadedProjects = (projArr) => {
    for (let i = 0; i < projArr.length; i++) {
      const proj = projArr[i];
      addProjectToNavBar(proj);
      showProject(proj);
    }
  };

  const loadProjects = () => {
    const projects = controllerInterface.getAllProjects();
    showAllLoadedProjects(projects);
  };

  const getCurrentProjectName = () => {
    const name = document.querySelector(".project-viewer-title").textContent;
    return name;
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

  const clearTaskViewer = () => {
    document
      .querySelectorAll(".task-container")
      .forEach((task) => removeElement(task));
  };

  const addProjectToViewer = (projectEl) => {
    const projectListContainer = document.querySelector(".project-container");
    projectListContainer.appendChild(projectEl);
  };

  const updateTaskViewerTitle = (projName) => {
    const title = document.querySelector(".project-viewer-title");
    title.textContent = projName;
  };

  const removeProject = (name) => {
    if (controllerInterface.delProject(name)) {
      return true;
    }
    return false;
  };

  const createInboxElement = () => {
    const project = controllerInterface.getProject("Inbox");

    const projectContainerElement = document.createElement("div");

    const projectTitleElement = document.createElement("div");
    projectTitleElement.addEventListener("click", () => {
      updateTaskViewerTitle(project.name);
      showAllTasks(project);
    });

    projectTitleElement.textContent = "Inbox";
    projectContainerElement.appendChild(projectTitleElement);

    return projectContainerElement;
  };

  const createProjectElement = () => {
    const project = controllerInterface.getProject(getCurrentProjectName());

    const projectContainerElement = document.createElement("div");
    projectContainerElement.className = "project";
    projectContainerElement.setAttribute("data-id", project.id);

    const projectTitleElement = document.createElement("div");
    projectTitleElement.addEventListener("click", () => {
      if (getCurrentProjectName() != project.name) {
        clearTaskViewer();
        updateTaskViewerTitle(project.name);
        const prj = controllerInterface.getProject(project.name);
        showAllTasks(prj.tasks);
      }
    });

    projectTitleElement.textContent = project.name;
    projectTitleElement.className = "project-title";
    projectTitleElement.setAttribute("tabindex", "0");

    const deleteBtn = document.createElement("div");
    deleteBtn.className = "project-delete-btn";
    const deleteIcon = document.createElement("div");
    deleteIcon.classList.add("fa-regular", "fa-trash-can");
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.addEventListener("click", () => {
      if (removeProject(project.name)) {
        removeElement(projectContainerElement);
        const inbox = getProject("Inbox");
        showProject(inbox);
      }
    });

    projectContainerElement.appendChild(projectTitleElement);
    projectContainerElement.appendChild(deleteBtn);

    return projectContainerElement;
  };
  //
  const isDefaultProject = (prjName) => {
    if (defaultProjects.includes(prjName)) {
      return true;
    }
    return false;
  };

  const addProjectToNavBar = (project) => {
    const prjName = project.name;
    if (!isDefaultProject(prjName)) {
      updateTaskViewerTitle(prjName);

      const projectEl = createProjectElement(project);
      addProjectToViewer(projectEl);
    }
  };

  //const getNewTask = (formDataObj) => {
  //  const projName = getCurrentProjectName();
  //  const task = controllerInterface.addTaskToProject(formDataObj, projName);

  //  return task;
  //};

  const appendFormToViewer = (form, el) => {
    const viewer = document.querySelector(el);

    viewer.appendChild(form);
  };

  const showAddTask = () => {
    const form = createForm("new-task-template");
    appendFormToViewer(form, ".project-viewer");

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
      addTaskBtn.show();

      form.remove();
    });

    const saveBtn = document.querySelector(".save-task-btn");
    saveBtn.addEventListener("click", () => {
      const prjName = getCurrentProjectName();
      const formDataObj = new FormData(form);

      formDataObj.set("projectName", prjName);

      const task = controllerInterface.addTaskToProject(formDataObj);

      showTask(task);
      removeElement(form);
    });
  };

  const addNewTask = () => {
    addTaskBtn.hide();
    showAddTask();
  };

  const showNewProject = (proj) => {
    if (proj) {
      addProjectToNavBar(proj);
      showAllTasks(proj);
      addProjBtn.show();
    } else {
      showProjNameError();
      addProjBtn.show();
    }
  };
  const showAddProjectDialog = () => {
    addProjBtn.hide();

    const newProjectForm = createForm("new-project-template");

    const projectContainer = document.querySelector(".project-container");
    projectContainer.appendChild(newProjectForm);

    const confirmNewProjectBtn = document.querySelector(".confirm-project-btn");
    confirmNewProjectBtn.addEventListener("click", () => {
      const proj = controllerInterface.addNewProject(
        newProjectForm.elements["name"].value
      );

      showNewProject(proj);
      clearTaskViewer();

      newProjectForm.remove();
    });

    const cancelNewProjectBtn = document.querySelector(".cancel-project-btn");
    cancelNewProjectBtn.addEventListener("click", () => {
      removeElement(newProjectForm);
      addProjBtn.show();
    });
  };

  const showProjNameError = () => {
    console.log("Error: project name already exists");
  };

  const projectExists = (name) => {
    if (controllerInterface.projectExists(name)) {
      return true;
    }
  };

  const createNewProject = (name) => {
    return controllerInterface.addNewProject(name);
  };

  const loadDefaultProjects = () => {
    for (let prjName of defaultProjects) {
      if (projectExists(prjName)) {
        const savedProject = getProject(prjName);
        showProject(savedProject);
      } else {
        const newProject = createNewProject(prjName);
        showProject(newProject);
      }
    }
  };

  const getToday = () => {
    const today = new Date();
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const todayFormatted = yyyy + "-" + mm + "-" + dd;

    return todayFormatted;
  };

  const getTodaysTasks = () => {
    const today = getToday();

    const tasks = controllerInterface.getTasksByDate(today);

    return tasks;
  };

  const startTaskEvents = () => {
    const inboxBtn = document.querySelector(".inbox-title");
    inboxBtn.addEventListener("click", () => {
      showProject(getProject("Inbox"));
    });

    const todayBtn = document.querySelector(".today-title");
    todayBtn.addEventListener("click", () => {
      const tasks = getTodaysTasks();
      clearTaskViewer();
      updateTaskViewerTitle("Today");
      showAllTasks(tasks);
    });

    const addProjectBtn = document.querySelector(".add-project-btn");
    addProjectBtn.addEventListener("click", showAddProjectDialog);

    const addTaskBtn = document.querySelector(".add-task-btn");
    addTaskBtn.addEventListener("click", addNewTask);
  };

  const initializeUi = () => {
    startTaskEvents();
    loadProjects();
  };

  window.onload = () => {
    loadDefaultProjects();
  };

  return {
    initializeUi,
  };
})();

export default domService;
