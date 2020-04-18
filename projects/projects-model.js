const db = require('../data/db-config')

module.exports = {
  getProjects,
  findById,
  getResources,
  addProject,
  getTasks
}
function findById(id) {
	return db("projects").where({ id: Number(id) }).first()
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
function getTasks(id) {
  const project_id = Number(id);
  return db('tasks')
    .select(
      'projects.name', 
      'projects.description as project_description',
      'tasks.notes',
      'tasks.id',
      'tasks.project_id')
    .join('projects', 'tasks.project_id', 'projects.id')
    .where({ project_id });
}

// async function addResource(resource) {
//   const [id] = await db('resources').insert(resource);

//   return findById(id);
// }

// function getResources(id) {
//   const project_id = parseInt(id);
//   return db('project_resources')
//     .select(
//       'resources.id as resource_id',
//       'projects.id as project_id',
//       'projects.name as project_name',
//       'resources.name as resource_name',
//       'projects.description as project_description',
//       'resources.description as resource_description',
//     )
//     .join('projects', 'project_resources.project_id', 'projects.id')
//     .join('resources', 'project_resources.resource_id', 'resources.id')
//     .where('projects.id', project_id);
// }

