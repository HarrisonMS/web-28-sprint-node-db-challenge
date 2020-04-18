const db = require('../data/db-config')

module.exports = {
  getProjects,
  findById,
  getResources,
  addProject

}
function findById() {
	return db("projects").where({ id }).first()
}

function getProjects() {
	return db("projects");
}



function getResources(id) {
  return db('project_resources as pr')
    .select('r.name as resource_name', 'r.description as resource_description')
    .join('resources as r', 'pr.resource_id', 'r.id')
    .where('pr.project_id', id)
}

function addProject(project) {
  return db('projects')
    .insert(project, 'id')
    .then((id) => {
      return findById(id)
    })
}