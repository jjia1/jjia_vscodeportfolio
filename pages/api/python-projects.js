import data from './python-projects.json';

export const getPythonProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getPythonProjects();
  res.json(projects);
};
