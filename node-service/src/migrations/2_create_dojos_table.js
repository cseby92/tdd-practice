exports.up = function(knex) {
    return knex.schema.createTable('coding_dojos', function(table) {
        table.integer('id');
        table.string('name');
        table.date('date');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('coding_dojos');
};
