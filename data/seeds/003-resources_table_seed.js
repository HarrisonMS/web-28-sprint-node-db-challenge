
exports.seed = function(knex) {

  return knex("resources").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "resource name 1", description: "resource description 1" },
        { name: "resource name 2", description: "resource description 2" },
        { name: "resource name 3", description: "resource description 3" },
      ]);
    });
};
