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

  const loadProject = (name) => {
    const jsnData = localStorage.getItem(`${name}`);
    const project = JSON.parse(jsnData);
    return project;
  };

  const deleteProject = (name) => {
    localStorage.removeItem(`${name}`);
    if (!localStorage.getItem(`${name}`)) {
      return true;
    }
  };

  const loadTask = (projName, id) => {
    const proj = loadProject(projName);
    const tasks = proj.tasks;

    for (const task of tasks) {
      if (task.id === id) {
        return task;
      }
    }
  };

  return {
    saveProject,
    loadProject,
    deleteProject,
    loadTask,
  };
})();

export default storage;
