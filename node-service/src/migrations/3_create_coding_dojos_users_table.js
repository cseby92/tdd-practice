exports.up = function(knex) {
    return knex.schema.createTable('coding_dojos-users', function(table) {
        table.integer('user_id');
        table.integer('coding_dojo_id');
        table.timestamp('registered_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('coding_dojos-users');
};
