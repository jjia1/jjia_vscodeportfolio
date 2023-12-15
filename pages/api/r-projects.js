import data from './r-projects.json';

export const getRProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getRProjects();
  res.json(projects);
};
