let knex = require('knex');

module.exports = class DbConnection {
    static getInstance() {
        if (!DbConnection._instance) {
            throw new Error('Did not connect to database.');
        }

        return DbConnection._instance;
    }

    static connect() {
        DbConnection._instance = knex({
            client: 'pg',
            connection: 'postgres://developer:development_secret@tdd-practice-db:5432/postgres',
            pool: {
                min: 1,
                max: 1
            }
        });
    }

};
