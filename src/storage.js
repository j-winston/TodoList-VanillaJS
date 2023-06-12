// Module: storage.js
// Role: Service provider
// Responsilities: Save project data to user local drive
const storage = (() => {
  const saveProject = (project) => {
    const jsnProj = toJsn(project);

    localStorage.setItem(`${project.name}`, jsnProj);

    if (localStorage.getItem(`${project.name}`)) {
      return true;
    }
  };

  // TODO on ice
  const getLastTaskAdded = () => {
    const length = localStorage.length;
    const key = localStorage.key(length - 1);
    const proj = loadProject(key);
    const tasks = proj.tasks;

    const lastTask = tasks[tasks.length - 1];

    return lastTask;
  };

  const toJsn = (project) => {
    return JSON.stringify(project);
  };

  const toString = (jsnData) => {
    return JSON.parse(jsnData);
  };

  const loadProject = (projectName) => {
    const jsnData = localStorage.getItem(`${projectName}`);
    if (jsnData) {
      const project = toString(jsnData);

      return project;
    } else return false;
  };

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
  };
  const deleteAllProjects = () => {
    localStorage.clear();
  };

  const loadTask = (projName, id) => {
    const proj = loadProject(projName);

    for (const task of proj.tasks) {
      // clearly proj.tasks is being loaded with the wrong task ob
      alert(task.getId);
      if (task.getId === id) {
        return task;
      }
    }
  };

  return {
    saveProject,
    loadProject,
    loadAllProjects,
    deleteAllProjects,
    deleteProject,
    loadTask,
    getLastTaskAdded,
  };
})();

export default storage;
