const db = require('../data/db-config')

module.exports = {
  getProjects,
  getResources,

}

function getProjects() {
	return db("projects");
}

function getResources() {
	return db("resources");
}
function getResources(id) {
  return db('project_resources as pr')
    .select('r.name as resource_name', 'r.description as resource_description')
    .join('resources as r', 'pr.resource_id', 'r.id')
    .where({id})
    
    
}