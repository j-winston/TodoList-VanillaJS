import pubSub from "./pubsub";
import uid from "./uid";

const Container = (() => {
  const _createProjectNavEl = (_formData) => {
    const name = _formData.get("name");

    const projectEl = document.createElement("div");
    projectEl.className = "project";

    const projectTitleEl = document.createElement("div");
    projectTitleEl.className = "project-title";
    projectTitleEl.textContent = name;
    projectTitleEl.addEventListener("click", () => {
      updateTaskViewerTitle(name);
      pubSub.publish("projectClicked", name);
    });

    const deleteBtn = document.createElement("div");
    deleteBtn.className = "project-delete-btn";
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
      projectEl.remove();

      pubSub.publish("projectRemoved", name);
    });

    projectEl.appendChild(projectTitleEl);
    projectEl.appendChild(deleteBtn);

    return projectEl;
  };

  const _createTaskElement = (_formData) => {
    const taskEl = document.createElement("div");
    taskEl.classList.add("task-container");

    const taskCompleteBtn = document.createElement("input");
    taskCompleteBtn.classList.add("task-complete-btn");
    taskCompleteBtn.setAttribute("type", "checkbox");

    taskCompleteBtn.addEventListener("click", () => {
      taskEl.remove();
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

    const tId = uid.create();
    taskEl.setAttribute("data-id-task-id", tId);

    const taskBtnContainer = document.createElement("div");
    taskBtnContainer.classList.add("task-btn-container");

    const deleteBtnEl = document.createElement("div");
    deleteBtnEl.classList.add("delete-btn");
    deleteBtnEl.textContent = "Del";

    deleteBtnEl.addEventListener("click", () => {
      pubSub.publish("taskDeleted", tId);
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

  const _getTaskDisplayEl = () => {
    const viewer = document.createElement("div");
    viewer.classList.add("project-tasks");

    return viewer;
  };

  const Project = (form) => {
    let _formData = new FormData(form);
    let _name = _formData.get("name");
    let _lastTaskValues;
    let _lastTaskEl;
      let _navEl; 

    const _getTaskEl = (form) => {
      let formData = new FormData(form);
      let taskEl = _createTaskElement(formData);
      return taskEl;
    };

    const _saveValues = (form) => {
      const formData = new FormData(form);
      _lastTaskValues = formData.entries();
    };

    const newTaskEl = (form) => {
      const taskCardEl = _getTaskEl(form);
      _saveValues(form);
      _lastTaskEl = taskCardEl;

      return taskCardEl;
    };

    return {
      get navEl() {
        return _navEl;
      },

      set name(name) {
        _formData.set("name", name);
        _navEl = _createProjectNavEl(_formData);
      },

      get name() {
        return _name;
      },

      get lastTaskEl() {
        return _lastTaskEl;
      },

      get lastTaskValues() {
        return _lastTaskValues;
      },

      newTaskEl,
    };
  };

  return {
    Project,
  };
})();

export default Container;
