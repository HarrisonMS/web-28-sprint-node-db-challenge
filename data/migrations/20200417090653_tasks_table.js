
exports.up = function(knex) {
  return knex.schema.createTable("tasks", tbl => {
  tbl.increments();

  tbl.string("description", 255).notNullable();

  tbl.string("notes",255).notNullable();

  tbl.boolean("completed").notNullable()

  //connect task to projects
  tbl.integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
};
