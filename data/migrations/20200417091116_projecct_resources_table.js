
exports.up = function(knex) {
  knex.schema.createTable("project_resources", tbl => {
    tbl.increments();

    //project first maybe
    tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")

    //resources
    tbl.integer("resource_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("resources")
})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project_resources')
};
