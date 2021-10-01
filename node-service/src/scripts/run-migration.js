const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig);

knex.migrate.latest()
    .then(() => knex.migrate.currentVersion())
    .then((currentVersion) => {
        console.log('Current version: ', currentVersion);
        process.exit(0);
    }).catch((error) => {
    console.error(error.message);
    process.exit(1);
});
