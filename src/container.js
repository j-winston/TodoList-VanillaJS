const Container = (() => {
  const _createProjectElement = (_formData) => {
    const name = _formData.get("name");

    const projectEl = document.createElement("div");
    projectEl.className = "project";

    const projectTitleEl = document.createElement("div");
    projectTitleEl.className = "project-title";
    projectTitleEl.textContent = name;
    projectTitleEl.addEventListener("click", () => {
      updateTaskViewerTitle(name);
      // pubSub.publish("projectClicked", project);
    });

    const deleteBtn = document.createElement("div");
    deleteBtn.className = "project-delete-btn";
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
      removeProject(projectEl);

      pubSub.publish("projectRemoved", name);
    });

    projectEl.appendChild(projectTitleEl);
    projectEl.appendChild(deleteBtn);

    return projectEl;
  };

  const _createTaskElement = (_formData) => {
    const taskEl = document.createElement("div");

    // taskEl.setAttribute("data-id", task.getId());
    taskEl.classList.add("task-container");

    const taskCompleteBtn = document.createElement("input");
    taskCompleteBtn.classList.add("task-complete-btn");
    taskCompleteBtn.setAttribute("type", "checkbox");

    taskCompleteBtn.addEventListener("click", () => {
      removeElement(taskEl);
    });

    const nameEl = document.createElement("p");
    nameEl.classList.add("task-title");
    nameEl.textContent = _formData.get("name");

    const descriptionEl = document.createElement("p");
    descriptionEl.classList.add("task-description");
    descriptionEl.textContent = _formData.get("description");

    const dueDateEl = document.createElement("p");
    dueDateEl.classList.add("task-due-date");
    dueDateEl.textContent = _formData.get("due-date");

    const taskBtnContainer = document.createElement("div");
    taskBtnContainer.classList.add("task-btn-container");

    const deleteBtnEl = document.createElement("div");
    deleteBtnEl.classList.add("delete-btn");
    deleteBtnEl.textContent = "Del";

    deleteBtnEl.addEventListener("click", () => {
      removeElement(taskEl);

      pubSub.publish("taskDeleted", task);
    });

    const editBtnEL = document.createElement("div");
    editBtnEL.classList.add("edit-btn");
    editBtnEL.textContent = "Edit";

    editBtnEL.addEventListener("click", () => {
      showTaskEditMenu(taskEl);
    });

    const taskInfoContainer = document.createElement("div");
    taskBtnContainer.append(deleteBtnEl, editBtnEL);
    taskInfoContainer.append(nameEl, descriptionEl, dueDateEl);

    taskEl.append(taskCompleteBtn, taskInfoContainer, taskBtnContainer);

    return taskEl;
  };

  const getNewProjectContainer = (form) => {
    let _formData = new FormData(form);
    let el = _createProjectElement(_formData);
    let _projName = _formData.get("name");

    return {
      getElement() {
        return el;
      },

      set name(name) {
        _formData.set("name", name);
        el = _createProjectElement(_formData);
      },

      get name() {
        return _projName;
      },
    };
  };

  const getNewTaskContainer = (form) => {
    let _formData = new FormData(form);
    let _taskEl = _createTaskElement(_formData);

    let _name = _formData.get("name");
    let _description = _formData.get("description");
    let _dueDate = _formData.get("due-date");

    return {
      getElement() {
        return _taskEl;
      },

      get name() {
        return _name;
      },

      set name(name) {
        _name = name;
      },

      get description() {
        return _description;
      },

      set description(description) {
        _description = description;

        _formData.set("description", _description);
        _el = _createTaskElement(_formData);
      },

      get dueDate() {
        return _dueDate;
      },
    };
  };

  return {
    getNewProjectContainer,
    getNewTaskContainer,
  };
})();

export default Container;
