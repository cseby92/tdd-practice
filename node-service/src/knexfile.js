const path = require('path');

module.exports = {
    client: 'pg',
    connection: 'postgres://developer:development_secret@tdd-practice-db:5432/postgres',
    migrations: {
        tableName: 'migrations',
        directory: path.normalize(path.join(__dirname, './migrations'))
    }
};
