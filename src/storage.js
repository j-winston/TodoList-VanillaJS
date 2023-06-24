// Module: storage.js
// Role: Service provider
// Responsilities: Save project data to user local drive
const storage = (() => {
  const saveProject = (project) => {
    localStorage.setItem(`${project.name}`, JSON.stringify(project));

    if (localStorage.getItem(`${project.name}`)) {
      return true;
    }
  };

  //
  //  if (project) {
  //    return project;
  //  }

  //  return false;
  //};

  const loadAllProjects = () => {
    const projects = [];

    for (let i = 0; i < localStorage.length; i++) {
      const projName = localStorage.key(i);
      const project = loadProject(projName);

      projects.push(project);
    }
    return projects;
  };

  const deleteProject = (name) => {
    localStorage.removeItem(`${name}`);
    if (!localStorage.getItem(`${name}`)) {
      return true;
    }
    return false;
  };

  //const deleteAllProjects = () => {
  //  localStorage.clear();
  //};

  //const loadTask = (projName, id) => {
  //  const proj = loadProject(projName);
  //  const tasks = proj.tasks;

  //  for (const task of tasks) {
  //    if (task.id === id) {
  //      return task;
  //    }
  //  }
  //};

  const deleteTask = (id, projName) => {
    const proj = loadProject(projName);
    const tasks = proj.tasks;

    if (tasks.length > 0) {
      for (let task of tasks) {
        if (task.id === id) {
          const idx = tasks.indexOf(task);
          alert(task.name);
          tasks.splice(idx, 1);
        }
      }
    }

    saveProject(proj);
  };

  const loadProject = (name) => {
    const jsnData = localStorage.getItem(`${name}`);
    const project = JSON.parse(jsnData);
    return project;
  };

  return {
    loadAllProjects,
    saveProject,
    loadProject,
    deleteProject,
    deleteTask,
  };
})();
//  loadProject,
//  deleteAllProjects,
//  deleteProject,
//  loadTask,
//  deleteTask
//};

export default storage;
