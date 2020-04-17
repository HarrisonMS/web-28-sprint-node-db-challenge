
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources").del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "resource name 1", description: "resource description 1" },
        { name: "resource name 2", description: "resource description 2" },
        { name: "resource name 3", description: "resource description 3" },
      ]);
    });
};