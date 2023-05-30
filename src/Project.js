// Module: Project.js
//  Role: Factory function for project object
//  Responsibilities: Return a new project object

import uid from "./uid";

const Project = (name) => {
  const createUid = () => {
    const id = uid.create();
    return id;
  };

  return Object.assign({
    id: createUid(),
    name: name,
    tasks: [],
  });
};

export default Project;
