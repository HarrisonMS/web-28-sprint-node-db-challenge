
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: "project 1 name", description: "description project 1", completed: 0 },
        { name: "project 2 name", description: "description project 2", completed: 0 },
        { name: "project 3 name", description: "description project 3", completed: 0 },
      ]);
    });
};
