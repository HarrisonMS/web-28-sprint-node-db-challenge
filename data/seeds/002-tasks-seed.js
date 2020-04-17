
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description: "description of task id 1 for project_id 2", notes: "notes for task id 1", completed: 0, project_id: 2 },
        { description: "description of task id 2 for project_id 1", notes: "notes for task id 1", completed: 0, project_id: 1 },
        { description: "description of task id 3 for project_id 3", notes: "notes for task id 1", completed: 0, project_id: 3 },
        { description:  "description of task id 4 for project_id 1", notes: "notes for task id 1", completed: 0, project_id: 1 },
      ]);
    });
};
