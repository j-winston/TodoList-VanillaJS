// Module: Task.js
// Role: Task object
// Responsibilites: Hold task data

import uid from "./uid";

const Task = () => {
  return Object.assign({
    id: uid.create(),
    name: "",
    description,
    duedate,
    projName,
  });
};
